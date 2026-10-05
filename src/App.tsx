import React, { useState, useMemo, useCallback } from 'react';
import {
  AttemptQuestionResult,
  BadgeState,
  ChallengeMode,
  ChallengeResult,
  ChallengeSession,
  Grade,
  Question,
  SubjectId,
  UnitDef,
} from './types';
import {
  CURRICULUM_DATA,
  getBadgeById,
  getUnitById,
} from './data/curriculum';
import {
  formatFriendlyDate,
  getAllBadgeStates,
  getAttemptRecords,
  getLearnerId,
  getMasteryStatus,
  getSimDateOffset,
  getSimulatedDate,
  recordAttempt,
  resetAllData,
  setSimDateOffset,
  updateBadgeState,
} from './storage';
import {
  selectBadgeQuestions,
  selectUnitChallengeQuestions,
} from './utils/questionSelector';
import { Header } from './components/Header';
import { BadgeMap } from './components/BadgeMap';
import { SubjectGradeView } from './components/SubjectGradeView';
import { UnitDetail } from './components/UnitDetail';
import { QuestionView } from './components/QuestionView';
import { ResultView } from './components/ResultView';
import { SettingsModal } from './components/SettingsModal';

type AppView = 'map' | 'subject_grade' | 'unit' | 'question' | 'result';

