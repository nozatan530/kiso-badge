import {
  BadgeDef,
  BadgeState,
  CurriculumData,
  FieldDef,
  Grade,
  SubjectCurriculum,
  SubjectId,
  UnitDef,
} from '../types';

export const CURRICULUM_DATA: Record<SubjectId, SubjectCurriculum> = {
  // 1. 国語 (Japanese)
  jpn: {
    id: 'jpn',
    name: '国語',
    shortName: '国',
    color: {
      badgeBg: 'bg-rose-50',
      badgeText: 'text-rose-700',
      border: 'border-rose-200',
      bgLight: 'bg-rose-50/50',
      gradient: 'from-rose-500 to-red-600',
      accent: 'rose',
    },
    grades: {
      1: {
        grade: 1,
        gradeName: '中1',
        fields: [
          {
            id: 'jpn-g1-words-usage',
            name: '言葉の特徴や使い方',
            units: [
              {
                id: 'jpn-g1-kanji',
                name: '漢字',
                ref: '国語 第1学年〔知識及び技能〕⑴イ',
                open: false,
                badges: [],
              },
              {
                id: 'jpn-g1-vocab',
                name: '語彙',
                ref: '国語 第1学年〔知識及び技能〕⑴ウ',
                open: false,
                badges: [],
              },
              {
                id: 'jpn-g1-wordclass',
                name: '言葉のきまり：単語の類別',
                ref: '国語 第1学年〔知識及び技能〕⑴エ',
                open: true,
                description: '文節の区切り方、自立語・付属語の見分け、品詞の分類を身につけます。',
                badges: [
                  {
                    id: 'jpn-g1-wordclass-b1',
                    name: '文節に区切れる',
                    required: true,
                    description: '文に「ネ」を入れて自然に区切れる文節の切れ目を見つける。',
                  },
                  {
                    id: 'jpn-g1-wordclass-b2',
                    name: '自立語と付属語を見分けられる',
                    required: true,
                    description: '単語が単独で文節を作れる自立語か、助詞などの付属語かを見分ける。',
                  },
                  {
                    id: 'jpn-g1-wordclass-b3',
                    name: '品詞を見分けられる',
                    required: false,
                    description: '動詞・形容詞・形容動詞・副詞などの品詞の性質を見分ける。',
                  },
                ],
              },
              {
                id: 'jpn-g1-expression',
                name: '表現の技法',
                ref: '国語 第1学年〔知識及び技能〕⑴オ',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'jpn-g1-info',
            name: '情報の扱い方',
            units: [
              {
                id: 'jpn-g1-info-relation',
                name: '情報と情報の関係',
                ref: '国語 第1学年〔知識及び技能〕⑵ア・イ',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'jpn-g1-culture',
            name: '我が国の言語文化',
            units: [
              {
                id: 'jpn-g1-classic-intro',
                name: '古典の入り口',
                ref: '国語 第1学年〔知識及び技能〕⑶ア・イ',
                open: false,
                badges: [],
              },
            ],
          },
        ],
      },
      2: {
        grade: 2,
        gradeName: '中2',
        fields: [
          {
            id: 'jpn-g2-reading',
            name: '現代文・読解',
            units: [{ id: 'jpn-g2-critical', name: '論理の展開を捉える', open: false, badges: [] }],
          },
          {
            id: 'jpn-g2-grammar',
            name: '言葉・文法',
            units: [{ id: 'jpn-g2-verbs', name: '用言の活用（動詞・形容詞）', open: false, badges: [] }],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'jpn-g3-reading',
            name: '現代文・読解',
            units: [{ id: 'jpn-g3-thesis', name: '文化・社会論を読む', open: false, badges: [] }],
          },
          {
            id: 'jpn-g3-classic',
            name: '古典・伝統',
            units: [{ id: 'jpn-g3-poetry', name: '和歌・俳句・漢詩の鑑賞', open: false, badges: [] }],
          },
        ],
      },
    },
  },

  // 2. 社会 (Social Studies)
  soc: {
    id: 'soc',
    name: '社会',
    shortName: '社',
    color: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-700',
      border: 'border-amber-200',
      bgLight: 'bg-amber-50/50',
      gradient: 'from-amber-500 to-yellow-600',
      accent: 'amber',
    },
    grades: {
      1: {
        grade: 1,
        gradeName: '中1',
        fields: [
          {
            id: 'soc-g1-geo',
            name: '地理',
            units: [
              {
                id: 'soc-g1-world',
                name: '世界と日本の地域構成',
                ref: '地理的分野 A⑴',
                open: true,
                description: '六大陸・三大洋、緯度・経度と赤道・本初子午線、世界の時差の計算を身につけます。',
                badges: [
                  {
                    id: 'soc-g1-world-b1',
                    name: '大陸と海洋がわかる',
                    required: true,
                    description: '六大陸と三大洋の名称や位置、特徴を理解する。',
                  },
                  {
                    id: 'soc-g1-world-b2',
                    name: '緯度と経度で位置を表せる',
                    required: true,
                    description: '赤道・本初子午線・日本の標準時子午線などの緯度と経度を理解する。',
                  },
                  {
                    id: 'soc-g1-world-b3',
                    name: '時差を計算できる',
                    required: false,
                    description: '経度15度で1時間の時差をもとに、世界各地の時刻や時差を求める。',
                  },
                ],
              },
              {
                id: 'soc-g1-world-life',
                name: '世界各地の人々の生活と環境',
                ref: '地理的分野 B⑴',
                open: false,
                badges: [],
              },
              {
                id: 'soc-g1-world-regions',
                name: '世界の諸地域',
                ref: '地理的分野 B⑵',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'soc-g1-hist',
            name: '歴史',
            units: [
              {
                id: 'soc-g1-history-intro',
                name: '私たちと歴史',
                ref: '歴史的分野 A⑴',
                open: false,
                badges: [],
              },
              {
                id: 'soc-g1-japan-ancient',
                name: '古代までの日本',
                ref: '歴史的分野 B⑴',
                open: false,
                badges: [],
              },
            ],
          },
        ],
      },
      2: {
        grade: 2,
        gradeName: '中2',
        fields: [
          {
            id: 'soc-g2-geo',
            name: '地理',
            units: [{ id: 'soc-g2-japan-regions', name: '日本の地域的特色', open: false, badges: [] }],
          },
          {
            id: 'soc-g2-hist',
            name: '歴史',
            units: [{ id: 'soc-g2-modern', name: '近世の日本と鎖国・開国', open: false, badges: [] }],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'soc-g3-civics',
            name: '公民',
            units: [
              { id: 'soc-g3-constitution', name: '日本国憲法と基本的人権', open: false, badges: [] },
              { id: 'soc-g3-democracy', name: '民主政治と国の仕組み', open: false, badges: [] },
              { id: 'soc-g3-economy', name: '市場経済と財政', open: false, badges: [] },
            ],
          },
        ],
      },
    },
  },

  // 3. 数学 (Mathematics)
  math: {
    id: 'math',
    name: '数学',
    shortName: '数',
    color: {
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-700',
      border: 'border-blue-200',
      bgLight: 'bg-blue-50/50',
      gradient: 'from-blue-600 to-indigo-600',
      accent: 'blue',
    },
    grades: {
      1: {
        grade: 1,
        gradeName: '中1',
        fields: [
          {
            id: 'math-g1-numbers',
            name: '数と式',
            units: [
              {
                id: 'math-g1-integers',
                name: '正の数と負の数',
                ref: '数学 第1学年 A⑴',
                open: true,
                description: '負の数の意味、数直線上の大小と絶対値、四則計算（加減乗除）を身につけます。',
                badges: [
                  {
                    id: 'math-g1-integers-b1',
                    name: '大小と絶対値がわかる',
                    required: true,
                    description: '数直線上で正負の数の大小関係を判断し、絶対値を求める。',
                  },
                  {
                    id: 'math-g1-integers-b2',
                    name: '加法と減法ができる',
                    required: true,
                    description: '正の数・負の数のたし算とひき算を正確に計算する。',
                  },
                  {
                    id: 'math-g1-integers-b3',
                    name: '乗法と除法ができる',
                    required: true,
                    description: '正の数・負の数のかけ算とわり算、および複数の数の乗除計算をする。',
                  },
                ],
              },
              {
                id: 'math-g1-algebraic',
                name: '文字を用いた式',
                ref: '数学 第1学年 A⑵',
                open: false,
                badges: [],
              },
              {
                id: 'math-g1-equations',
                name: '一元一次方程式',
                ref: '数学 第1学年 A⑶',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'math-g1-geometry',
            name: '図形',
            units: [
              {
                id: 'math-g1-plane-geom',
                name: '平面図形',
                ref: '数学 第1学年 B⑴',
                open: false,
                badges: [],
              },
              {
                id: 'math-g1-space-geom',
                name: '空間図形',
                ref: '数学 第1学年 B⑵',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'math-g1-functions',
            name: '関数',
            units: [
              {
                id: 'math-g1-proportions',
                name: '比例と反比例',
                ref: '数学 第1学年 C⑴',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'math-g1-data',
            name: 'データの活用',
            units: [
              {
                id: 'math-g1-data-dist',
                name: 'データの分布',
                ref: '数学 第1学年 D⑴',
                open: false,
                badges: [],
              },
              {
                id: 'math-g1-probability',
                name: '不確定な事象の起こりやすさ',
                ref: '数学 第1学年 D⑵',
                open: false,
                badges: [],
              },
            ],
          },
        ],
      },
      2: {
        grade: 2,
        gradeName: '中2',
        fields: [
          {
            id: 'math-g2-expressions',
            name: '数と式',
            units: [{ id: 'math-g2-sim-eq', name: '連立二元一次方程式', open: false, badges: [] }],
          },
          {
            id: 'math-g2-functions',
            name: '関数',
            units: [{ id: 'math-g2-linear', name: '一次関数とグラフ', open: false, badges: [] }],
          },
          {
            id: 'math-g2-geometry',
            name: '図形',
            units: [{ id: 'math-g2-congruence', name: '図形の合同と証明', open: false, badges: [] }],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'math-g3-algebra',
            name: '数と式',
            units: [
              { id: 'math-g3-factoring', name: '式の展開と因数分解', open: false, badges: [] },
              { id: 'math-g3-quadratic-eq', name: '平方根と二次方程式', open: false, badges: [] },
            ],
          },
          {
            id: 'math-g3-functions',
            name: '関数',
            units: [{ id: 'math-g3-quadratic-fn', name: '関数 y = ax²', open: false, badges: [] }],
          },
          {
            id: 'math-g3-geometry',
            name: '図形',
            units: [{ id: 'math-g3-pythagoras', name: '円周角と三平方の定理', open: false, badges: [] }],
          },
        ],
      },
    },
  },

  // 4. 理科 (Science)
  sci: {
    id: 'sci',
    name: '理科',
    shortName: '理',
    color: {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      border: 'border-emerald-200',
      bgLight: 'bg-emerald-50/50',
      gradient: 'from-emerald-600 to-teal-700',
      accent: 'emerald',
    },
    grades: {
      1: {
        grade: 1,
        gradeName: '中1',
        fields: [
          {
            id: 'sci-g1-energy',
            name: 'エネルギー',
            units: [
              {
                id: 'sci-g1-energy-phenomena',
                name: '身近な物理現象（光・音・力）',
                ref: '理科 第1分野⑴',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'sci-g1-particles',
            name: '粒子',
            units: [
              {
                id: 'sci-g1-substance',
                name: '身のまわりの物質（密度・水溶液）',
                ref: '理科 第1分野⑵',
                open: true, // OPEN FOR PROTOTYPE
                description: '密度の計算と見分け方、水溶液の性質、質量パーセント濃度、溶解度曲線を身につけます。',
                badges: [
                  {
                    id: 'sci-g1-substance-b1',
                    name: '密度を計算できる',
                    required: true,
                    description: '質量と体積から密度を求めたり、密度から質量・体積を計算する。',
                  },
                  {
                    id: 'sci-g1-substance-b2',
                    name: '密度で見分けられる',
                    required: true,
                    description: '密度の違いを使って、物質の種類や水への浮き沈みを判断する。',
                  },
                  {
                    id: 'sci-g1-substance-b3',
                    name: '水溶液のことばがわかる',
                    required: true,
                    description: '溶質・溶媒・溶液の意味や、溶けても質量が変わらない粒子の様子を理解する。',
                  },
                  {
                    id: 'sci-g1-substance-b4',
                    name: '質量パーセント濃度を計算できる',
                    required: true,
                    description: '水溶液全体の質量と溶質の質量から、パーセント濃度を正確に計算する。',
                  },
                  {
                    id: 'sci-g1-substance-b5',
                    name: '溶解度曲線を読める',
                    required: false,
                    description: '温度による溶解度の違いをグラフや表から読み取り、析出する結晶の量を求める。',
                  },
                ],
              },
            ],
          },
          {
            id: 'sci-g1-life',
            name: '生命',
            units: [
              {
                id: 'sci-g1-life-organisms',
                name: 'いろいろな生物とその共通点',
                ref: '理科 第2分野⑴',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'sci-g1-earth',
            name: '地球',
            units: [
              {
                id: 'sci-g1-earth-formation',
                name: '大地の成り立ちと変化',
                ref: '理科 第2分野⑵',
                open: false,
                badges: [],
              },
            ],
          },
        ],
      },
      2: {
        grade: 2,
        gradeName: '中2',
        fields: [
          {
            id: 'sci-g2-energy',
            name: 'エネルギー',
            units: [{ id: 'sci-g2-circuits', name: '電流とその利用', open: false, badges: [] }],
          },
          {
            id: 'sci-g2-particles',
            name: '粒子',
            units: [{ id: 'sci-g2-reactions', name: '化学変化と原子・分子', open: false, badges: [] }],
          },
          {
            id: 'sci-g2-life',
            name: '生命',
            units: [{ id: 'sci-g2-animals', name: '動物のからだと生活', open: false, badges: [] }],
          },
          {
            id: 'sci-g2-earth',
            name: '地球',
            units: [{ id: 'sci-g2-weather', name: '天気とその変化', open: false, badges: [] }],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'sci-g3-energy',
            name: 'エネルギー',
            units: [{ id: 'sci-g3-motion', name: '運動とエネルギー', open: false, badges: [] }],
          },
          {
            id: 'sci-g3-particles',
            name: '粒子',
            units: [{ id: 'sci-g3-ions', name: '化学変化とイオン', open: false, badges: [] }],
          },
          {
            id: 'sci-g3-life',
            name: '生命',
            units: [{ id: 'sci-g3-genetics', name: '生命の連続性と遺伝', open: false, badges: [] }],
          },
          {
            id: 'sci-g3-earth',
            name: '地球',
            units: [{ id: 'sci-g3-space', name: '地球と宇宙', open: false, badges: [] }],
          },
        ],
      },
    },
  },

  // 5. 英語 (English)
  eng: {
    id: 'eng',
    name: '英語',
    shortName: '英',
    color: {
      badgeBg: 'bg-violet-50',
      badgeText: 'text-violet-700',
      border: 'border-violet-200',
      bgLight: 'bg-violet-50/50',
      gradient: 'from-violet-600 to-purple-600',
      accent: 'violet',
    },
    grades: {
      1: {
        grade: 1,
        gradeName: '中1',
        fields: [
          {
            id: 'eng-g1-grammar',
            name: '文法',
            units: [
              {
                id: 'eng-g1-be-verbs',
                name: 'be動詞',
                ref: '外国語 2⑴エ',
                open: false,
                badges: [],
              },
              {
                id: 'eng-g1-present',
                name: '一般動詞（三人称単数現在）',
                ref: '外国語 2⑴エ 文法事項 e',
                open: true,
                description: 'be動詞と一般動詞の使い分け、三人称単数現在の-s/-es、doesを用いた疑問文・否定文を身につけます。',
                badges: [
                  {
                    id: 'eng-g1-present-b1',
                    name: 'be動詞と一般動詞を使い分けられる',
                    required: true,
                    description: '主語と状態・動作に合わせて、be動詞と一般動詞を正しく選択する。',
                  },
                  {
                    id: 'eng-g1-present-b2',
                    name: '三単現の s をつけられる',
                    required: true,
                    description: '主語が三人称単数・現在のときに動詞に -s / -es を正しくつける。',
                  },
                  {
                    id: 'eng-g1-present-b3',
                    name: 'does を使って疑問文・否定文を作れる',
                    required: false,
                    description: 'does / doesn\'t を用いて疑問文と否定文をつくり、動詞を原形にする。',
                  },
                ],
              },
              {
                id: 'eng-g1-wh-questions',
                name: '疑問詞',
                ref: '外国語 2⑴エ',
                open: false,
                badges: [],
              },
              {
                id: 'eng-g1-can',
                name: 'can',
                ref: '外国語 2⑴エ',
                open: false,
                badges: [],
              },
              {
                id: 'eng-g1-progressive',
                name: '現在進行形',
                ref: '外国語 2⑴エ',
                open: false,
                badges: [],
              },
              {
                id: 'eng-g1-past',
                name: '過去形',
                ref: '外国語 2⑴エ',
                open: false,
                badges: [],
              },
            ],
          },
          {
            id: 'eng-g1-vocab-field',
            name: '語彙',
            units: [
              {
                id: 'eng-g1-vocab',
                name: '中1の単語',
                ref: '外国語 2⑴ウ',
                open: false,
                badges: [],
              },
            ],
          },
        ],
      },
      2: {
        grade: 2,
        gradeName: '中2',
        fields: [
          {
            id: 'eng-g2-grammar',
            name: '文法・構文',
            units: [
              { id: 'eng-g2-past-tense', name: '過去形と未来の表現', open: false, badges: [] },
              { id: 'eng-g2-infinitives', name: '不定詞・動名詞・比較', open: false, badges: [] },
            ],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'eng-g3-grammar',
            name: '文法・構文',
            units: [
              { id: 'eng-g3-perfect', name: '現在完了形', open: false, badges: [] },
              { id: 'eng-g3-passive', name: '受動態と関係代名詞', open: false, badges: [] },
            ],
          },
        ],
      },
    },
  },
};

/**
 * Helper to find all units across curriculum.
 */
export function getAllUnits(): Array<{
  unit: UnitDef;
  field: FieldDef;
  grade: Grade;
  subject: SubjectCurriculum;
}> {
  const result: Array<{
    unit: UnitDef;
    field: FieldDef;
    grade: Grade;
    subject: SubjectCurriculum;
  }> = [];

  const subjects = Object.values(CURRICULUM_DATA);
  for (const subject of subjects) {
    const gradeKeys = [1, 2, 3] as Grade[];
    for (const g of gradeKeys) {
      const gradeCurriculum = subject.grades[g];
      if (!gradeCurriculum) continue;
      for (const field of gradeCurriculum.fields) {
        for (const unit of field.units) {
          result.push({ unit, field, grade: g, subject });
        }
      }
    }
  }

  return result;
}

/**
 * Finds a unit and its hierarchical context by unitId.
 */
export function getUnitById(unitId: string): {
  unit: UnitDef;
  field: FieldDef;
  grade: Grade;
  subject: SubjectCurriculum;
} | null {
  const all = getAllUnits();
  return all.find((item) => item.unit.id === unitId) || null;
}

/**
 * Finds a badge and its hierarchical context by badgeId.
 */
export function getBadgeById(badgeId: string): {
  badge: BadgeDef;
  unit: UnitDef;
  field: FieldDef;
  grade: Grade;
  subject: SubjectCurriculum;
} | null {
  const all = getAllUnits();
  for (const item of all) {
    const foundBadge = item.unit.badges.find((b) => b.id === badgeId);
    if (foundBadge) {
      return {
        badge: foundBadge,
        unit: item.unit,
        field: item.field,
        grade: item.grade,
        subject: item.subject,
      };
    }
  }
  return null;
}

/**
 * Checks if a unit's minimum requirements are cleared.
 * (All badges with required === true must be 'passed' or 'mastered')
 */
export function isUnitMinCleared(
  unit: UnitDef,
  badgeStates: Record<string, BadgeState>
): boolean {
  const requiredBadges = unit.badges.filter((b) => b.required);
  if (requiredBadges.length === 0) return false;
  return requiredBadges.every((b) => {
    const state = badgeStates[b.id];
    return state && (state.stage === 'passed' || state.stage === 'mastered');
  });
}

/**
 * Aggregate stats for a specific (subject, grade) cell on the map.
 */
export function getSubjectGradeStats(
  subjectId: SubjectId,
  grade: Grade,
  badgeStates: Record<string, BadgeState>
): {
  totalBadges: number;
  passedOrMasteredCount: number;
  masteredCount: number;
  hasOpenUnits: boolean;
  hasMinClearedUnit: boolean;
  openUnitsCount: number;
} {
  const subject = CURRICULUM_DATA[subjectId];
  const gradeCurriculum = subject?.grades[grade];
  if (!gradeCurriculum) {
    return {
      totalBadges: 0,
      passedOrMasteredCount: 0,
      masteredCount: 0,
      hasOpenUnits: false,
      hasMinClearedUnit: false,
      openUnitsCount: 0,
    };
  }

  let totalBadges = 0;
  let passedOrMasteredCount = 0;
  let masteredCount = 0;
  let hasOpenUnits = false;
  let hasMinClearedUnit = false;
  let openUnitsCount = 0;

  for (const field of gradeCurriculum.fields) {
    for (const unit of field.units) {
      if (unit.open) {
        hasOpenUnits = true;
        openUnitsCount++;
        totalBadges += unit.badges.length;
        if (isUnitMinCleared(unit, badgeStates)) {
          hasMinClearedUnit = true;
        }
        for (const badge of unit.badges) {
          const state = badgeStates[badge.id];
          if (state?.stage === 'passed' || state?.stage === 'mastered') {
            passedOrMasteredCount++;
          }
          if (state?.stage === 'mastered') {
            masteredCount++;
          }
        }
      }
    }
  }

  return {
    totalBadges,
    passedOrMasteredCount,
    masteredCount,
    hasOpenUnits,
    hasMinClearedUnit,
    openUnitsCount,
  };
}
