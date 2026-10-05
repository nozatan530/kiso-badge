import React, { useState } from 'react';
import { SOLUBILITY_DATA } from '../data/questions';

export const SolubilityChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chart' | 'table'>('chart');

  // Chart dimensions
  const svgWidth = 460;
  const svgHeight = 260;
  const padding = { top: 25, right: 30, bottom: 40, left: 55 };

  const plotWidth = svgWidth - padding.left - padding.right;
  const plotHeight = svgHeight - padding.top - padding.bottom;

  // Scales
  const minTemp = 0;
  const maxTemp = 80;
  const minSol = 0;
  const maxSol = 180;

  const getX = (temp: number) => padding.left + ((temp - minTemp) / (maxTemp - minTemp)) * plotWidth;
  const getY = (sol: number) => padding.top + plotHeight - ((sol - minSol) / (maxSol - minSol)) * plotHeight;

  // Path data
  const kno3Path = SOLUBILITY_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.temp)} ${getY(d.kno3)}`).join(' ');
  const naclPath = SOLUBILITY_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.temp)} ${getY(d.nacl)}`).join(' ');

  const tempGridTicks = [0, 20, 40, 60, 80];
  const solGridTicks = [0, 40, 80, 120, 160];

  return (
    <div className="my-3 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-200">
        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          溶解度曲線（水100gに溶ける物質の質量）
        </span>
        <div className="flex bg-slate-200 p-0.5 rounded-lg text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('chart')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              activeTab === 'chart'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            グラフ
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('table')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              activeTab === 'table'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            数値表
          </button>
        </div>
      </div>

      {activeTab === 'chart' ? (
        <div className="p-2 sm:p-3 overflow-x-auto flex flex-col items-center">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full max-w-[480px] h-auto select-none"
            style={{ minWidth: '320px' }}
          >
            {/* Grid lines */}
            {solGridTicks.map((val) => (
              <g key={`grid-y-${val}`}>
                <line
                  x1={padding.left}
                  y1={getY(val)}
                  x2={svgWidth - padding.right}
                  y2={getY(val)}
                  stroke="#e2e8f0"
                  strokeDasharray="3 3"
                />
                <text
                  x={padding.left - 8}
                  y={getY(val) + 4}
                  textAnchor="end"
                  fontSize="11"
                  fill="#64748b"
                >
                  {val}
                </text>
              </g>
            ))}

            {tempGridTicks.map((val) => (
              <g key={`grid-x-${val}`}>
                <line
                  x1={getX(val)}
                  y1={padding.top}
                  x2={getX(val)}
                  y2={padding.top + plotHeight}
                  stroke="#e2e8f0"
                  strokeDasharray="3 3"
                />
                <text
                  x={getX(val)}
                  y={padding.top + plotHeight + 16}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#64748b"
                >
                  {val}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line
              x1={padding.left}
              y1={padding.top}
              x2={padding.left}
              y2={padding.top + plotHeight}
              stroke="#475569"
              strokeWidth="1.5"
            />
            <line
              x1={padding.left}
              y1={padding.top + plotHeight}
              x2={svgWidth - padding.right}
              y2={padding.top + plotHeight}
              stroke="#475569"
              strokeWidth="1.5"
            />

            {/* Axis Labels */}
            <text
              x={svgWidth - padding.right}
              y={padding.top + plotHeight + 32}
              textAnchor="end"
              fontSize="11"
              fontWeight="600"
              fill="#334155"
            >
              温度 [℃]
            </text>
            <text
              x={padding.left - 10}
              y={padding.top - 10}
              textAnchor="start"
              fontSize="11"
              fontWeight="600"
              fill="#334155"
            >
              溶解度 [g]
            </text>

            {/* Lines */}
            <path
              d={kno3Path}
              fill="none"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d={naclPath}
              fill="none"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Points & Labels for KNO3 */}
            {SOLUBILITY_DATA.map((d) => (
              <g key={`kno3-pt-${d.temp}`}>
                <circle
                  cx={getX(d.temp)}
                  cy={getY(d.kno3)}
                  r="4"
                  fill="#ea580c"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <text
                  x={getX(d.temp) + (d.temp === 80 ? -12 : 5)}
                  y={getY(d.kno3) - 6}
                  fontSize="10"
                  fontWeight="600"
                  fill="#c2410c"
                >
                  {d.kno3}
                </text>
              </g>
            ))}

            {/* Points & Labels for NaCl */}
            {SOLUBILITY_DATA.map((d) => (
              <g key={`nacl-pt-${d.temp}`}>
                <circle
                  cx={getX(d.temp)}
                  cy={getY(d.nacl)}
                  r="4"
                  fill="#0284c7"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                {d.temp % 40 === 0 && (
                  <text
                    x={getX(d.temp) + 4}
                    y={getY(d.nacl) + 14}
                    fontSize="10"
                    fontWeight="600"
                    fill="#0369a1"
                  >
                    {d.nacl}
                  </text>
                )}
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-1 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 bg-amber-600 rounded-full inline-block"></span>
              <span className="font-bold text-amber-900">硝酸カリウム</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-1 bg-sky-600 rounded-full inline-block"></span>
              <span className="font-bold text-sky-900">塩化ナトリウム（食塩）</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2 px-2.5 font-bold">温度 [℃]</th>
                <th className="py-2 px-2.5 font-bold text-amber-700">硝酸カリウム [g]</th>
                <th className="py-2 px-2.5 font-bold text-sky-700">塩化ナトリウム [g]</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {SOLUBILITY_DATA.map((row) => (
                <tr key={row.temp} className="hover:bg-slate-50">
                  <td className="py-1.5 px-2.5 font-semibold text-slate-800">{row.temp} ℃</td>
                  <td className="py-1.5 px-2.5 font-mono text-amber-700">{row.kno3} g</td>
                  <td className="py-1.5 px-2.5 font-mono text-sky-700">{row.nacl} g</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[11px] text-slate-500 mt-2 text-right">
            ※水100gに溶ける最大の質量（g）
          </p>
        </div>
      )}
    </div>
  );
};
