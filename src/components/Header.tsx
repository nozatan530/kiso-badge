import React from 'react';
import { Award, Calendar, Settings, ChevronLeft, User } from 'lucide-react';

interface HeaderProps {
  currentSimDateStr: string;
  learnerId?: string;
  onOpenSettings: () => void;
  onBack?: () => void;
  showBackButton?: boolean;
  backButtonLabel?: string;
  onGoHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSimDateStr,
  learnerId,
  onOpenSettings,
  onBack,
  showBackButton = false,
  backButtonLabel = 'もどる',
  onGoHome,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-3 py-2.5 sm:px-6 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          {showBackButton && onBack && (
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all min-h-[42px]"
            >
              <ChevronLeft className="w-4 h-4 text-slate-600" />
              <span>{backButtonLabel}</span>
            </button>
          )}

          <div
            onClick={onGoHome}
            className={`flex items-center gap-2 ${
              onGoHome ? 'cursor-pointer select-none active:opacity-80' : ''
            }`}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-tight">
                教科バッジマップ
              </h1>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                中学生のための5教科基礎定着アプリ
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Learner ID display (non-intrusive) */}
          {learnerId && (
            <div
              className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-mono text-slate-500 border border-slate-200"
              title="端末ごとの学習者ID（個人名は記録されません）"
            >
              <User className="w-3 h-3 text-slate-400" />
              <span>{learnerId}</span>
            </div>
          )}

          {/* Simulated Date Badge */}
          <button
            type="button"
            onClick={onOpenSettings}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200/80 text-xs sm:text-sm font-bold hover:bg-blue-100 transition-colors cursor-pointer min-h-[42px]"
            title="日付の変更や記録のリセット"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>{currentSimDateStr}</span>
          </button>

          {/* Settings Button */}
          <button
            type="button"
            onClick={onOpenSettings}
            aria-label="設定"
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 active:scale-95 transition-all cursor-pointer min-h-[42px]"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
