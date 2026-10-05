import React, { useState, useEffect, useRef } from 'react';
import { ChallengeSession, ReasonOption, UserAnswerRecord } from '../types';
import { checkNumberAnswer } from '../utils/questionSelector';
import { SolubilityChart } from './SolubilityChart';
import { DensityTable } from './DensityTable';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Info,
  ChevronDown,
  X,
  AlertTriangle,
} from 'lucide-react';

interface QuestionViewProps {
  session: ChallengeSession;
  title: string;
  onAnswerSubmit: (answerRecord: {
    questionId: string;
    question: any;
    userAnswer: string;
    userReasonId?: string;
    isCorrect: boolean;
    hintsOpened: number;
    countedAsCorrect: boolean;
    specificFeedback?: string;
  }) => void;
  onNextQuestion: () => void;
  onAbortChallenge: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  session,
  title,
  onAnswerSubmit,
  onNextQuestion,
  onAbortChallenge,
}) => {
  const currentQuestion = session.questions[session.currentIndex];
  const isLastQuestion = session.currentIndex === session.questions.length - 1;

  // Local state for current question
  const [selectedChoice, setSelectedChoice] = useState<string>('');
  const [selectedReasonId, setSelectedReasonId] = useState<string>('');
  const [numberInput, setNumberInput] = useState<string>('');
  const [hintsOpened, setHintsOpened] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [currentResult, setCurrentResult] = useState<{
    isCorrect: boolean;
    hintsOpened: number;
    countedAsCorrect: boolean;
    specificFeedback?: string;
  } | null>(null);
  const [showAbortConfirm, setShowAbortConfirm] = useState<boolean>(false);

  const numberInputRef = useRef<HTMLInputElement>(null);

  // Reset local state when currentIndex changes
  useEffect(() => {
    setSelectedChoice('');
    setSelectedReasonId('');
    setNumberInput('');
    setHintsOpened(0);
    setIsAnswered(false);
    setCurrentResult(null);

    // Focus input if number type
    if (currentQuestion?.type === 'number') {
      setTimeout(() => {
        numberInputRef.current?.focus();
      }, 100);
    }
  }, [session.currentIndex, currentQuestion?.id]);

  if (!currentQuestion) return null;

  // Handlers for Hints
  const handleOpenNextHint = () => {
    if (!currentQuestion.hints) return;
    if (hintsOpened < currentQuestion.hints.length) {
      setHintsOpened((prev) => prev + 1);
    }
  };

  // Submission handler
  const handleSubmit = (overrideChoice?: string, overrideReasonId?: string) => {
    if (isAnswered) return;

    let isCorrect = false;
    let answerText = '';
    let reasonIdText: string | undefined = undefined;
    let specificFeedback: string | undefined = undefined;

    if (currentQuestion.type === 'choice') {
      const choiceToEvaluate = overrideChoice || selectedChoice;
      if (!choiceToEvaluate) return;
      answerText = choiceToEvaluate;
      isCorrect = choiceToEvaluate === currentQuestion.answer;
    } else if (currentQuestion.type === 'number') {
      if (!numberInput.trim()) return;
      answerText = numberInput.trim();
      const numAnswer =
        typeof currentQuestion.answer === 'number'
          ? currentQuestion.answer
          : parseFloat(String(currentQuestion.answer));
      const res = checkNumberAnswer(
        numberInput,
        numAnswer,
        currentQuestion.tolerance ?? 0.05
      );
      isCorrect = res.isCorrect;
    } else if (currentQuestion.type === 'twostep') {
      const choiceToEvaluate = overrideChoice || selectedChoice;
      const reasonIdToEvaluate = overrideReasonId || selectedReasonId;
      if (!choiceToEvaluate || !reasonIdToEvaluate) return;

      answerText = choiceToEvaluate;
      reasonIdText = reasonIdToEvaluate;

      const isChoiceCorrect = choiceToEvaluate === currentQuestion.answer;
      const isReasonCorrect = reasonIdToEvaluate === currentQuestion.reasonAnswer;

      isCorrect = isChoiceCorrect && isReasonCorrect;

      // Extract tailored feedback for the chosen reason
      if (
        currentQuestion.reasonFeedback &&
        currentQuestion.reasonFeedback[reasonIdToEvaluate]
      ) {
        specificFeedback = currentQuestion.reasonFeedback[reasonIdToEvaluate];
      }
    }

    // A question where hints were opened does NOT count toward pass score
    const countedAsCorrect = isCorrect && hintsOpened === 0;

    const record = {
      questionId: currentQuestion.id,
      question: currentQuestion,
      userAnswer: answerText,
      userReasonId: reasonIdText,
      isCorrect,
      hintsOpened,
      countedAsCorrect,
      specificFeedback,
    };

    setCurrentResult(record);
    setIsAnswered(true);
    onAnswerSubmit(record);
  };

  const modeBadgeText =
    session.mode === 'mastery'
      ? '✨ 定着チャレンジ'
      : session.mode === 'unit'
      ? '🏆 単元チャレンジ'
      : '📖 練習チャレンジ';

  const modeBgColor =
    session.mode === 'mastery'
      ? 'bg-amber-100 text-amber-900 border-amber-300'
      : session.mode === 'unit'
      ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
      : 'bg-blue-100 text-blue-900 border-blue-300';

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 sm:py-6 space-y-4">
      {/* Top Header & Progress */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-black px-2.5 py-1 rounded-full border ${modeBgColor}`}
            >
              {modeBadgeText}
            </span>
            <span className="text-xs font-bold text-slate-600 truncate max-w-[200px] sm:max-w-sm">
              {title}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowAbortConfirm(true)}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            title="問題を中断する"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress step bar */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
            <span>
              問題{' '}
              <strong className="text-blue-700 text-sm">
                {session.currentIndex + 1}
              </strong>{' '}
              / {session.questions.length}
            </span>
            <span className="text-slate-500 font-mono">
              {Math.round(
                ((session.currentIndex + 1) / session.questions.length) * 100
              )}
              %
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((session.currentIndex + (isAnswered ? 1 : 0)) /
                    session.questions.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
        {/* Question Header */}
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs font-black bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-md shrink-0 mt-0.5">
            Q{session.currentIndex + 1}
          </span>
          <div className="flex-1">
            <div className="text-xs font-semibold text-slate-500 mb-1">
              {currentQuestion.type === 'choice' && '【選択問題】'}
              {currentQuestion.type === 'number' && '【数値入力問題】'}
              {currentQuestion.type === 'twostep' && '【二段階問題：答えと理由】'}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed whitespace-pre-line">
              {currentQuestion.question}
            </h3>
          </div>
        </div>

        {/* Embedded Figure (Density Table or Solubility Chart) */}
        {currentQuestion.figure?.type === 'density_table' && <DensityTable />}
        {currentQuestion.figure?.type === 'solubility_chart_and_table' && (
          <SolubilityChart />
        )}

        {/* INPUT SECTION BY TYPE */}

        {/* 1. Choice Type */}
        {currentQuestion.type === 'choice' && currentQuestion.choices && (
          <div className="pt-2 space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentQuestion.choices.map((choice) => {
                const isSelected = selectedChoice === choice;
                let btnStyle =
                  'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                if (isAnswered) {
                  if (choice === currentQuestion.answer) {
                    btnStyle =
                      'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                  } else {
                    btnStyle =
                      'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  btnStyle =
                    'bg-blue-50 border-blue-600 text-blue-900 font-bold ring-2 ring-blue-400';
                }

                return (
                  <button
                    key={choice}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => {
                      setSelectedChoice(choice);
                      handleSubmit(choice);
                    }}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all active:scale-[0.99] min-h-[48px] flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{choice}</span>
                    {isAnswered && choice === currentQuestion.answer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered &&
                      isSelected &&
                      choice !== currentQuestion.answer && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Number Type */}
        {currentQuestion.type === 'number' && (
          <div className="pt-2 space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="num-input"
                className="block text-xs font-bold text-slate-700"
              >
                半角または全角の数字を入力してください
              </label>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                <div className="relative flex-1 min-w-[140px] max-w-xs">
                  <input
                    id="num-input"
                    ref={numberInputRef}
                    type="text"
                    inputMode="decimal"
                    disabled={isAnswered}
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isAnswered && numberInput.trim()) {
                        handleSubmit();
                      }
                    }}
                    placeholder="例: −3, 2.7"
                    className="w-full text-lg sm:text-xl font-bold font-mono px-3.5 py-2.5 rounded-xl border-2 border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 disabled:bg-slate-100 transition-colors"
                  />
                </div>

                {!isAnswered && (
                  <button
                    type="button"
                    onClick={() => {
                      setNumberInput((prev) => {
                        const trimmed = prev.trim();
                        if (
                          trimmed.startsWith('-') ||
                          trimmed.startsWith('−') ||
                          trimmed.startsWith('－') ||
                          trimmed.startsWith('ー')
                        ) {
                          return trimmed.replace(/^[-−－ー]/, '');
                        } else {
                          return '−' + trimmed;
                        }
                      });
                      numberInputRef.current?.focus();
                    }}
                    className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-black text-base active:scale-95 transition-all cursor-pointer min-h-[46px] select-none flex items-center gap-1 shrink-0"
                    title="マイナス符号を付ける/外す（iPad用）"
                  >
                    <span>±</span>
                    <span className="text-xs font-bold text-slate-500 hidden sm:inline">マイナス</span>
                  </button>
                )}

                {currentQuestion.unit && currentQuestion.unit !== 'なし' && (
                  <span className="text-base sm:text-lg font-black text-slate-800 bg-slate-100 px-3 py-2.5 rounded-xl border border-slate-200 select-none shrink-0">
                    {currentQuestion.unit}
                  </span>
                )}
                {!isAnswered && (
                  <button
                    type="button"
                    disabled={!numberInput.trim()}
                    onClick={() => handleSubmit()}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white disabled:text-slate-400 font-black text-sm shadow-xs active:scale-95 transition-all cursor-pointer min-h-[46px] shrink-0"
                  >
                    回答する
                  </button>
                )}
              </div>
            </div>

            {/* Hint Box */}
            {currentQuestion.hints && currentQuestion.hints.length > 0 && (
              <div className="bg-amber-50/60 rounded-2xl p-3 sm:p-4 border border-amber-200 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span>
                      ヒント（{hintsOpened} / {currentQuestion.hints.length}
                      段目を開示中）
                    </span>
                  </div>
                  {!isAnswered && hintsOpened < currentQuestion.hints.length && (
                    <button
                      type="button"
                      onClick={handleOpenNextHint}
                      className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-lg bg-amber-200 hover:bg-amber-300 text-amber-950 text-xs font-bold transition-colors cursor-pointer min-h-[36px]"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                      ヒントを1段開く
                    </button>
                  )}
                </div>

                {hintsOpened > 0 ? (
                  <div className="space-y-1.5 pt-1">
                    {currentQuestion.hints.slice(0, hintsOpened).map((hint, idx) => (
                      <div
                        key={idx}
                        className="text-xs sm:text-sm font-medium text-amber-950 bg-white p-2.5 rounded-xl border border-amber-200/80"
                      >
                        {hint}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500">
                    困ったときはヒントを開いて解き方を確認できます。
                  </p>
                )}

                <p className="text-[11px] text-amber-800 font-medium">
                  ※ヒントを開いた問題は、正解しても正解数には数えられません（練習扱いになります）。
                </p>
              </div>
            )}
          </div>
        )}

        {/* 3. Twostep Type */}
        {currentQuestion.type === 'twostep' &&
          currentQuestion.choices &&
          currentQuestion.reasons && (
            <div className="pt-2 space-y-4">
              {/* Step 1: Choice */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>まず、答えを選んでください：</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentQuestion.choices.map((choice) => {
                    const isSelected = selectedChoice === choice;
                    let style =
                      'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                    if (isAnswered) {
                      if (choice === currentQuestion.answer) {
                        style =
                          'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                      } else if (isSelected) {
                        style = 'bg-rose-50 border-rose-300 text-rose-800';
                      } else {
                        style =
                          'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                      }
                    } else if (isSelected) {
                      style =
                        'bg-blue-50 border-blue-600 text-blue-900 font-bold ring-2 ring-blue-300';
                    }

                    return (
                      <button
                        key={choice}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => setSelectedChoice(choice)}
                        className={`p-3 rounded-xl border text-center text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${style}`}
                      >
                        {choice}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Reason Selection */}
              {(selectedChoice || isAnswered) && (
                <div className="space-y-2 pt-2 border-t border-slate-100 animate-fadeIn">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] flex items-center justify-center font-bold">
                      2
                    </span>
                    <span className="text-blue-950 font-black">
                      なぜそう言える？（理由を選ぼう）：
                    </span>
                  </div>
                  <div className="space-y-2">
                    {currentQuestion.reasons.map((r: ReasonOption) => {
                      const isSelected = selectedReasonId === r.id;
                      let style =
                        'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                      if (isAnswered) {
                        if (r.id === currentQuestion.reasonAnswer) {
                          style =
                            'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-300';
                        } else if (isSelected) {
                          style =
                            'bg-rose-50 border-rose-300 text-rose-800 font-medium';
                        } else {
                          style =
                            'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                        }
                      } else if (isSelected) {
                        style =
                          'bg-blue-50 border-blue-600 text-blue-900 font-bold ring-2 ring-blue-300';
                      }

                      return (
                        <button
                          key={r.id}
                          type="button"
                          disabled={isAnswered}
                          onClick={() => {
                            setSelectedReasonId(r.id);
                            if (selectedChoice) {
                              handleSubmit(selectedChoice, r.id);
                            }
                          }}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all min-h-[48px] flex items-start justify-between gap-2 cursor-pointer ${style}`}
                        >
                          <span className="leading-relaxed">{r.text}</span>
                          {isAnswered && r.id === currentQuestion.reasonAnswer && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          )}
                          {isAnswered &&
                            isSelected &&
                            r.id !== currentQuestion.reasonAnswer && (
                              <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                            )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

        {/* FEEDBACK & EXPLANATION PANEL */}
        {isAnswered && currentResult && (
          <div
            className={`rounded-2xl p-4 sm:p-5 border transition-all space-y-3 ${
              currentResult.isCorrect
                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                : 'bg-rose-50/80 border-rose-300 text-rose-950'
            }`}
          >
            {/* Result Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {currentResult.isCorrect ? (
                  <div className="flex items-center gap-1.5 font-black text-base sm:text-lg text-emerald-700">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <span>正解！</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 font-black text-base sm:text-lg text-rose-700">
                    <XCircle className="w-6 h-6 text-rose-600" />
                    <span>おしい！不正解</span>
                  </div>
                )}
              </div>

              {/* Hint used notice */}
              {currentResult.hintsOpened > 0 && (
                <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-md">
                  ヒント使用（正解数には数えられません）
                </span>
              )}
            </div>

            {/* Tailored Misconception Feedback for Twostep questions */}
            {currentQuestion.type === 'twostep' &&
              currentResult.specificFeedback && (
                <div className="bg-white/90 rounded-xl p-3 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1 text-xs">
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    あなたが選んだ理由について：
                  </span>
                  <p className="leading-relaxed">
                    {currentResult.specificFeedback}
                  </p>
                </div>
              )}

            {/* General Explanation */}
            <div className="text-xs sm:text-sm text-slate-800 bg-white/90 rounded-xl p-3 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block text-xs">
                【解説】
              </span>
              <p className="leading-relaxed">{currentQuestion.explanation}</p>
            </div>

            {/* Next Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={onNextQuestion}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base shadow-sm active:scale-95 transition-all cursor-pointer min-h-[48px]"
              >
                <span>{isLastQuestion ? '結果を見る' : '次の問題へ'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Abort Confirmation Modal */}
      {showAbortConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-5 max-w-sm w-full space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-amber-700">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-base text-slate-900">
                問題を中断しますか？
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              途中でやめると、今回の解答は記録されずに単元画面にもどります。
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAbortConfirm(false)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors min-h-[42px] cursor-pointer"
              >
                つづける
              </button>
              <button
                type="button"
                onClick={onAbortChallenge}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors min-h-[42px] cursor-pointer"
              >
                中断して戻る
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
