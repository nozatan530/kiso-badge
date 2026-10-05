import React from 'react';
import { BadgeState, Grade, SubjectId, UnitDef } from '../types';
import { CURRICULUM_DATA, isUnitMinCleared } from '../data/curriculum';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Lock,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface SubjectGradeViewProps {
  subjectId: SubjectId;
  grade: Grade;
  badgeStates: Record<string, BadgeState>;
  onBackToMap: () => void;
  onSelectUnit: (unit: UnitDef) => void;
}

export const SubjectGradeView: React.FC<SubjectGradeViewProps> = ({
  subjectId,
  grade,
  badgeStates,
  onBackToMap,
  onSelectUnit,
}) => {
  const subject = CURRICULUM_DATA[subjectId];
  const gradeCurriculum = subject.grades[grade];

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 py-4 sm:py-6">
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToMap}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs active:scale-95 transition-all cursor-pointer min-h-[42px]"
        >
          <ChevronLeft className="w-4 h-4" />
          5教科地図へもどる
        </button>

        <span
          className={`text-xs font-black px-3 py-1.5 rounded-full border ${subject.color.badgeBg} ${subject.color.badgeText} ${subject.color.border}`}
        >
          {subject.name} ・ 中{grade}
        </span>
      </div>

      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs text-white bg-gradient-to-tr ${subject.color.gradient}`}
              >
                {subject.shortName}
              </span>
              <span className="text-xs font-extrabold text-slate-500">
                分野別単元リスト
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {subject.name}（中{grade}）の単元
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              分野ごとの単元を選んでバッジを獲得していきましょう。
            </p>
          </div>
        </div>
      </div>

      {/* Fields List */}
      <div className="space-y-4">
        {gradeCurriculum.fields.map((field) => (
          <div
            key={field.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
          >
            {/* Field Header */}
            <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-black text-slate-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                分野：{field.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {field.units.length}単元
              </span>
            </div>

            {/* Units in Field */}
            <div className="divide-y divide-slate-100 p-2 sm:p-3 space-y-2 sm:space-y-0">
              {field.units.map((unit) => {
                if (unit.open) {
                  const isMinCleared = isUnitMinCleared(unit, badgeStates);
                  let passedCount = 0;
                  let masteredCount = 0;
                  unit.badges.forEach((b) => {
                    const st = badgeStates[b.id];
                    if (st?.stage === 'passed' || st?.stage === 'mastered') passedCount++;
                    if (st?.stage === 'mastered') masteredCount++;
                  });

                  return (
                    <div
                      key={unit.id}
                      onClick={() => onSelectUnit(unit)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        (e.key === 'Enter' || e.key === ' ') && onSelectUnit(unit)
                      }
                      className="p-3.5 sm:p-4 rounded-xl border border-blue-200 bg-blue-50/20 hover:bg-blue-50/50 hover:border-blue-400 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group active:scale-[0.99]"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-black text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                            学習可能
                          </span>
                          {isMinCleared && (
                            <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Award className="w-3 h-3 text-amber-600" />
                              最低ラインクリア！
                            </span>
                          )}
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                          {unit.name}
                        </h4>
                        {unit.description && (
                          <p className="text-xs text-slate-500 max-w-lg">
                            {unit.description}
                          </p>
                        )}
                      </div>

                      {/* Right: Badge stats & Action */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <div className="text-right">
                          <div className="text-sm font-black font-mono text-slate-900">
                            {passedCount} / {unit.badges.length}
                            <span className="text-xs text-slate-500 font-normal ml-1">
                              合格
                            </span>
                          </div>
                          <div className="text-[11px] text-emerald-700 font-bold">
                            定着: {masteredCount}こ
                          </div>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-xs">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  );
                }

                // Inactive Unit (準備中)
                return (
                  <div
                    key={unit.id}
                    className="p-3.5 sm:p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 flex items-center justify-between gap-2 opacity-60 select-none"
                  >
                    <div>
                      <span className="text-[10px] font-medium text-slate-400">
                        単元
                      </span>
                      <h4 className="text-sm font-semibold text-slate-600">
                        {unit.name}
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-200 text-slate-600">
                      <Lock className="w-3 h-3" />
                      準備中
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
