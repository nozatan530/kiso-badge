import React from 'react';
import {
  BadgeState,
  Grade,
  SubjectCurriculum,
  SubjectId,
  UnitDef,
} from '../types';
import {
  CURRICULUM_DATA,
  getAllUnits,
  getSubjectGradeStats,
} from '../data/curriculum';
import { getMasteryStatus } from '../storage';
import {
  Award,
  Sparkles,
  ChevronRight,
  Lock,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

interface BadgeMapProps {
  badgeStates: Record<string, BadgeState>;
  currentSimDateStr: string;
  onSelectSubjectGrade: (subjectId: SubjectId, grade: Grade) => void;
  onGoDirectToUnit: (unitId: string) => void;
}

export const BadgeMap: React.FC<BadgeMapProps> = ({
  badgeStates,
  currentSimDateStr,
  onSelectSubjectGrade,
  onGoDirectToUnit,
}) => {
  const subjects: SubjectId[] = ['jpn', 'soc', 'math', 'sci', 'eng'];
  const grades: Grade[] = [1, 2, 3];

  // Calculate totals across all badges
  const allUnitsWithContext = getAllUnits();
  let totalBadgesInApp = 0;
  let totalPassedOrMastered = 0;
  let totalMastered = 0;

  // Track badges ready for mastery
  const readyMasteryList: Array<{
    badgeId: string;
    badgeName: string;
    unitId: string;
    unitName: string;
    subjectName: string;
  }> = [];

  allUnitsWithContext.forEach(({ unit, subject }) => {
    unit.badges.forEach((b) => {
      totalBadgesInApp++;
      const st = badgeStates[b.id];
      if (st?.stage === 'passed' || st?.stage === 'mastered') {
        totalPassedOrMastered++;
      }
      if (st?.stage === 'mastered') {
        totalMastered++;
      }

      if (st) {
        const masteryStatus = getMasteryStatus(st, currentSimDateStr);
        if (masteryStatus.canChallenge) {
          readyMasteryList.push({
            badgeId: b.id,
            badgeName: b.name,
            unitId: unit.id,
            unitName: unit.name,
            subjectName: subject.name,
          });
        }
      }
    });
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 py-4 sm:py-6">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-5 sm:p-7 text-white shadow-lg relative overflow-hidden border border-slate-800">
        <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold backdrop-blur-xs mb-2 text-blue-200 border border-white/10">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>5教科 × 3学年 バッジ地図</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
              自分の教科地図を広げよう
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              単元ごとにバッジを合格させ、7日後の定着チャレンジで本物の力にします。他の人との比較はありません。自分の地図が埋まっていくことだけを目指そう！
            </p>
          </div>

          {/* Map Total Summary (バッジ 3こ／定着 1こ) */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/15 shrink-0">
            <div className="text-center px-3">
              <div className="text-[11px] font-medium text-slate-300">合格以上</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-white">
                {totalPassedOrMastered}
                <span className="text-xs font-normal text-slate-300 ml-1">こ</span>
              </div>
            </div>
            <div className="w-px h-9 bg-white/20"></div>
            <div className="text-center px-3">
              <div className="text-[11px] font-medium text-amber-200">定着達成</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-amber-300">
                {totalMastered}
                <span className="text-xs font-normal text-amber-200 ml-1">こ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ready for Mastery Notification Banner */}
        {readyMasteryList.length > 0 && (
          <div className="mt-5 pt-3.5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-amber-500/20 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:px-7 rounded-b-3xl">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-300 shrink-0 animate-bounce" />
              <div>
                <span className="text-xs sm:text-sm font-black text-amber-100 block">
                  定着チャレンジができます！（{readyMasteryList.length}件）
                </span>
                <span className="text-[11px] text-amber-200/90 hidden sm:inline">
                  {readyMasteryList[0].subjectName}：{readyMasteryList[0].unitName}（
                  {readyMasteryList[0].badgeName}）
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onGoDirectToUnit(readyMasteryList[0].unitId)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer min-h-[42px]"
            >
              今すぐ挑戦する
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* 5 Subjects × 3 Grades Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>教科バッジ地図</span>
            <span className="text-xs font-normal text-slate-500">
              （5教科 × 3学年）
            </span>
          </h3>
          <span className="text-xs text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            中1の5教科が学習可能
          </span>
        </div>

        {/* The Grid Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Header Row: Grades */}
          <div className="grid grid-cols-4 bg-slate-100/90 border-b border-slate-200 text-center py-2.5 text-xs font-black text-slate-700">
            <div className="text-left pl-4 font-bold text-slate-500">教科</div>
            <div>中1</div>
            <div>中2</div>
            <div>中3</div>
          </div>

          {/* Subject Rows */}
          <div className="divide-y divide-slate-200">
            {subjects.map((subId) => {
              const subject = CURRICULUM_DATA[subId];

              return (
                <div key={subId} className="grid grid-cols-4 items-stretch">
                  {/* Subject Name Column */}
                  <div className="p-3 sm:p-4 flex items-center gap-2 border-r border-slate-100 bg-slate-50/50">
                    <span
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-black text-xs sm:text-sm text-white bg-gradient-to-tr ${subject.color.gradient} shadow-2xs`}
                    >
                      {subject.shortName}
                    </span>
                    <span className="font-black text-xs sm:text-sm text-slate-900">
                      {subject.name}
                    </span>
                  </div>

                  {/* 3 Grades Cells */}
                  {grades.map((grade) => {
                    const stats = getSubjectGradeStats(subId, grade, badgeStates);
                    const isOpen = stats.hasOpenUnits;

                    // Calculate color saturation / intensity based on mastery
                    let cellBg = 'bg-white hover:bg-slate-50';
                    let borderClass = 'border-slate-100';

                    if (isOpen) {
                      if (stats.masteredCount === stats.totalBadges && stats.totalBadges > 0) {
                        cellBg = 'bg-emerald-100/60 hover:bg-emerald-100 border-emerald-300';
                      } else if (stats.passedOrMasteredCount > 0) {
                        // Color intensity based on progress
                        const ratio = stats.passedOrMasteredCount / stats.totalBadges;
                        if (ratio >= 0.8) {
                          cellBg = 'bg-emerald-50/80 hover:bg-emerald-100/80 border-emerald-300';
                        } else if (ratio >= 0.4) {
                          cellBg = 'bg-blue-50/80 hover:bg-blue-100/80 border-blue-300';
                        } else {
                          cellBg = 'bg-sky-50/50 hover:bg-sky-100/60 border-sky-200';
                        }
                      } else {
                        cellBg = 'bg-slate-50/60 hover:bg-blue-50/40 border-blue-200';
                      }
                    } else {
                      cellBg = 'bg-slate-50/30 opacity-70 select-none';
                    }

                    if (isOpen) {
                      return (
                        <div
                          key={`${subId}-${grade}`}
                          onClick={() => onSelectSubjectGrade(subId, grade)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) =>
                            (e.key === 'Enter' || e.key === ' ') &&
                            onSelectSubjectGrade(subId, grade)
                          }
                          className={`p-2.5 sm:p-4 border-r last:border-r-0 ${borderClass} ${cellBg} transition-all cursor-pointer flex flex-col justify-between gap-1 group active:scale-[0.99]`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-500">
                              中{grade}
                            </span>
                            {stats.hasMinClearedUnit && (
                              <span
                                className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-0.5"
                                title="単元の最低ラインをクリア！"
                              >
                                🏆
                              </span>
                            )}
                          </div>

                          <div className="my-1">
                            <div className="text-base sm:text-lg font-black font-mono text-slate-900 group-hover:text-blue-700 transition-colors">
                              {stats.passedOrMasteredCount}
                              <span className="text-xs text-slate-400 font-normal">
                                /{stats.totalBadges}
                              </span>
                            </div>
                            <div className="text-[10px] font-bold text-emerald-700">
                              定着 {stats.masteredCount}こ
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-blue-700 font-bold group-hover:translate-x-0.5 transition-transform">
                            <span>開く</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      );
                    }

                    // Inactive cell (準備中)
                    return (
                      <div
                        key={`${subId}-${grade}`}
                        className={`p-2.5 sm:p-4 border-r last:border-r-0 border-slate-100 ${cellBg} flex flex-col justify-center items-center text-center`}
                      >
                        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          準備中
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Guide Notes for Student */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
        <h4 className="font-bold text-slate-800 flex items-center gap-1.5 text-xs sm:text-sm">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          教科バッジマップのルール
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200">
            <span className="font-bold text-slate-900 block mb-1">
              ① 1回5問で合格
            </span>
            4問以上正解でバッジ「合格」。ヒントを開けた問題は練習扱いになります。
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200">
            <span className="font-bold text-slate-900 block mb-1">
              ② 7日後に「定着」へ
            </span>
            合格から7日あけてもう一度クリアすると、本物の「定着」になります。
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200">
            <span className="font-bold text-slate-900 block mb-1">
              ③ 必須バッジでクリア
            </span>
            ◯のついた必須バッジがすべて合格以上になると「最低ラインクリア」です！
          </div>
        </div>
      </div>
    </div>
  );
};
