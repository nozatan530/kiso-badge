import React from 'react';
import { DENSITY_TABLE_DATA } from '../data/questions';

export const DensityTable: React.FC = () => {
  return (
    <div className="my-3 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
          物質の密度の表（g/cm³）
        </span>
        <span className="text-[11px] text-slate-500 font-medium">※室温付近での値</span>
      </div>
      <div className="p-2 sm:p-3 overflow-x-auto">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
          {DENSITY_TABLE_DATA.map((item) => (
            <div
              key={item.name}
              className={`p-2 rounded-lg border flex flex-col items-center justify-center ${
                item.name === '水'
                  ? 'bg-blue-50 border-blue-200'
                  : item.name === '氷' || item.name === 'エタノール'
                  ? 'bg-sky-50 border-sky-200'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <span className="font-bold text-slate-800 text-xs mb-1">{item.name}</span>
              <span className="font-mono text-slate-900 font-semibold text-sm">
                {item.density.toFixed(2)}
              </span>
              <span className="text-[10px] text-slate-500">g/cm³</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