export default function App() {
  // Navigation states
  const [currentView, setCurrentView] = useState<AppView>('map');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('sci');
  const [selectedGrade, setSelectedGrade] = useState<Grade>(1);
  const [selectedUnitId, setSelectedUnitId] = useState<string>('sci-g1-substance');

  // Interactive challenge session
  const [currentSession, setCurrentSession] = useState<ChallengeSession | null>(null);
  const [lastResult, setLastResult] = useState<ChallengeResult | null>(null);

  // Storage synced states
  const [badgeStates, setBadgeStates] = useState<Record<string, BadgeState>>(() =>
    getAllBadgeStates()
  );
  const [simDateOffsetDays, setSimDateOffsetState] = useState<number>(() =>
    getSimDateOffset()
  );
  const [learnerId, setLearnerId] = useState<string>(() => getLearnerId());

  // Settings modal
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Current simulated date
  const simDate = useMemo(() => {
    return getSimulatedDate(simDateOffsetDays);
  }, [simDateOffsetDays]);

  // Selected Unit object
  const currentUnitContext = useMemo(() => {
    return getUnitById(selectedUnitId);
  }, [selectedUnitId]);

  // Handler: Select a Subject & Grade on the 5x3 Map
  const handleSelectSubjectGrade = (subjectId: SubjectId, grade: Grade) => {
    setSelectedSubjectId(subjectId);
    setSelectedGrade(grade);
    setCurrentView('subject_grade');
  };

  // Handler: Select a Unit inside a Subject & Grade
  const handleSelectUnit = (unit: UnitDef) => {
    setSelectedUnitId(unit.id);
    setCurrentView('unit');
  };

  // Handler: Go directly to a unit from alerts
  const handleGoDirectToUnit = (unitId: string) => {
    const ctx = getUnitById(unitId);
    if (ctx) {
      setSelectedSubjectId(ctx.subject.id);
      setSelectedGrade(ctx.grade);
      setSelectedUnitId(unitId);
      setCurrentView('unit');
    }
  };

  // Start Practice Challenge (5 questions for a single badge)
  const handleStartPractice = useCallback(
    (badgeId: string) => {
      const attempts = getAttemptRecords();
      const questions = selectBadgeQuestions(badgeId, attempts, 5);
      const session: ChallengeSession = {
        mode: 'practice',
        badgeId,
        unitId: selectedUnitId,
        questions,
        currentIndex: 0,
        userAnswers: [],
        isCompleted: false,
      };
      setCurrentSession(session);
      setCurrentView('question');
    },
    [selectedUnitId]
  );

  // Start Mastery Challenge (5 questions for a single badge, passed >= 7 days)
  const handleStartMastery = useCallback(
    (badgeId: string) => {
      const attempts = getAttemptRecords();
      const questions = selectBadgeQuestions(badgeId, attempts, 5);
      const session: ChallengeSession = {
        mode: 'mastery',
        badgeId,
        unitId: selectedUnitId,
        questions,
        currentIndex: 0,
        userAnswers: [],
        isCompleted: false,
      };
      setCurrentSession(session);
      setCurrentView('question');
    },
    [selectedUnitId]
  );

  // Start Unit Challenge (8 mixed questions from passed/mastered badges)
  const handleStartUnitChallenge = useCallback(() => {
    if (!currentUnitContext) return;
    const eligibleBadgeIds = currentUnitContext.unit.badges
      .filter((b) => {
        const st = badgeStates[b.id];
        return st && (st.stage === 'passed' || st.stage === 'mastered');
      })
      .map((b) => b.id);

    if (eligibleBadgeIds.length < 2) return;

    const attempts = getAttemptRecords();
    const questions = selectUnitChallengeQuestions(eligibleBadgeIds, attempts, 8);
    const session: ChallengeSession = {
      mode: 'unit',
      unitId: selectedUnitId,
      questions,
      currentIndex: 0,
      userAnswers: [],
      isCompleted: false,
    };
    setCurrentSession(session);
    setCurrentView('question');
  }, [currentUnitContext, badgeStates, selectedUnitId]);

  // Answer submit during question flow
  const handleAnswerSubmit = (record: {
    questionId: string;
    question: Question;
    userAnswer: string;
    userReasonId?: string;
    isCorrect: boolean;
    hintsOpened: number;
    countedAsCorrect: boolean;
    specificFeedback?: string;
  }) => {
    if (!currentSession) return;
    setCurrentSession({
      ...currentSession,
      userAnswers: [...currentSession.userAnswers, record],
    });
  };

  // Next Question or Finish
  const handleNextQuestion = () => {
    if (!currentSession) return;

    const nextIdx = currentSession.currentIndex + 1;
    if (nextIdx < currentSession.questions.length) {
      setCurrentSession({
        ...currentSession,
        currentIndex: nextIdx,
      });
      return;
    }

    // Complete Session & Record
    finishSession(currentSession);
  };

  const finishSession = (session: ChallengeSession) => {
    const totalQuestions = session.questions.length;
    const countedCorrectCount = session.userAnswers.filter(
      (a) => a.countedAsCorrect
    ).length;
    const rawCorrectCount = session.userAnswers.filter((a) => a.isCorrect).length;
    const hintsUsedCount = session.userAnswers.filter(
      (a) => a.isCorrect && a.hintsOpened > 0
    ).length;

    const attemptQuestionResults: AttemptQuestionResult[] = session.userAnswers.map(
      (a) => ({
        questionId: a.questionId,
        isCorrect: a.isCorrect,
        hintsOpened: a.hintsOpened,
        selectedAnswer: a.userAnswer,
        selectedReasonId: a.userReasonId,
        countedAsCorrect: a.countedAsCorrect,
      })
    );

    if (session.mode === 'unit') {
      // UNIT CHALLENGE (8 questions, >= 7 passes)
      const isPassed = countedCorrectCount >= 7;
      const unitCtx = getUnitById(session.unitId!);
      const unitPromotions: ChallengeResult['unitPromotions'] = [];

      // Record immutable attempt
      recordAttempt({
        simDate: simDate.dateStr,
        mode: 'unit',
        targetId: session.unitId!,
        totalQuestions,
        correctCount: countedCorrectCount,
        hintsUsedCount,
        questionResults: attemptQuestionResults,
        isPassed,
      });

      // If passed, promote eligible badges (passed >= 7 days) to mastered
      if (unitCtx) {
        unitCtx.unit.badges.forEach((b) => {
          const bState = badgeStates[b.id];
          if (!bState || (bState.stage !== 'passed' && bState.stage !== 'mastered'))
            return;

          const masteryCheck = getMasteryStatus(bState, simDate.dateStr);

          if (isPassed && bState.stage === 'passed' && masteryCheck.canChallenge) {
            updateBadgeState(b.id, (prev) => ({
              ...prev,
              stage: 'mastered',
              masteredDate: simDate.dateStr,
            }));
            unitPromotions.push({
              badgeId: b.id,
              badgeName: b.name,
              promotedToMastered: true,
              remainingDays: 0,
            });
          } else if (bState.stage === 'passed') {
            unitPromotions.push({
              badgeId: b.id,
              badgeName: b.name,
              promotedToMastered: false,
              remainingDays: masteryCheck.daysRemaining,
            });
          }
        });
      }

      // Sync badgeStates
      setBadgeStates(getAllBadgeStates());

      let nextAction = '';
      if (isPassed) {
        nextAction =
          '単元チャレンジ合格！総合的な実力がしっかり身についています。';
      } else if (countedCorrectCount === 6) {
        nextAction = 'あと1問！もう一度単元チャレンジに挑戦しよう。';
      } else {
        nextAction =
          '間違えた問題を復習して、もう一度単元チャレンジに挑戦しよう。';
      }

      const result: ChallengeResult = {
        mode: 'unit',
        unitId: session.unitId,
        unitName: unitCtx?.unit.name || '単元チャレンジ',
        totalQuestions,
        rawCorrectCount,
        countedCorrectCount,
        hintsUsedCount,
        isPassed,
        nextActionText: nextAction,
        unitPromotions,
      };

      setLastResult(result);
      setCurrentView('result');
      return;
    }

    // SINGLE BADGE CHALLENGE (5 questions, >= 4 passes)
    const badgeId = session.badgeId!;
    const badgeCtx = getBadgeById(badgeId);
    const prevBadgeState = badgeStates[badgeId] || {
      stage: 'not_started',
      passedDate: null,
      masteredDate: null,
      lastAttemptDate: null,
      attemptCount: 0,
    };
    const prevStage = prevBadgeState.stage;

    const isPassed = countedCorrectCount >= 4;
    let newStage = prevStage;
    let nextAction = '';

    if (session.mode === 'mastery') {
      if (isPassed) {
        newStage = 'mastered';
        nextAction =
          '定着達成！いつでも何も見ずに使える本物の実力がつきました。';
      } else {
        newStage = prevStage; // remains passed
        if (countedCorrectCount === 3) {
          nextAction = 'あと1問！もう一度定着チャレンジに挑戦しよう。';
        } else {
          nextAction = '解説を確認して、もう一度定着チャレンジに挑戦しよう。';
        }
      }
    } else {
      // Practice mode
      if (isPassed) {
        if (prevStage === 'not_started' || prevStage === 'practicing') {
          newStage = 'passed';
        }
        const targetDate = getSimulatedDate(simDateOffsetDays + 7);
        nextAction = `合格！7日後（${targetDate.displayStr}）に定着チャレンジをしよう。`;
      } else {
        if (prevStage === 'not_started') {
          newStage = 'practicing';
        }
        if (countedCorrectCount === 3) {
          nextAction = 'あと1問！もう一度挑戦しよう。';
        } else {
          nextAction = '解説をよく読んで、もう一度挑戦しよう！';
        }
      }
    }

    // Record immutable attempt
    recordAttempt({
      simDate: simDate.dateStr,
      mode: session.mode,
      targetId: badgeId,
      totalQuestions,
      correctCount: countedCorrectCount,
      hintsUsedCount,
      questionResults: attemptQuestionResults,
      isPassed,
    });

    // Update cached badge state
    updateBadgeState(badgeId, (prev) => ({
      ...prev,
      stage: newStage,
      passedDate:
        isPassed && !prev.passedDate ? simDate.dateStr : prev.passedDate,
      masteredDate:
        newStage === 'mastered' && !prev.masteredDate
          ? simDate.dateStr
          : prev.masteredDate,
      lastAttemptDate: simDate.dateStr,
      attemptCount: prev.attemptCount + 1,
    }));

    setBadgeStates(getAllBadgeStates());

    const result: ChallengeResult = {
      mode: session.mode,
      badgeId,
      badgeName: badgeCtx?.badge.name,
      totalQuestions,
      rawCorrectCount,
      countedCorrectCount,
      hintsUsedCount,
      isPassed,
      previousStage: prevStage,
      newStage,
      nextActionText: nextAction,
    };

    setLastResult(result);
    setCurrentView('result');
  };

  // Abort ongoing question challenge
  const handleAbortChallenge = () => {
    setCurrentSession(null);
    setCurrentView('unit');
  };

  // Simulation controls
  const handleAdvanceDays = (days: number) => {
    const nextOffset = simDateOffsetDays + days;
    setSimDateOffset(nextOffset);
    setSimDateOffsetState(nextOffset);
  };

  const handleResetDate = () => {
    setSimDateOffset(0);
    setSimDateOffsetState(0);
  };

  const handleResetAllData = () => {
    resetAllData();
    setBadgeStates({});
    setSimDateOffsetState(0);
    setLearnerId(getLearnerId());
    setCurrentView('map');
    setCurrentSession(null);
    setLastResult(null);
  };

  // Navigation back handler
  const handleBack = () => {
    if (currentView === 'result') {
      setCurrentView('unit');
    } else if (currentView === 'question') {
      handleAbortChallenge();
    } else if (currentView === 'unit') {
      setCurrentView('subject_grade');
    } else if (currentView === 'subject_grade') {
      setCurrentView('map');
    }
  };

  const backButtonLabel = useMemo(() => {
    if (currentView === 'subject_grade') return '地図へ';
    if (currentView === 'unit') {
      const sub = CURRICULUM_DATA[selectedSubjectId];
      return `${sub?.name}・中${selectedGrade}へ`;
    }
    if (currentView === 'question' || currentView === 'result') return '単元へ';
    return 'もどる';
  }, [currentView, selectedSubjectId, selectedGrade]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Universal Header */}
      <Header
        currentSimDateStr={simDate.displayStr}
        learnerId={learnerId}
        onOpenSettings={() => setIsSettingsOpen(true)}
        showBackButton={currentView !== 'map'}
        onBack={handleBack}
        backButtonLabel={backButtonLabel}
        onGoHome={() => {
          if (currentView === 'question') {
            handleAbortChallenge();
          }
          setCurrentView('map');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-12">
        {/* Screen 1: 5-Subject × 3-Grade Map */}
        {currentView === 'map' && (
          <BadgeMap
            badgeStates={badgeStates}
            currentSimDateStr={simDate.dateStr}
            onSelectSubjectGrade={handleSelectSubjectGrade}
            onGoDirectToUnit={handleGoDirectToUnit}
          />
        )}

        {/* Screen 2: Subject & Grade View */}
        {currentView === 'subject_grade' && (
          <SubjectGradeView
            subjectId={selectedSubjectId}
            grade={selectedGrade}
            badgeStates={badgeStates}
            onBackToMap={() => setCurrentView('map')}
            onSelectUnit={handleSelectUnit}
          />
        )}

        {/* Screen 3: Unit View */}
        {currentView === 'unit' && currentUnitContext && (
          <UnitDetail
            unit={currentUnitContext.unit}
            subjectName={currentUnitContext.subject.name}
            gradeName={currentUnitContext.grade === 1 ? '中1' : currentUnitContext.grade === 2 ? '中2' : '中3'}
            badgeStates={badgeStates}
            currentSimDateStr={simDate.dateStr}
            onBackToSubjectGrade={() => setCurrentView('subject_grade')}
            onStartPractice={handleStartPractice}
            onStartMastery={handleStartMastery}
            onStartUnitChallenge={handleStartUnitChallenge}
          />
        )}

        {/* Screen 4: Question View */}
        {currentView === 'question' && currentSession && (
          <QuestionView
            session={currentSession}
            title={
              currentSession.badgeId
                ? getBadgeById(currentSession.badgeId)?.badge.name ||
                  'バッジチャレンジ'
                : '単元チャレンジ（総合）'
            }
            onAnswerSubmit={handleAnswerSubmit}
            onNextQuestion={handleNextQuestion}
            onAbortChallenge={handleAbortChallenge}
          />
        )}

        {/* Screen 5: Result View */}
        {currentView === 'result' && lastResult && (
          <ResultView
            result={lastResult}
            onRetry={() => {
              if (lastResult.mode === 'unit') {
                handleStartUnitChallenge();
              } else if (lastResult.badgeId) {
                if (lastResult.mode === 'mastery') {
                  handleStartMastery(lastResult.badgeId);
                } else {
                  handleStartPractice(lastResult.badgeId);
                }
              }
            }}
            onBackToUnit={() => setCurrentView('unit')}
            onBackToMap={() => setCurrentView('map')}
          />
        )}
      </main>

      {/* Settings & Date Simulation Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentSimDateStr={simDate.displayStr}
        fullDisplayStr={simDate.fullDisplayStr}
        simDateOffsetDays={simDateOffsetDays}
        learnerId={learnerId}
        onAdvanceDays={handleAdvanceDays}
        onResetDate={handleResetDate}
        onResetAllData={handleResetAllData}
      />
    </div>
  );
}
