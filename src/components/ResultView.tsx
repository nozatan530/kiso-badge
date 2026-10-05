import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ChallengeResult, BadgeStage } from '../types';
import {
  Award,
  Sparkles,
  RotateCcw,
  ArrowRight,
  Flame,
  Check,
} from 'lucide-react';

interface ResultViewProps {
  result: ChallengeResult;
  onRetry: () => void;
  onBackToUnit: () => void;
  onBackToMap: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetry,
  onBackToUnit,
  onBackToMap,
}) => {
  // Trigger confetti on pass or mastery
  useEffect(() => {
    if (result.isPassed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6'],
        });
      } catch (e) {
        // ignore if confetti fails
      }
    }
  }, [result.isPassed]);

  const renderStageTag = (stage?: BadgeStage) => {
    switch (stage) {
      case 'mastered':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
            <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
            定着
          </span>
        );
      case 'passed':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-black bg-blue-100 text-blue-800 border border-blue-300">
            <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
            合格
          </span>
        );
      case 'practicing':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Flame className="w-4 h-4 text-amber-600" />
            練習中
          </span>
        );
      case 'not_started':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-600 border border-slate-300">
            未着手
          </span>
        );
    }
  };

  const isStagePromoted =
    result.previousStage &&
    result.newStage &&
    result.previousStage !== result.newStage;

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 sm:py-6 space-y-5">
      {/* Main Result Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md text-center space-y-6 relative overflow-hidden">
        {/* Top celebratory icon */}
        <div className="flex justify-center">
          {result.isPassed ? (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md animate-bounce">
              <Award className="w-9 h-9 sm:w-11 sm:h-11" />
            </div>
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 text-slate-600 border border-slate-300 flex items-center justify-center">
              <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10 text-slate-500" />
            </div>
          )}
        </div>

        {/* Title */}
        <div className="space-y-1">
          <div className="text-xs font-bold text-slate-500">
            {result.mode === 'mastery'
              ? '定着チャレンジ結果'
              : result.mode === 'unit'
              ? '単元チャレンジ結果'
              : '練習結果'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {result.isPassed
              ? result.newStage === 'mastered'
                ? '定着達成！おめでとう！'
                : '合格おめでとう！'
              : '挑戦完了！'}
          </h2>
          {result.badgeName && (
            <p className="text-sm font-bold text-blue-700">
              {result.badgeName}
            </p>
          )}
          {result.unitName && (
            <p className="text-sm font-bold text-indigo-700">
              {result.unitName}
            </p>
          )}
        </div>

        {/* Score Display */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 max-w-md mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-bold text-slate-600">正解数</span>
            <div className="text-3xl sm:text-4xl font-black font-mono text-slate-900">
              <span
                className={result.isPassed ? 'text-blue-600' : 'text-slate-800'}
              >
                {result.countedCorrectCount}
              </span>
              <span className="text-slate-400 text-xl font-normal">
                {' '}
                / {result.totalQuestions} 問
              </span>
            </div>
          </div>

          {/* Hint used stats */}
          {result.hintsUsedCount > 0 && (
            <div className="text-xs font-medium text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
              ※ヒントを開いて正解した問題: <strong>{result.hintsUsedCount}問</strong>
              （練習扱いのため、合格判定の正解数には含まれません）
            </div>
          )}

          <div className="text-xs text-slate-500">
            合格ライン:{' '}
            {result.mode === 'unit' ? '7問以上' : '4問以上'} 正解
          </div>
        </div>

        {/* Stage change announcement */}
        {result.mode !== 'unit' && (
          <div className="max-w-md mx-auto pt-1">
            <div className="flex items-center justify-center gap-3">
              <div className="text-center">
                <span className="text-[11px] text-slate-500 block mb-1">
                  前の段階
                </span>
                {renderStageTag(result.previousStage)}
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 mt-4" />
              <div className="text-center">
                <span className="text-[11px] text-slate-500 block mb-1">
                  現在の段階
                </span>
                {renderStageTag(result.newStage)}
              </div>
            </div>

            {isStagePromoted && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>段階が上がりました！</span>
              </div>
            )}
          </div>
        )}

        {/* Unit challenge promotions breakdown */}
        {result.mode === 'unit' && result.unitPromotions && (
          <div className="max-w-md mx-auto text-left bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-700">バッジごとの結果：</h4>
            <div className="space-y-1.5 text-xs">
              {result.unitPromotions.map((p) => (
                <div
                  key={p.badgeId}
                  className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200"
                >
                  <span className="font-bold text-slate-800">
                    {p.badgeName}
                  </span>
                  {p.promotedToMastered ? (
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <Sparkles className="w-3.5 h-3.5" />
                      「定着」へ昇格！
                    </span>
                  ) : (
                    <span className="text-slate-600">
                      {p.remainingDays === 0
                        ? '合格中'
                        : `あと${p.remainingDays}日で定着できます`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEXT ACTION DIRECTIVE: 1 clear sentence */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200 text-center space-y-1 max-w-md mx-auto">
          <span className="text-xs font-extrabold text-blue-800 tracking-wider">
            【 次にやること 】
          </span>
          <p className="text-sm sm:text-base font-black text-slate-900 leading-snug">
            {result.nextActionText}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
          <button
            type="button"
            onClick={onRetry}
            className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all active:scale-95 cursor-pointer min-h-[48px]"
          >
            <RotateCcw className="w-4 h-4 text-slate-600" />
            もう一度挑戦
          </button>

          <button
            type="button"
            onClick={onBackToUnit}
            className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-all active:scale-95 cursor-pointer min-h-[48px]"
          >
            単元にもどる
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
