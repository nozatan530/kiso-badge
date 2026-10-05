import React, { useState } from 'react';
import {
  Calendar,
  RotateCcw,
  Trash2,
  X,
  FastForward,
  AlertTriangle,
  HelpCircle,
  User,
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSimDateStr: string;
  fullDisplayStr: string;
  simDateOffsetDays: number;
  learnerId?: string;
  onAdvanceDays: (days: number) => void;
  onResetDate: () => void;
  onResetAllData: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentSimDateStr,
  fullDisplayStr,
  simDateOffsetDays,
  learnerId,
  onAdvanceDays,
  onResetDate,
  onResetAllData,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 sm:p-6 border border-slate-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-base">
                設定・日付シミュレータ
              </h3>
              <p className="text-[11px] text-slate-500">
                動作確認用の日付操作とデータ管理
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Simulated Date Controls */}
        <div className="space-y-3">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-700 block">
              現在のアプリ内日付（シミュレーション）
            </span>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-base sm:text-lg font-black text-blue-950 font-mono">
                  {fullDisplayStr}
                </div>
                <div className="text-xs text-blue-700 mt-0.5">
                  {simDateOffsetDays === 0 ? (
                    '（今日の日付を使用中）'
                  ) : (
                    <span>
                      今日から <strong>+{simDateOffsetDays}日</strong> 進んでいます
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-slate-800 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              定着ルールの確認方法
            </span>
            <p className="leading-relaxed">
              合格したあと<strong>「+7日 進める」</strong>を押すと、7日経過後の「定着チャレンジ」の動作をその場でテストできます。
            </p>
          </div>

          {/* Quick buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => onAdvanceDays(1)}
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:border-blue-300 border border-slate-200 font-bold text-xs text-slate-800 transition-all cursor-pointer min-h-[50px] active:scale-95"
            >
              <FastForward className="w-4 h-4 text-blue-600 mb-0.5" />
              <span>+1日 進める</span>
            </button>

            <button
              type="button"
              onClick={() => onAdvanceDays(7)}
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 hover:border-amber-400 border border-amber-300 font-bold text-xs text-amber-950 transition-all cursor-pointer min-h-[50px] active:scale-95"
            >
              <FastForward className="w-4 h-4 text-amber-600 mb-0.5" />
              <span>+7日 進める</span>
            </button>

            <button
              type="button"
              onClick={onResetDate}
              disabled={simDateOffsetDays === 0}
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 border border-slate-200 font-bold text-xs text-slate-700 transition-all cursor-pointer min-h-[50px] active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-slate-600 mb-0.5" />
              <span>今日に戻す</span>
            </button>
          </div>
        </div>

        {/* Learner ID Info */}
        {learnerId && (
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
            <span className="font-bold text-slate-600 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-500" />
              学習者ID（匿名）
            </span>
            <span className="font-mono text-slate-700 font-bold">
              {learnerId}
            </span>
          </div>
        )}

        {/* Section 2: Reset All Records */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <span className="text-xs font-bold text-slate-700 block">データ管理</span>

          {!showConfirmReset ? (
            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer min-h-[44px]"
            >
              <Trash2 className="w-4 h-4 text-rose-600" />
              記録をすべて消す（初期化）
            </button>
          ) : (
            <div className="bg-rose-50 border border-rose-300 rounded-2xl p-3.5 space-y-3">
              <div className="flex items-start gap-2 text-rose-800 text-xs">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  これまでの合格・定着記録や解答履歴をすべて消去します。本当によろしいですか？
                </span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowConfirmReset(false)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors min-h-[38px] cursor-pointer"
                >
                  キャンセル
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onResetAllData();
                    setShowConfirmReset(false);
                    onClose();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors min-h-[38px] cursor-pointer"
                >
                  消去する
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Close Button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer min-h-[44px]"
          >
            設定をとじる
          </button>
        </div>
      </div>
    </div>
  );
};
