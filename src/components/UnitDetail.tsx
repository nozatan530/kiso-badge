import React from 'react';
import { BadgeDef, BadgeState, UnitDef } from '../types';
import {
  getMasteryStatus,
  formatFriendlyDate,
} from '../storage';
import { isUnitMinCleared } from '../data/curriculum';
import {
  Award,
  Sparkles,
  CheckCircle,
  Clock,
  ArrowRight,
  Flame,
  Check,
  ChevronLeft,
  BookOpen,
} from 'lucide-react';

interface UnitDetailProps {
  unit: UnitDef;
  subjectName: string;
  gradeName: string;
  badgeStates: Record<string, BadgeState>;
  currentSimDateStr: string;
  onBackToSubjectGrade: () => void;
  onStartPractice: (badgeId: string) => void;
  onStartMastery: (badgeId: string) => void;
  onStartUnitChallenge: () => void;
}

export const UnitDetail: React.FC<UnitDetailProps> = ({
  unit,
  subjectName,
  gradeName,
  badgeStates,
  currentSimDateStr,
  onBackToSubjectGrade,
  onStartPractice,
  onStartMastery,
  onStartUnitChallenge,
}) => {
  const isMinCleared = isUnitMinCleared(unit, badgeStates);

  // Collect badge statuses
  const badgeStatuses = unit.badges.map((def) => {
    const state = badgeStates[def.id] || {
      stage: 'not_started',
      passedDate: null,
      masteredDate: null,
      lastAttemptDate: null,
      attemptCount: 0,
    };
    const masteryStatus = getMasteryStatus(state, currentSimDateStr);
    return {
      def,
      state,
      masteryStatus,
    };
  });

  // Ready for mastery badges (7+ days since passed)
  const readyForMastery = badgeStatuses.filter((b) => b.masteryStatus.canChallenge);

  // Eligible for unit challenge (passed or mastered >= 2)
  const passedOrMasteredBadges = badgeStatuses.filter(
    (b) => b.state.stage === 'passed' || b.state.stage === 'mastered'
  );
  const canUnitChallenge = passedOrMasteredBadges.length >= 2;

  const renderStageBadge = (stage: BadgeState['stage']) => {
    switch (stage) {
      case 'mastered':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            定着
          </span>
        );
      case 'passed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-300">
            <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
            合格
          </span>
        );
      case 'practicing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            練習中
          </span>
        );
      case 'not_started':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-300">
            未着手
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 py-4 sm:py-6">
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToSubjectGrade}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs active:scale-95 transition-all cursor-pointer min-h-[42px]"
        >
          <ChevronLeft className="w-4 h-4" />
          {subjectName}・{gradeName}一覧へもどる
        </button>

        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
          {subjectName} ・ {gradeName}
        </span>
      </div>

      {/* Unit Header Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-md">
                単元
              </span>
              <span className="text-xs text-slate-500 font-medium">
                全{unit.badges.length}バッジ
              </span>
              {unit.ref && (
                <span className="text-[11px] text-slate-500 font-semibold bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                  学習指導要領：{unit.ref}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {unit.name}
            </h2>
            {unit.description && (
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                {unit.description}
              </p>
            )}
          </div>

          {/* Minimum Requirements Cleared Badge */}
          {isMinCleared ? (
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3.5 rounded-2xl shadow-xs flex items-center gap-3 shrink-0">
              <Award className="w-8 h-8 text-yellow-100 shrink-0" />
              <div>
                <div className="text-[11px] font-bold text-amber-100 leading-none">
                  単元目標達成
                </div>
                <div className="text-base font-black">最低ラインクリア！</div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-600 text-xs shrink-0 max-w-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1 mb-0.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                最低ライン目標
              </div>
              <span>◯のついた必須バッジすべてに合格しよう</span>
            </div>
          )}
        </div>
      </div>

      {/* TOP SECTION: Ready for Mastery Challenge (if any) */}
      {readyForMastery.length > 0 && (
        <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-amber-500/10 rounded-2xl p-4 sm:p-5 border-2 border-amber-400 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-amber-950">
                定着チャレンジができます！（{readyForMastery.length}件）
              </h3>
              <p className="text-xs text-amber-800">
                合格から7日以上がたちました。もう一度合格して「定着」にしましょう！
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {readyForMastery.map(({ def, state }) => (
              <div
                key={`mastery-${def.id}`}
                className="bg-white rounded-xl p-3.5 border border-amber-300 shadow-xs flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-amber-800">
                      {def.name}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      合格日: {formatFriendlyDate(state.passedDate)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onStartMastery(def.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-black text-sm shadow-xs active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4" />
                  定着チャレンジ（5問）
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5 BADGES LIST */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 flex items-center justify-between">
          <span>スキルバッジ一覧</span>
          <span className="text-xs font-normal text-slate-500">◯ = 必須バッジ</span>
        </h3>

        <div className="space-y-3">
          {badgeStatuses.map(({ def, state, masteryStatus }, index) => {
            const isReady = masteryStatus.canChallenge;
            const isPassed = state.stage === 'passed';
            const isMastered = state.stage === 'mastered';
            const isPracticing = state.stage === 'practicing';

            return (
              <div
                key={def.id}
                className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all ${
                  isMastered
                    ? 'border-emerald-300 bg-emerald-50/20 shadow-xs'
                    : isReady
                    ? 'border-amber-400 bg-amber-50/20 shadow-xs ring-1 ring-amber-300'
                    : isPassed
                    ? 'border-blue-300 bg-blue-50/15'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Badge Info */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                        No. {index + 1}
                      </span>
                      {def.required ? (
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-black text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                          ◯ 必須
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          発展
                        </span>
                      )}
                      {renderStageBadge(state.stage)}
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900">
                        {def.name}
                      </h4>
                      {def.description && (
                        <p className="text-xs text-slate-500 mt-0.5">
                          {def.description}
                        </p>
                      )}
                    </div>

                    {/* Dates & Status Note */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
                      {state.passedDate && (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                          合格日: <strong>{formatFriendlyDate(state.passedDate)}</strong>
                        </span>
                      )}
                      {state.masteredDate && (
                        <span className="flex items-center gap-1 text-emerald-700">
                          <Award className="w-3.5 h-3.5 text-emerald-600" />
                          定着日: <strong>{formatFriendlyDate(state.masteredDate)}</strong>
                        </span>
                      )}
                      {isPassed && !isReady && (
                        <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>
                            あと<strong>{masteryStatus.daysRemaining}日</strong>で定着チャレンジ
                            （{masteryStatus.targetDateStr}〜）
                          </span>
                        </span>
                      )}
                      {isReady && (
                        <span className="flex items-center gap-1 text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded-md">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          定着チャレンジ可能！
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: Action Button */}
                  <div className="sm:text-right shrink-0 flex flex-col sm:items-end justify-center gap-1.5">
                    {isReady ? (
                      <button
                        type="button"
                        onClick={() => onStartMastery(def.id)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-black text-sm shadow-sm active:scale-95 transition-all cursor-pointer min-h-[44px]"
                      >
                        <Sparkles className="w-4 h-4" />
                        定着チャレンジ（5問）
                      </button>
                    ) : isMastered ? (
                      <button
                        type="button"
                        onClick={() => onStartPractice(def.id)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm active:scale-95 transition-all cursor-pointer min-h-[44px]"
                      >
                        再挑戦・確認（5問）
                      </button>
                    ) : isPassed ? (
                      <button
                        type="button"
                        onClick={() => onStartPractice(def.id)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-300 font-bold text-xs sm:text-sm active:scale-95 transition-all cursor-pointer min-h-[44px]"
                      >
                        もう一度練習（5問）
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onStartPractice(def.id)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-sm active:scale-95 transition-all cursor-pointer min-h-[44px]"
                      >
                        {isPracticing ? 'もう一度挑戦（5問）' : '練習スタート（5問）'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM SECTION: 単元チャレンジ (Unit Challenge) */}
      <div
        className={`rounded-3xl p-5 sm:p-6 border transition-all ${
          canUnitChallenge
            ? 'bg-gradient-to-tr from-slate-900 to-indigo-950 text-white border-slate-700 shadow-md'
            : 'bg-slate-100 text-slate-500 border-slate-200'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-bold mb-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              単元総合テスト
            </div>
            <h3
              className={`text-lg sm:text-xl font-black ${
                canUnitChallenge ? 'text-white' : 'text-slate-700'
              }`}
            >
              単元チャレンジ（8問）
            </h3>
            <p
              className={`text-xs sm:text-sm ${
                canUnitChallenge ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              合格したバッジの問題を混ぜて8問出題します。7問以上正解で合格！
              合格後7日以上たっているバッジはまとめて「定着」になります。
            </p>
            {!canUnitChallenge && (
              <p className="text-xs text-amber-700 font-bold mt-1">
                ※合格以上のバッジが2つ以上あると挑戦できます（現在: {passedOrMasteredBadges.length}つ）
              </p>
            )}
          </div>

          <div className="shrink-0">
            <button
              type="button"
              disabled={!canUnitChallenge}
              onClick={onStartUnitChallenge}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-sm shadow-md transition-all min-h-[44px] ${
                canUnitChallenge
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white cursor-pointer active:scale-95'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed opacity-60'
              }`}
            >
              単元チャレンジに挑戦
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
