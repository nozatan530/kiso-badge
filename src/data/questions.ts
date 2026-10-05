import { Question } from '../types';

export const DENSITY_TABLE_DATA = [
  { name: '水', density: 1.00 },
  { name: '氷', density: 0.92 },
  { name: 'エタノール', density: 0.79 },
  { name: 'アルミニウム', density: 2.70 },
  { name: '鉄', density: 7.87 },
  { name: '銅', density: 8.96 },
];

export const SOLUBILITY_DATA = [
  { temp: 0, kno3: 13.3, nacl: 35.7 },
  { temp: 20, kno3: 31.6, nacl: 35.8 },
  { temp: 40, kno3: 63.9, nacl: 36.3 },
  { temp: 60, kno3: 109.2, nacl: 37.1 },
  { temp: 80, kno3: 169.0, nacl: 38.0 },
];

export const QUESTIONS_DATABASE: Question[] = [
  // ==========================================
  // バッジ 1: 密度を計算できる (sci-g1-substance-b1, ◯必須)
  // ==========================================
  {
    id: 'sci-g1-substance-b1-q01',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question: '質量54g、体積20cm³の物質の密度は何g/cm³ですか。',
    answer: 2.7,
    tolerance: 0.05,
    unit: 'g/cm³',
    hints: [
      '① 密度 ＝ 質量 ÷ 体積 です。',
      '② 54 ÷ 20 を計算してみましょう。',
      '③ 単位は g/cm³（1cm³あたり何gか）です。',
    ],
    explanation:
      '54 ÷ 20 ＝ 2.7 g/cm³ です。これは「体積1cm³あたり2.7gの重さがある」ということを表しています。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b1-q02',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question: '体積10cm³で密度7.9g/cm³の鉄の質量は何gですか。',
    answer: 79,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 質量 ＝ 密度 × 体積 です。',
      '② 7.9 × 10 を計算してみましょう。',
      '③ 単位は g です。',
    ],
    explanation: '7.9 × 10 ＝ 79 g です。1cm³あたり7.9gなので、10cm³ではその10倍になります。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b1-q03',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question: '【仮】質量162g、体積60cm³のアルミニウムの密度は何g/cm³ですか。',
    answer: 2.7,
    tolerance: 0.05,
    unit: 'g/cm³',
    hints: [
      '① 密度 ＝ 質量 ÷ 体積 です。',
      '② 162 ÷ 60 を計算してみましょう。',
      '③ 小数第1位まで求めます。',
    ],
    explanation: '162 ÷ 60 ＝ 2.7 g/cm³ です。アルミニウムの密度は2.7g/cm³です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b1-q04',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question: '【仮】密度1.0g/cm³の水50cm³の質量は何gですか。',
    answer: 50,
    tolerance: 0.1,
    unit: 'g',
    hints: [
      '① 質量 ＝ 密度 × 体積 です。',
      '② 1.0 × 50 を計算してみましょう。',
      '③ 水は1cm³でちょうど1gです。',
    ],
    explanation:
      '1.0 × 50 ＝ 50 g です。水は密度が1.0g/cm³なので、体積の数値と質量の数値が一致します。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b1-q05',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question: '【仮】質量39.5g、体積5cm³の金属の密度は何g/cm³ですか。',
    answer: 7.9,
    tolerance: 0.05,
    unit: 'g/cm³',
    hints: [
      '① 密度 ＝ 質量 ÷ 体積 です。',
      '② 39.5 ÷ 5 を計算してみましょう。',
      '③ 割り切れるまで計算します。',
    ],
    explanation: '39.5 ÷ 5 ＝ 7.9 g/cm³ です（鉄の密度に近い値です）。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b1-q06',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question: '【仮】密度0.8g/cm³のエタノール40gの体積は何cm³ですか。',
    answer: 50,
    tolerance: 0.1,
    unit: 'cm³',
    hints: [
      '① 体積 ＝ 質量 ÷ 密度 です。',
      '② 40 ÷ 0.8 を計算してみましょう。',
      '③ 小数点の割り算に注意（400 ÷ 8 と同じ）です。',
    ],
    explanation: '40 ÷ 0.8 ＝ 50 cm³ です。質量を密度で割ることで体積が求められます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b1-q07',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question:
      '【仮】メスシリンダーに水が30cm³入っています。小石を入れると水面が45cm³になりました。この小石の体積は何cm³ですか。',
    answer: 15,
    tolerance: 0.1,
    unit: 'cm³',
    hints: [
      '① 物体を入れた後の目盛りから、入れる前の目盛りを引きます。',
      '② 45 − 30 を計算しましょう。',
      '③ 増えた水の分が、小石の体積です。',
    ],
    explanation:
      '45 − 30 ＝ 15 cm³ です。水没させた物体の体積は、増えた水の体積と等しくなります。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b1-q08',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question: '【仮】質量135g、体積50cm³の物質の密度は何g/cm³ですか。',
    answer: 2.7,
    tolerance: 0.05,
    unit: 'g/cm³',
    hints: [
      '① 密度 ＝ 質量 ÷ 体積 です。',
      '② 135 ÷ 50 を計算してみましょう。',
      '③ 135 ÷ 50 ＝ 2.7 です。',
    ],
    explanation: '135 ÷ 50 ＝ 2.7 g/cm³ です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b1-q09',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question:
      '【仮】密度8.96g/cm³の銅のかたまりがあります。体積が20cm³のとき、質量は何gですか。',
    answer: 179.2,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 質量 ＝ 密度 × 体積 です。',
      '② 8.96 × 20 を計算してみましょう。',
      '③ 小数点の位置に気をつけて計算します。',
    ],
    explanation: '8.96 × 20 ＝ 179.2 g です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b1-q10',
    badgeId: 'sci-g1-substance-b1',
    type: 'number',
    question:
      '【仮】質量270gで、密度が2.7g/cm³の金属のかたまりがあります。この体積は何cm³ですか。',
    answer: 100,
    tolerance: 0.5,
    unit: 'cm³',
    hints: [
      '① 体積 ＝ 質量 ÷ 密度 です。',
      '② 270 ÷ 2.7 を計算してみましょう。',
      '③ 2700 ÷ 27 と同じです。',
    ],
    explanation: '270 ÷ 2.7 ＝ 100 cm³ です。',
    sample: true,
  },

  // ==========================================
  // バッジ 2: 密度で見分けられる (sci-g1-substance-b2, ◯必須)
  // ==========================================
  {
    id: 'sci-g1-substance-b2-q01',
    badgeId: 'sci-g1-substance-b2',
    type: 'choice',
    question: '質量89.6g、体積10.0cm³の金属は、下の表のどれと考えられますか。',
    choices: ['アルミニウム', '鉄', '銅', 'エタノール'],
    answer: '銅',
    figure: { type: 'density_table' },
    explanation: '89.6 ÷ 10.0 ＝ 8.96 g/cm³ となり、銅の密度と一致します。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b2-q02',
    badgeId: 'sci-g1-substance-b2',
    type: 'twostep',
    question: '氷を水に入れると、どうなりますか。',
    choices: ['浮く', '沈む', '水の中で止まる'],
    answer: '浮く',
    reasons: [
      { id: 'b2-q02-r1', text: '氷の密度（0.92）が水の密度（1.00）より小さいから' },
      { id: 'b2-q02-r2', text: '氷は軽いから' },
      { id: 'b2-q02-r3', text: '氷の中に空気が入っているから' },
    ],
    reasonAnswer: 'b2-q02-r1',
    reasonFeedback: {
      'b2-q02-r1': '正解！液体より密度が小さい物質は浮きます。',
      'b2-q02-r2':
        '「軽い・重い（質量）」では決まらない。大きな氷山も浮く。比べるのは同じ体積あたりの重さ＝密度',
      'b2-q02-r3':
        '空気がなくても氷は浮く。氷そのものの密度が水より小さいことが理由',
    },
    figure: { type: 'density_table' },
    explanation:
      '水（1.00g/cm³）よりも密度が小さい物質（氷は0.92g/cm³）は水に浮きます。浮き沈みは質量ではなく密度で決まります。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b2-q03',
    badgeId: 'sci-g1-substance-b2',
    type: 'twostep',
    question:
      '大きな鉄のかたまりと小さな鉄のくぎを水に入れると、どうなりますか。',
    choices: ['どちらも沈む', 'くぎだけ浮く', 'かたまりだけ浮く'],
    answer: 'どちらも沈む',
    reasons: [
      { id: 'b2-q03-r1', text: '鉄の密度は大きさに関係なく同じで、水より大きいから' },
      { id: 'b2-q03-r2', text: 'くぎは小さくて軽いから浮く' },
      { id: 'b2-q03-r3', text: '重いものほど沈みやすいから' },
    ],
    reasonAnswer: 'b2-q03-r1',
    reasonFeedback: {
      'b2-q03-r1': '正解！密度は物質の種類ごとに決まっており、大きさや重さで変わりません。',
      'b2-q03-r2':
        '密度は大きさで変わらない。小さくても鉄は鉄なので沈む',
      'b2-q03-r3': '浮き沈みは質量ではなく密度で決まる',
    },
    figure: { type: 'density_table' },
    explanation:
      '密度は物質特有の値で、物質の量や大きさで変わりません。鉄の密度（7.87）は水の密度（1.00）より大きいため、大きいくぎも小さなくぎも沈みます。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b2-q04',
    badgeId: 'sci-g1-substance-b2',
    type: 'choice',
    question:
      '【仮】質量54.0g、体積20.0cm³の金属片があります。下の表から判断すると、何の金属と考えられますか。',
    choices: ['アルミニウム', '鉄', '銅', '水'],
    answer: 'アルミニウム',
    figure: { type: 'density_table' },
    explanation: '54.0 ÷ 20.0 ＝ 2.70 g/cm³ です。表のアルミニウムの密度（2.70）と一致します。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b2-q05',
    badgeId: 'sci-g1-substance-b2',
    type: 'twostep',
    question:
      '【仮】エタノール（密度0.79g/cm³）に水（密度1.00g/cm³）を静かに入れると、水はエタノールに対してどうなりますか。',
    choices: ['底に沈む', '表面に浮く', '真ん中で浮遊する'],
    answer: '底に沈む',
    reasons: [
      { id: 'b2-q05-r1', text: '水の密度のほうがエタノールの密度より大きいから' },
      { id: 'b2-q05-r2', text: '水はエタノールより冷たいから' },
      { id: 'b2-q05-r3', text: 'エタノールのほうが透明度が高いから' },
    ],
    reasonAnswer: 'b2-q05-r1',
    reasonFeedback: {
      'b2-q05-r1': '正解！密度の大きい液体（水 1.00）は、密度の小さい液体（エタノール 0.79）の下に沈みます。',
      'b2-q05-r2': '温度ではなく、それぞれの物質がもつ密度の大小関係が理由です。',
      'b2-q05-r3': '透明度と浮き沈みは関係ありません。',
    },
    figure: { type: 'density_table' },
    explanation:
      '水の密度（1.00）はエタノールの密度（0.79）より大きいため、水はエタノールの底に沈みます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b2-q06',
    badgeId: 'sci-g1-substance-b2',
    type: 'choice',
    question:
      '【仮】アルミニウム（密度2.70g/cm³）でできた小さなボタンを水（1.00g/cm³）に入れるとどうなりますか。',
    choices: ['底に沈む', '水面に浮く', '水面すれすれで浮く'],
    answer: '底に沈む',
    figure: { type: 'density_table' },
    explanation:
      'アルミニウムの密度（2.70g/cm³）は水の密度（1.00g/cm³）よりも大きいため、小さくても水に沈みます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b2-q07',
    badgeId: 'sci-g1-substance-b2',
    type: 'twostep',
    question:
      '【仮】氷（密度0.92g/cm³）をエタノール（密度0.79g/cm³）の中に入れるとどうなりますか。',
    choices: ['底に沈む', '表面に浮く', '水面で静止する'],
    answer: '底に沈む',
    reasons: [
      { id: 'b2-q07-r1', text: '氷の密度（0.92）がエタノールの密度（0.79）より大きいから' },
      { id: 'b2-q07-r2', text: '氷は冷たいので下に落ちるから' },
      { id: 'b2-q07-r3', text: 'エタノールには浮力がないから' },
    ],
    reasonAnswer: 'b2-q07-r1',
    reasonFeedback: {
      'b2-q07-r1': '正解！氷は水には浮きますが、エタノールよりは密度が大きいためエタノールには沈みます。',
      'b2-q07-r2': '冷たさではなく、物質の密度の大小関係で決まります。',
      'b2-q07-r3': 'エタノールにも浮力は働きます。ただし氷の密度のほうが大きいため沈みます。',
    },
    figure: { type: 'density_table' },
    explanation:
      '氷は水（1.00）には浮きますが、エタノール（0.79）に対しては氷の密度（0.92）のほうが大きいため沈みます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b2-q08',
    badgeId: 'sci-g1-substance-b2',
    type: 'choice',
    question:
      '【仮】体積20.0cm³、質量157.4gの金属のかたまりがあります。この金属は表のどれですか。',
    choices: ['アルミニウム', '鉄', '銅', '水'],
    answer: '鉄',
    figure: { type: 'density_table' },
    explanation: '157.4 ÷ 20.0 ＝ 7.87 g/cm³ です。表の鉄の密度と一致します。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b2-q09',
    badgeId: 'sci-g1-substance-b2',
    type: 'twostep',
    question:
      '【仮】大きなアルミニウムの塊と、小さなアルミニウム箔（アルミホイル）を固めて丸めた玉を水に入れると、どうなりますか。',
    choices: ['どちらも沈む', '玉だけ浮く', '大きな塊だけ浮く'],
    answer: 'どちらも沈む',
    reasons: [
      { id: 'b2-q09-r1', text: 'アルミニウムの密度は形や大きさによらず一定で、水より大きいから' },
      { id: 'b2-q09-r2', text: 'アルミ玉は軽いから水に浮く' },
      { id: 'b2-q09-r3', text: '塊は重いので沈むが、玉は水に溶けるから' },
    ],
    reasonAnswer: 'b2-q09-r1',
    reasonFeedback: {
      'b2-q09-r1': '正解！物質の密度は量や形によって変わりません。',
      'b2-q09-r2':
        '空気を含ませずに丸めたアルミニウムは、小さくても水（1.00）より密度が大きい（2.70）ので沈みます。',
      'b2-q09-r3': 'アルミニウムは水に溶けません。',
    },
    figure: { type: 'density_table' },
    explanation:
      'アルミニウムの密度は2.70g/cm³で、水の1.00g/cm³より大きいため、大きさに関係なくどちらも沈みます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b2-q10',
    badgeId: 'sci-g1-substance-b2',
    type: 'choice',
    question:
      '【仮】表の物質の中で、水（1.00g/cm³）よりも密度が小さい（＝水に浮く）固体・液体はどれですか。',
    choices: ['氷とエタノール', 'アルミニウムと鉄', '銅と鉄', 'アルミニウムと氷'],
    answer: '氷とエタノール',
    figure: { type: 'density_table' },
    explanation: '氷（0.92）とエタノール（0.79）は水（1.00）より密度が小さいです。',
    sample: true,
  },

  // ==========================================
  // バッジ 3: 水溶液のことばがわかる (sci-g1-substance-b3, ◯必須)
  // ==========================================
  {
    id: 'sci-g1-substance-b3-q01',
    badgeId: 'sci-g1-substance-b3',
    type: 'choice',
    question:
      '食塩水で、食塩のように溶けている物質を何といいますか。',
    choices: ['溶質', '溶媒', '溶液', '溶解度'],
    answer: '溶質',
    explanation:
      '溶けている物質が溶質、溶かしている液体（水）が溶媒、できた液体全体が溶液。水が溶媒の場合は「水溶液」と呼びます。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b3-q02',
    badgeId: 'sci-g1-substance-b3',
    type: 'twostep',
    question:
      '砂糖を水に溶かして、ふたをして1日置きました。砂糖水の濃さはどうなっていますか。',
    choices: ['上も下も同じ', '下のほうが濃い', '上のほうが濃い'],
    answer: '上も下も同じ',
    reasons: [
      {
        id: 'b3-q02-r1',
        text: '砂糖の粒子が水全体に均一に散らばっていて、時間がたっても下にたまらないから',
      },
      { id: 'b3-q02-r2', text: '砂糖は水より重いので、だんだん下にたまるから' },
      { id: 'b3-q02-r3', text: '砂糖は溶けると消えてなくなるから' },
    ],
    reasonAnswer: 'b3-q02-r1',
    reasonFeedback: {
      'b3-q02-r1': '正解！水溶液中では、溶質の粒子が水全体に均一に分散し続けます。',
      'b3-q02-r2':
        '一度溶けた粒子は、時間がたっても下にたまらない',
      'b3-q02-r3': '見えなくなっても粒子は水の中にある',
    },
    explanation:
      '水溶液の特徴は「透明であること」「どの部分も濃さが等しいこと」「時間がたっても下に沈まないこと」です。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b3-q03',
    badgeId: 'sci-g1-substance-b3',
    type: 'twostep',
    question:
      '水100gに砂糖10gを溶かしました。砂糖水全体の質量は何gですか。',
    choices: ['110g', '100g', '100gより少し多い'],
    answer: '110g',
    reasons: [
      { id: 'b3-q03-r1', text: '見えなくなっても、砂糖の粒子は水の中にあるから' },
      { id: 'b3-q03-r2', text: '砂糖は溶けると消えてなくなるから' },
      { id: 'b3-q03-r3', text: '溶けると砂糖の重さの一部がなくなるから' },
    ],
    reasonAnswer: 'b3-q03-r1',
    reasonFeedback: {
      'b3-q03-r1': '正解！溶けても質量は変わりません（質量保存）。100g ＋ 10g ＝ 110g になります。',
      'b3-q03-r2':
        '粒子が小さくなって見えないだけで、なくなってはいない。質量はそのまま足される',
      'b3-q03-r3': '溶けても質量は減らない',
    },
    explanation:
      '物質が水に溶けて目に見えなくなっても、物質をつくる粒子は水の中にそのまま存在しています。全体の質量は 100g ＋ 10g ＝ 110g です。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b3-q04',
    badgeId: 'sci-g1-substance-b3',
    type: 'choice',
    question:
      '【仮】食塩水において、食塩を溶かしている「水」のような液体を何といいますか。',
    choices: ['溶媒', '溶質', '溶液', '懸濁液'],
    answer: '溶媒',
    explanation: '物質を溶かしている液体を「溶媒」といいます。水が溶媒である溶液を特に「水溶液」といいます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b3-q05',
    badgeId: 'sci-g1-substance-b3',
    type: 'choice',
    question: '【仮】溶質が溶媒に溶けてできた液体全体を何といいますか。',
    choices: ['溶液', '溶質', '溶媒', '溶解度'],
    answer: '溶液',
    explanation: '溶質が溶媒に溶けた液体全体を「溶液」といいます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b3-q06',
    badgeId: 'sci-g1-substance-b3',
    type: 'twostep',
    question: '【仮】水溶液の見た目の特徴として正しいものはどれですか。',
    choices: ['透明である', '必ず白く濁っている', '必ず無色である'],
    answer: '透明である',
    reasons: [
      {
        id: 'b3-q06-r1',
        text: '溶質の粒子が非常に小さく均一に散らばっており、光を遮らないから',
      },
      { id: 'b3-q06-r2', text: '水しか入っていないから' },
      { id: 'b3-q06-r3', text: '溶質が底にすべて沈んでいるから' },
    ],
    reasonAnswer: 'b3-q06-r1',
    reasonFeedback: {
      'b3-q06-r1': '正解！青色などの色がついている水溶液でも透き通って（透明で）いれば水溶液です。',
      'b3-q06-r2': '溶質がしっかり溶けています。',
      'b3-q06-r3': '底にたまっていると不均一になります。水溶液は均一です。',
    },
    explanation:
      '水溶液はすべて「透明（透き通っている）」です。硫酸銅水溶液のように青くても、向こう側が透けて見えれば透明です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b3-q07',
    badgeId: 'sci-g1-substance-b3',
    type: 'choice',
    question: '【仮】次の液体のうち、理科でいう「水溶液」にあたるものはどれですか。',
    choices: ['食塩水', '牛乳', '泥水', 'みそ汁'],
    answer: '食塩水',
    explanation:
      '牛乳や泥水は小さな粒が漂って濁っている（不均一）ため水溶液ではありません。食塩水は透き通って均一に溶けているため水溶液です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b3-q08',
    badgeId: 'sci-g1-substance-b3',
    type: 'twostep',
    question:
      '【仮】水150gに食塩25gをすべて溶かしました。できた食塩水の質量は何gですか。',
    choices: ['175g', '150g', '125g'],
    answer: '175g',
    reasons: [
      { id: 'b3-q08-r1', text: '溶けても見えなくなっただけで、食塩の粒子自体の重さは変わらないから' },
      { id: 'b3-q08-r2', text: '水が食塩を吸収して軽くなるから' },
      { id: 'b3-q08-r3', text: '塩は水分を含むと重くなるから' },
    ],
    reasonAnswer: 'b3-q08-r1',
    reasonFeedback: {
      'b3-q08-r1': '正解！溶液の質量 ＝ 溶媒の質量 ＋ 溶質の質量 （150 ＋ 25 ＝ 175g）です。',
      'b3-q08-r2': '溶けても全体の重さは軽くなりません。',
      'b3-q08-r3': '密閉していれば外から何かが加わらない限り重さは変わりません。',
    },
    explanation: '溶液の質量 ＝ 水（溶媒）150g ＋ 食塩（溶質）25g ＝ 175g です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b3-q09',
    badgeId: 'sci-g1-substance-b3',
    type: 'choice',
    question: '【仮】水溶液について正しく述べているものはどれですか。',
    choices: [
      'どの部分をとっても濃さは同じである',
      '底のほうがいつも濃い',
      '放置しておくと数日で溶質が下に沈む',
      '色がついていたら水溶液とはいえない',
    ],
    answer: 'どの部分をとっても濃さは同じである',
    explanation: '水溶液は全体が均一に混ざり合っているため、上でも下でも濃さは全く同じです。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b3-q10',
    badgeId: 'sci-g1-substance-b3',
    type: 'twostep',
    question:
      '【仮】試験管に入れた食塩水にゴム栓をして1週間置きました（水は蒸発していません）。液の濃さはどうなっていますか。',
    choices: ['どの部分も同じ濃さのまま', '底のほうが濃くなっている', '上のほうが濃くなっている'],
    answer: 'どの部分も同じ濃さのまま',
    reasons: [
      { id: 'b3-q10-r1', text: '一度均一に混ざった溶質の粒子は重力で下に沈降しないから' },
      { id: 'b3-q10-r2', text: '食塩の粒子は重力で少しずつ底に引き寄せられるから' },
      { id: 'b3-q10-r3', text: '水が上に浮き上がってくるから' },
    ],
    reasonAnswer: 'b3-q10-r1',
    reasonFeedback: {
      'b3-q10-r1': '正解！完全に溶けた水溶液は、放置しても溶質が分離して沈殿することはありません。',
      'b3-q10-r2': '分子サイズの粒子は水分子の衝突によって沈降しません。',
      'b3-q10-r3': '水溶液全体が完全に混ざり合っているため水だけが浮くことはありません。',
    },
    explanation: '完全に溶けた水溶液は、蒸発しない限り何日経っても均一な濃さを保ちます。',
    sample: true,
  },

  // ==========================================
  // バッジ 4: 質量パーセント濃度を計算できる (sci-g1-substance-b4, ◯必須)
  // ==========================================
  {
    id: 'sci-g1-substance-b4-q01',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '水90gに食塩10gを溶かした食塩水の質量パーセント濃度は何%ですか。',
    answer: 10,
    tolerance: 0.1,
    unit: '%',
    hints: [
      '① 濃度(%) ＝ 溶質の質量 ÷ 溶液の質量 × 100 です。',
      '② 溶液の質量は 90＋10＝100g です。',
      '③ 10÷100×100 を計算する',
    ],
    explanation:
      '10÷(90＋10)×100＝10%。分母は水だけでなく、溶液全体の質量。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b4-q02',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '15%の食塩水200gにふくまれる食塩は何gですか。',
    answer: 30,
    tolerance: 0.1,
    unit: 'g',
    hints: [
      '① 溶質の質量＝溶液の質量×濃度÷100 です。',
      '② 200×15÷100 を計算する',
      '③ 単位は g です。',
    ],
    explanation: '200×15÷100＝30 g。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b4-q03',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '【仮】水80gに砂糖20gを溶かした砂糖水の質量パーセント濃度は何%ですか。',
    answer: 20,
    tolerance: 0.1,
    unit: '%',
    hints: [
      '① 溶液全体の質量を求めます（80 ＋ 20 ＝ 100g）。',
      '② 砂糖の質量 ÷ 砂糖水全体の質量 × 100 です。',
      '③ 20 ÷ 100 × 100 を計算します。',
    ],
    explanation: '20 ÷ (80 ＋ 20) × 100 ＝ 20% です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b4-q04',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '【仮】水160gに食塩40gを溶かした食塩水の質量パーセント濃度は何%ですか。',
    answer: 20,
    tolerance: 0.1,
    unit: '%',
    hints: [
      '① 食塩水全体の質量は 160 ＋ 40 ＝ 200g です。',
      '② 40 ÷ 200 × 100 を計算しましょう。',
      '③ 約分すると 40/200 ＝ 1/5 ＝ 20% です。',
    ],
    explanation: '40 ÷ (160 ＋ 40) × 100 ＝ 40 ÷ 200 × 100 ＝ 20% です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b4-q05',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '【仮】10%の食塩水300gにふくまれる食塩の質量は何gですか。',
    answer: 30,
    tolerance: 0.1,
    unit: 'g',
    hints: [
      '① 300gの10%を計算します。',
      '② 300 × 0.10（または 300 × 10 ÷ 100）を計算しましょう。',
      '③ 単位は g です。',
    ],
    explanation: '300 × 0.10 ＝ 30 g です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b4-q06',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '【仮】水190gに食塩10gを完全に溶かしたとき、質量パーセント濃度は何%ですか。',
    answer: 5,
    tolerance: 0.1,
    unit: '%',
    hints: [
      '① 溶液の重さは 190 ＋ 10 ＝ 200g です。',
      '② 10 ÷ 200 × 100 を計算します。',
      '③ 10 ÷ 2 ＝ 5 です。',
    ],
    explanation: '10 ÷ (190 ＋ 10) × 100 ＝ 10 ÷ 200 × 100 ＝ 5% です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b4-q07',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '【仮】25%の砂糖水100gにふくまれる砂糖は何gですか。',
    answer: 25,
    tolerance: 0.1,
    unit: 'g',
    hints: [
      '① 100gの25%分です。',
      '② 100 × 25 ÷ 100 を計算しましょう。',
      '③ 砂糖水全体が100gのとき、パーセントの値がそのまま砂糖のグラムになります。',
    ],
    explanation:
      '100 × 0.25 ＝ 25 g です。全体が100gのときはパーセントがそのまま溶質の質量になります。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b4-q08',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '【仮】水75gに食塩25gを溶かした食塩水の質量パーセント濃度は何%ですか。',
    answer: 25,
    tolerance: 0.1,
    unit: '%',
    hints: [
      '① 食塩水全体の質量は 75 ＋ 25 ＝ 100g です。',
      '② 25 ÷ 100 × 100 を計算しましょう。',
      '③ 答えは整数になります。',
    ],
    explanation: '25 ÷ (75 ＋ 25) × 100 ＝ 25 ÷ 100 × 100 ＝ 25% です。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b4-q09',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question: '【仮】8%の食塩水250gをつくるとき、必要な水は何gですか。',
    answer: 230,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① まず含まれる食塩の質量を計算します：250 × 8 ÷ 100 ＝ 20g。',
      '② 食塩水全体の質量（250g）から食塩の質量（20g）を引きます。',
      '③ 250 − 20 を計算しましょう。',
    ],
    explanation:
      '食塩の質量は 250 × 0.08 ＝ 20g です。したがって水の質量は 250 − 20 ＝ 230g となります。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b4-q10',
    badgeId: 'sci-g1-substance-b4',
    type: 'number',
    question:
      '【仮】食塩50gを完全に溶かして質量パーセント濃度20%の食塩水を作りたいとき、食塩水全体の質量は何gになりますか。',
    answer: 250,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 食塩水全体 × 0.20 ＝ 50g という関係です。',
      '② 食塩水全体 ＝ 50 ÷ 0.20 を計算してみましょう。',
      '③ 50 ÷ 0.20 ＝ 500 ÷ 2 です。',
    ],
    explanation: '50 ÷ (20 ÷ 100) ＝ 250 g です。',
    sample: true,
  },

  // ==========================================
  // バッジ 5: 溶解度曲線を読める (sci-g1-substance-b5, 発展)
  // ==========================================
  {
    id: 'sci-g1-substance-b5-q01',
    badgeId: 'sci-g1-substance-b5',
    type: 'number',
    question:
      '60℃の水100gに硝酸カリウム80gをすべて溶かしました。この水溶液を20℃まで冷やすと、何gの結晶が出てきますか。',
    answer: 48.4,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 20℃の水100gに溶ける硝酸カリウムは何gか、表で読む',
      '② 溶かした量から、20℃で溶けている量を引く',
      '③ 80−31.6 を計算する',
    ],
    figure: { type: 'solubility_chart_and_table' },
    explanation:
      '20℃では31.6gまでしか溶けないので、80−31.6＝48.4gが結晶として出てくる。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b5-q02',
    badgeId: 'sci-g1-substance-b5',
    type: 'twostep',
    question:
      '水溶液を冷やして結晶を取り出す方法が向いていないのはどちらですか。',
    choices: ['塩化ナトリウム', '硝酸カリウム'],
    answer: '塩化ナトリウム',
    reasons: [
      { id: 'b5-q02-r1', text: '温度が変わっても、溶解度がほとんど変わらないから' },
      { id: 'b5-q02-r2', text: '水に溶ける量が少ないから' },
      { id: 'b5-q02-r3', text: '冷やすと水溶液が固まってしまうから' },
    ],
    reasonAnswer: 'b5-q02-r1',
    reasonFeedback: {
      'b5-q02-r1': '正解！温度が変わっても溶解度がほとんど変わらない物質は、冷やす方法に向いていません。',
      'b5-q02-r2':
        '塩化ナトリウムは20℃では硝酸カリウムより多く溶ける。問題は量ではなく、温度による変化の小ささ',
      'b5-q02-r3': '冷やしても水溶液全体が固まるわけではない',
    },
    figure: { type: 'solubility_chart_and_table' },
    explanation:
      '塩化ナトリウムは温度が変わっても溶解度がほとんど変わらないため、冷却による再結晶に向いていません（水を蒸発させて取り出します）。',
    sample: false,
  },
  {
    id: 'sci-g1-substance-b5-q03',
    badgeId: 'sci-g1-substance-b5',
    type: 'number',
    question:
      '【仮】40℃の水100gに硝酸カリウムは何gまで溶けますか。表やグラフから読み取りなさい。',
    answer: 63.9,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 表の「40℃」の行の「硝酸カリウム」の値を確認します。',
      '② グラフの40℃の縦軸を読み取ります。',
      '③ 小数第1位まで入力しましょう。',
    ],
    figure: { type: 'solubility_chart_and_table' },
    explanation:
      '表より、40℃の水100gには硝酸カリウムが最大63.9gまで溶けます。この限度の量を溶解度といいます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b5-q04',
    badgeId: 'sci-g1-substance-b5',
    type: 'number',
    question:
      '【仮】80℃の水100gに硝酸カリウム150gをすべて溶かしました。この水溶液を40℃まで冷やすと、何gの結晶が出てきますか。',
    answer: 86.1,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 40℃の水100gに溶ける硝酸カリウムは63.9gです。',
      '② 最初に入れた150gから、40℃で溶けていられる63.9gを引きます。',
      '③ 150 − 63.9 を計算しましょう。',
    ],
    figure: { type: 'solubility_chart_and_table' },
    explanation:
      '40℃の水100gには63.9gまでしか溶けないため、150 − 63.9 ＝ 86.1g の結晶が析出します。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b5-q05',
    badgeId: 'sci-g1-substance-b5',
    type: 'twostep',
    question:
      '【仮】60℃の水100gに硝酸カリウム100gを溶かしました。この水溶液は飽和水溶液ですか。',
    choices: ['飽和していない', '飽和している'],
    answer: '飽和していない',
    reasons: [
      {
        id: 'b5-q05-r1',
        text: '60℃の水100gには硝酸カリウムが109.2gまで溶けるので、まだ溶ける余裕があるから',
      },
      { id: 'b5-q05-r2', text: '100g以上溶かさないと飽和とは呼ばないから' },
      { id: 'b5-q05-r3', text: '硝酸カリウムはどれだけでも溶けるから' },
    ],
    reasonAnswer: 'b5-q05-r1',
    reasonFeedback: {
      'b5-q05-r1':
        '正解！60℃の溶解度は109.2gなので、100g溶かした状態ではあと9.2g溶かす余裕があります。',
      'b5-q05-r2': '飽和はその温度での溶解度いっぱいまで溶けた状態のことです。',
      'b5-q05-r3': 'どんな物質でも温度ごとに溶ける限度（溶解度）があります。',
    },
    figure: { type: 'solubility_chart_and_table' },
    explanation:
      '60℃の水100gに対する硝酸カリウムの溶解度は109.2gです。100gしか溶かしていないため、まだ飽和していません。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b5-q06',
    badgeId: 'sci-g1-substance-b5',
    type: 'number',
    question:
      '【仮】20℃の水100gに塩化ナトリウムを溶かして飽和水溶液にしました。溶けている塩化ナトリウムは何gですか。',
    answer: 35.8,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 表の20℃における塩化ナトリウムの溶解度を読み取ります。',
      '② 飽和水溶液とは、限度まで溶かした水溶液のことです。',
      '③ 20℃の値を確認しましょう。',
    ],
    figure: { type: 'solubility_chart_and_table' },
    explanation: '表より、20℃の水100gに溶ける塩化ナトリウムの限度（溶解度）は35.8gです。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b5-q07',
    badgeId: 'sci-g1-substance-b5',
    type: 'twostep',
    question:
      '【仮】塩化ナトリウムの水溶液から結晶を取り出すには、冷やすのと水を蒸発させるのと、どちらの方法が適していますか。',
    choices: ['水を蒸発させる', '冷やす'],
    answer: '水を蒸発させる',
    reasons: [
      {
        id: 'b5-q07-r1',
        text: '塩化ナトリウムは温度による溶解度の差が小さく、冷やしても結晶がほとんど出てこないから',
      },
      { id: 'b5-q07-r2', text: '塩化ナトリウムは加熱すると爆発するから' },
      { id: 'b5-q07-r3', text: '冷やすと水が先に蒸発してしまうから' },
    ],
    reasonAnswer: 'b5-q07-r1',
    reasonFeedback: {
      'b5-q07-r1': '正解！温度による溶解度差が小さい物質は、溶媒（水）を蒸発させて結晶を取り出します。',
      'b5-q07-r2': '塩化ナトリウム（食塩）は安全な物質で爆発しません。',
      'b5-q07-r3': '冷やすと蒸発速度は遅くなります。',
    },
    figure: { type: 'solubility_chart_and_table' },
    explanation:
      '塩化ナトリウムは温度が上がっても溶解度があまり増えないため、冷却法では結晶がほとんど取れません。そのため水を蒸発させて取り出します。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b5-q08',
    badgeId: 'sci-g1-substance-b5',
    type: 'number',
    question:
      '【仮】60℃の水100gに硝酸カリウムを限界まで溶かした飽和水溶液があります。これを20℃まで冷やすと、何gの結晶が出てきますか。',
    answer: 77.6,
    tolerance: 0.5,
    unit: 'g',
    hints: [
      '① 60℃で溶けている限界の量は 109.2g です。',
      '② 20℃で溶けていられる限界の量は 31.6g です。',
      '③ 109.2 − 31.6 を計算しましょう。',
    ],
    figure: { type: 'solubility_chart_and_table' },
    explanation: '109.2 − 31.6 ＝ 77.6 g の結晶が析出します。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b5-q09',
    badgeId: 'sci-g1-substance-b5',
    type: 'choice',
    question: '【仮】物質が水にこれ以上溶けきれなくなった状態の水溶液を何といいますか。',
    choices: ['飽和水溶液', '限界水溶液', '過濃水溶液', '純水溶液'],
    answer: '飽和水溶液',
    explanation:
      'ある温度で限度まで溶質が溶けている水溶液を「飽和水溶液」といい、溶ける限度の質量を「溶解度」といいます。',
    sample: true,
  },
  {
    id: 'sci-g1-substance-b5-q10',
    badgeId: 'sci-g1-substance-b5',
    type: 'twostep',
    question: '【仮】水に溶かした物質を、再び結晶として取り出す操作を何といいますか。',
    choices: ['再結晶', 'ろ過', '蒸留'],
    answer: '再結晶',
    reasons: [
      {
        id: 'b5-q10-r1',
        text: '温度による溶解度の差や蒸発を利用して、純粋な結晶を再び得る操作だから',
      },
      { id: 'b5-q10-r2', text: '液体を気体にして分ける操作だから' },
      { id: 'b5-q10-r3', text: '沈殿した固体を網でこし分ける操作だから' },
    ],
    reasonAnswer: 'b5-q10-r1',
    reasonFeedback: {
      'b5-q10-r1': '正解！一度溶かしてから再び結晶として取り出すので「再結晶」と呼びます。',
      'b5-q10-r2': 'それは「蒸留」の説明です。',
      'b5-q10-r3': 'それは「ろ過」の説明です。',
    },
    explanation:
      '固体を一度水に溶かし、冷却や蒸発によって再び結晶として取り出す操作を「再結晶」と呼びます。',
    sample: true,
  },

  // ==========================================
  // 国語：言葉のきまり：単語の類別 (jpn-g1-wordclass)
  // ==========================================
  // --- b1: 文節に区切れる (◯必須) ---
  {
    id: 'jpn-g1-wordclass-b1-q01',
    badgeId: 'jpn-g1-wordclass-b1',
    type: 'choice',
    question: '「庭に白い花が咲いた。」を文節に区切ったものはどれですか。',
    choices: [
      '庭に／白い／花が／咲いた。',
      '庭／に／白い／花／が／咲い／た。',
      '庭に白い／花が咲いた。',
      '庭に／白い花が／咲いた。',
    ],
    answer: '庭に／白い／花が／咲いた。',
    explanation:
      '「ネ」を入れて自然に区切れるところが文節の切れ目です。「庭にネ／白いネ／花がネ／咲いたネ」と4つに区切れます。',
    sample: false,
  },
  {
    id: 'jpn-g1-wordclass-b1-q02',
    badgeId: 'jpn-g1-wordclass-b1',
    type: 'number',
    question: '「弟は毎朝早く起きる。」はいくつの文節に分けられますか。',
    answer: 4,
    tolerance: 0,
    unit: '文節',
    hints: [
      '①「ネ」を入れて読んでみる',
      '② 弟はネ／毎朝ネ／早くネ／起きるネ',
      '③ 区切りの数を数える',
    ],
    explanation:
      '「弟は／毎朝／早く／起きる」の4文節に分けられます。',
    sample: false,
  },
  {
    id: 'jpn-g1-wordclass-b1-q03',
    badgeId: 'jpn-g1-wordclass-b1',
    type: 'choice',
    question: '【仮】「雨が静かに降っている。」を文節に区切ったものはどれですか。',
    choices: [
      '雨が／静かに／降って／いる。',
      '雨／が／静かに／降って／いる。',
      '雨が静かに／降っている。',
      '雨が／静かに降って／いる。',
    ],
    answer: '雨が／静かに／降って／いる。',
    explanation:
      '「雨がネ／静かにネ／降ってネ／いるネ」と区切ることができます（4文節）。',
    sample: true,
  },
  {
    id: 'jpn-g1-wordclass-b1-q04',
    badgeId: 'jpn-g1-wordclass-b1',
    type: 'number',
    question: '【仮】「空が高く澄みわたる。」はいくつの文節に分けられますか。',
    answer: 3,
    tolerance: 0,
    unit: '文節',
    hints: [
      '①「ネ」や「サ」を入れて区切る',
      '② 空がネ／高くネ／澄みわたるネ',
      '③ 区切りの数を数える',
    ],
    explanation: '「空が／高く／澄みわたる」の3文節です。',
    sample: true,
  },
  {
    id: 'jpn-g1-wordclass-b1-q05',
    badgeId: 'jpn-g1-wordclass-b1',
    type: 'choice',
    question: '【仮】「青い海を船が進む。」の文節の数として正しいものはどれですか。',
    choices: ['4文節', '3文節', '5文節', '6文節'],
    answer: '4文節',
    explanation:
      '「青いネ／海をネ／船がネ／進むネ」で4文節になります。',
    sample: true,
  },

  // --- b2: 自立語と付属語を見分けられる (◯必須) ---
  {
    id: 'jpn-g1-wordclass-b2-q01',
    badgeId: 'jpn-g1-wordclass-b2',
    type: 'choice',
    question: '「花が咲く。」の単語のうち、付属語はどれですか。',
    choices: ['花', 'が', '咲く'],
    answer: 'が',
    explanation:
      '付属語は、それだけでは文節を作れず、自立語のあとについて使われる単語（助詞・助動詞）。「が」は助詞です。',
    sample: false,
  },
  {
    id: 'jpn-g1-wordclass-b2-q02',
    badgeId: 'jpn-g1-wordclass-b2',
    type: 'twostep',
    question: '「本を読む。」の「を」は、自立語と付属語のどちらですか。',
    choices: ['自立語', '付属語'],
    answer: '付属語',
    reasons: [
      {
        id: 'j-b2-q02-r1',
        text: 'それだけでは文節を作れず、自立語のあとについて使われるから',
      },
      { id: 'j-b2-q02-r2', text: '一文字の短い言葉だから' },
      { id: 'j-b2-q02-r3', text: '意味がわかりにくい言葉だから' },
    ],
    reasonAnswer: 'j-b2-q02-r1',
    reasonFeedback: {
      'j-b2-q02-r1': '正解！単独で文節を作れない単語が付属語です。',
      'j-b2-q02-r2':
        '長さでは決まらない。「木」「目」は一文字でも自立語',
      'j-b2-q02-r3':
        '意味のわかりやすさでは決まらない。文節を作れるかどうかで見分ける',
    },
    explanation:
      '「を」は助詞であり、自立語のあとにくっついて使われる付属語です。',
    sample: false,
  },
  {
    id: 'jpn-g1-wordclass-b2-q03',
    badgeId: 'jpn-g1-wordclass-b2',
    type: 'choice',
    question: '【仮】「空を見上げた。」の中で付属語はどれですか。',
    choices: ['空', 'を', '見上げ', 'た'],
    answer: 'を',
    explanation:
      '「を」は格助詞で付属語です。「空」は名詞（自立語）、「見上げ」は動詞（自立語）です。',
    sample: true,
  },
  {
    id: 'jpn-g1-wordclass-b2-q04',
    badgeId: 'jpn-g1-wordclass-b2',
    type: 'twostep',
    question: '【仮】「美しい景色だ。」の「美しい」は、自立語と付属語のどちらですか。',
    choices: ['自立語', '付属語'],
    answer: '自立語',
    reasons: [
      {
        id: 'j-b2-q04-r1',
        text: 'それだけで文節の先頭になり、単独で意味を表すことができるから',
      },
      { id: 'j-b2-q04-r2', text: '言葉の字数が多いから' },
      { id: 'j-b2-q04-r3', text: '文の最初にある言葉はすべて自立語だから' },
    ],
    reasonAnswer: 'j-b2-q04-r1',
    reasonFeedback: {
      'j-b2-q04-r1': '正解！「美しい」は単独で文節を作れる自立語（形容詞）です。',
      'j-b2-q04-r2': '文字数で自立語か付属語かは決まりません。',
      'j-b2-q04-r3':
        '文中の位置ではなく、単独で文節を作れるかどうかで判断します。',
    },
    explanation:
      '「美しい」はそれだけで文節の頭になれる自立語（形容詞）です。',
    sample: true,
  },
  {
    id: 'jpn-g1-wordclass-b2-q05',
    badgeId: 'jpn-g1-wordclass-b2',
    type: 'choice',
    question: '【仮】次の単語のうち、自立語はどれですか。',
    choices: ['山', 'は', 'から', 'より'],
    answer: '山',
    explanation:
      '「山」は名詞で自立語です。「は」「から」「より」は助詞で付属語です。',
    sample: true,
  },

  // --- b3: 品詞を見分けられる ---
  {
    id: 'jpn-g1-wordclass-b3-q01',
    badgeId: 'jpn-g1-wordclass-b3',
    type: 'twostep',
    question: '「静かな部屋」の「静かな」の品詞は何ですか。',
    choices: ['形容詞', '形容動詞', '動詞', '副詞'],
    answer: '形容動詞',
    reasons: [
      {
        id: 'j-b3-q01-r1',
        text: '言い切りの形が「静かだ」と「だ」で終わるから',
      },
      { id: 'j-b3-q01-r2', text: '物事の様子を表すから' },
      { id: 'j-b3-q01-r3', text: '物の名前を表すから' },
    ],
    reasonAnswer: 'j-b3-q01-r1',
    reasonFeedback: {
      'j-b3-q01-r1':
        '正解！言い切りが「だ」で終わる用言が形容動詞です。',
      'j-b3-q01-r2':
        '形容詞も様子を表す。見分ける手がかりは言い切りの形（形容詞は「い」、形容動詞は「だ」）',
      'j-b3-q01-r3': '物の名前を表すのは名詞',
    },
    explanation:
      '「静かな」の基本形（言い切り）は「静かだ」で、「だ」で終わる自立語なので形容動詞です。',
    sample: false,
  },
  {
    id: 'jpn-g1-wordclass-b3-q02',
    badgeId: 'jpn-g1-wordclass-b3',
    type: 'choice',
    question: '「ゆっくり歩く」の「ゆっくり」の品詞は何ですか。',
    choices: ['副詞', '形容詞', '形容動詞', '連体詞'],
    answer: '副詞',
    explanation:
      '活用しない自立語で、主に用言（ここでは「歩く」）をくわしくする言葉は副詞。',
    sample: false,
  },
  {
    id: 'jpn-g1-wordclass-b3-q03',
    badgeId: 'jpn-g1-wordclass-b3',
    type: 'twostep',
    question: '【仮】「高い山」の「高い」の品詞は何ですか。',
    choices: ['形容詞', '形容動詞', '名詞', '動詞'],
    answer: '形容詞',
    reasons: [
      {
        id: 'j-b3-q03-r1',
        text: '言い切りの形が「高い」と「い」で終わる自立語だから',
      },
      { id: 'j-b3-q03-r2', text: '「高い」は物の名前だから' },
      { id: 'j-b3-q03-r3', text: '後ろに名詞が続いているから' },
    ],
    reasonAnswer: 'j-b3-q03-r1',
    reasonFeedback: {
      'j-b3-q03-r1': '正解！言い切りの形が「い」で終わる用言は形容詞です。',
      'j-b3-q03-r2': '物の名前を表すのは名詞です。「高い」は性質や状態を表します。',
      'j-b3-q03-r3':
        '連体詞や名詞なども後ろに名詞が続きます。品詞は言い切りの形で見分けます。',
    },
    explanation:
      '「高い」は性質や状態を表し、言い切りが「い」で終わるので形容詞です。',
    sample: true,
  },
  {
    id: 'jpn-g1-wordclass-b3-q04',
    badgeId: 'jpn-g1-wordclass-b3',
    type: 'choice',
    question: '【仮】「鳥が飛ぶ。」の「飛ぶ」の品詞は何ですか。',
    choices: ['動詞', '形容詞', '名詞', '助動詞'],
    answer: '動詞',
    explanation:
      '「飛ぶ」は動作を表し、言い切りがウ段の音で終わる活用する自立語なので動詞です。',
    sample: true,
  },
  {
    id: 'jpn-g1-wordclass-b3-q05',
    badgeId: 'jpn-g1-wordclass-b3',
    type: 'choice',
    question:
      '【仮】活用しない自立語で、主に体言（名詞）だけを修飾する言葉（例：「大きな」「あらゆる」）を何といいますか。',
    choices: ['連体詞', '副詞', '接続詞', '感動詞'],
    answer: '連体詞',
    explanation:
      '連体詞は活用がなく、体言（名詞）を直接修飾する自立語です。',
    sample: true,
  },

  // ==========================================
  // 社会：世界と日本の地域構成 (soc-g1-world)
  // ==========================================
  // --- b1: 大陸と海洋がわかる (◯必須) ---
  {
    id: 'soc-g1-world-b1-q01',
    badgeId: 'soc-g1-world-b1',
    type: 'choice',
    question: '六大陸のうち、面積がいちばん大きい大陸はどれですか。',
    choices: [
      'ユーラシア大陸',
      'アフリカ大陸',
      '北アメリカ大陸',
      '南アメリカ大陸',
    ],
    answer: 'ユーラシア大陸',
    explanation:
      'ユーラシア大陸は、ヨーロッパとアジアをふくむ、いちばん大きな大陸。',
    sample: false,
  },
  {
    id: 'soc-g1-world-b1-q02',
    badgeId: 'soc-g1-world-b1',
    type: 'choice',
    question: '三大洋に入らないものはどれですか。',
    choices: ['太平洋', '大西洋', 'インド洋', '北極海'],
    answer: '北極海',
    explanation: '三大洋は太平洋・大西洋・インド洋。北極海は三大洋に含まれません。',
    sample: false,
  },
  {
    id: 'soc-g1-world-b1-q03',
    badgeId: 'soc-g1-world-b1',
    type: 'choice',
    question: '【仮】六大陸のうち、面積がいちばん小さい大陸はどれですか。',
    choices: [
      'オーストラリア大陸',
      '南アメリカ大陸',
      'アフリカ大陸',
      '南極大陸',
    ],
    answer: 'オーストラリア大陸',
    explanation:
      '六大陸の中で面積が最も小さいのはオーストラリア大陸です。',
    sample: true,
  },
  {
    id: 'soc-g1-world-b1-q04',
    badgeId: 'soc-g1-world-b1',
    type: 'choice',
    question: '【仮】三大洋の中で、最も面積が広い海洋はどれですか。',
    choices: ['太平洋', '大西洋', 'インド洋', '地中海'],
    answer: '太平洋',
    explanation:
      '太平洋は全海洋面積の約半分を占める地球上で最大の海洋です。',
    sample: true,
  },
  {
    id: 'soc-g1-world-b1-q05',
    badgeId: 'soc-g1-world-b1',
    type: 'choice',
    question:
      '【仮】地球の表面積のうち、海洋と陸地の比率としておよそ正しいものはどれですか。',
    choices: ['海7：陸3', '海5：陸5', '海3：陸7', '海9：陸1'],
    answer: '海7：陸3',
    explanation:
      '地球の表面積の約71%が海洋、約29%が陸地であり、およそ「海7：陸3」です。',
    sample: true,
  },

  // --- b2: 緯度と経度で位置を表せる (◯必須) ---
  {
    id: 'soc-g1-world-b2-q01',
    badgeId: 'soc-g1-world-b2',
    type: 'choice',
    question: '緯度0度の線を何といいますか。',
    choices: ['赤道', '本初子午線', '日付変更線', '北回帰線'],
    answer: '赤道',
    explanation:
      '緯度0度の線が赤道。経度0度の線は本初子午線（ロンドンを通る）。',
    sample: false,
  },
  {
    id: 'soc-g1-world-b2-q02',
    badgeId: 'soc-g1-world-b2',
    type: 'number',
    question:
      '日本の標準時子午線（兵庫県明石市を通る）は東経何度ですか。',
    answer: 135,
    tolerance: 0,
    unit: '度',
    hints: [
      '① 日本の時刻の基準になっている経線',
      '② 兵庫県明石市を通る',
      '③ 15の倍数になっている',
    ],
    explanation:
      '東経135度。日本の時刻はこの経線を基準にしている。',
    sample: false,
  },
  {
    id: 'soc-g1-world-b2-q03',
    badgeId: 'soc-g1-world-b2',
    type: 'choice',
    question:
      '【仮】イギリスの旧グリニッジ天文台を通る、経度0度の基準となる経線を何といいますか。',
    choices: ['本初子午線', '赤道', '日付変更線', '白夜線'],
    answer: '本初子午線',
    explanation:
      '経度0度の線を「本初子午線」といい、ここから東経・西経にそれぞれ180度まで測ります。',
    sample: true,
  },
  {
    id: 'soc-g1-world-b2-q04',
    badgeId: 'soc-g1-world-b2',
    type: 'number',
    question: '【仮】北極点や南極点の緯度は何度ですか。',
    answer: 90,
    tolerance: 0,
    unit: '度',
    hints: [
      '① 赤道が0度',
      '② 赤道から極点までの最大の角度',
      '③ 直角と同じ角度です',
    ],
    explanation: '北緯90度が北極点、南緯90度が南極点です。',
    sample: true,
  },
  {
    id: 'soc-g1-world-b2-q05',
    badgeId: 'soc-g1-world-b2',
    type: 'choice',
    question:
      '【仮】ほぼ経度180度の線に沿って引かれている、日付を調整するための線を何といいますか。',
    choices: ['日付変更線', '本初子午線', '赤道', '回帰線'],
    answer: '日付変更線',
    explanation:
      '経度180度付近に引かれている線を日付変更線といいます。東から西へ越えるときは日付を1日進めます。',
    sample: true,
  },

  // --- b3: 時差を計算できる ---
  {
    id: 'soc-g1-world-b3-q01',
    badgeId: 'soc-g1-world-b3',
    type: 'number',
    question:
      '東京（東経135度の時刻を使う）とロンドン（経度0度）の時差は何時間ですか。サマータイムは考えません。',
    answer: 9,
    tolerance: 0,
    unit: '時間',
    hints: [
      '① 地球は24時間で360度回るので、経度15度で1時間の時差',
      '② 経度の差は 135−0＝135度',
      '③ 135÷15 を計算する',
    ],
    explanation: '135÷15＝9時間。',
    sample: false,
  },
  {
    id: 'soc-g1-world-b3-q02',
    badgeId: 'soc-g1-world-b3',
    type: 'twostep',
    question:
      '日本が1月10日午後3時のとき、ロンドンは何日の何時ですか。サマータイムは考えません。',
    choices: ['1月10日午前6時', '1月11日午前0時', '1月10日午後0時'],
    answer: '1月10日午前6時',
    reasons: [
      {
        id: 's-b3-q02-r1',
        text: 'ロンドンは日本より西にあり、時刻が9時間おくれているから',
      },
      { id: 's-b3-q02-r2', text: 'ロンドンのほうが時刻が9時間進んでいるから' },
      { id: 's-b3-q02-r3', text: '時差は12時間だから' },
    ],
    reasonAnswer: 's-b3-q02-r1',
    reasonFeedback: {
      's-b3-q02-r1': '正解！西にある地域は東にある地域より時刻が遅れます。',
      's-b3-q02-r2':
        '東にあるほど時刻は進む。ロンドンは日本より西なので、おくれている',
      's-b3-q02-r3': '時差は 135 ÷ 15 ＝ 9時間です。',
    },
    explanation:
      '日本（東経135度）とロンドン（0度）の時差は9時間。ロンドンは日本より西にあるため、午後3時の9時間前で午前6時です。',
    sample: false,
  },
  {
    id: 'soc-g1-world-b3-q03',
    badgeId: 'soc-g1-world-b3',
    type: 'number',
    question: '【仮】地球は1時間あたり経度何度自転しますか。',
    answer: 15,
    tolerance: 0,
    unit: '度',
    hints: [
      '① 地球1周は360度',
      '② 1日は24時間',
      '③ 360 ÷ 24 を計算する',
    ],
    explanation: '360° ÷ 24時間 ＝ 15°。したがって経度15度ごとに1時間の時差が生じます。',
    sample: true,
  },
  {
    id: 'soc-g1-world-b3-q04',
    badgeId: 'soc-g1-world-b3',
    type: 'number',
    question: '【仮】東経135度の日本と、東経90度の都市との時差は何時間ですか。',
    answer: 3,
    tolerance: 0,
    unit: '時間',
    hints: [
      '① 経度の差を計算（135 − 90 ＝ 45度）',
      '② 45 ÷ 15 を計算する',
      '③ 単位は時間',
    ],
    explanation: '(135 − 90) ÷ 15 ＝ 45 ÷ 15 ＝ 3時間です。',
    sample: true,
  },
  {
    id: 'soc-g1-world-b3-q05',
    badgeId: 'soc-g1-world-b3',
    type: 'twostep',
    question:
      '【仮】世界で最も早く新しい1日が始まる地域は、東経側と西経側のどちらですか。',
    choices: [
      '日付変更線のすぐ西側（東経180度付近）',
      '本初子午線上（経度0度）',
      '日付変更線のすぐ東側（西経180度付近）',
    ],
    answer: '日付変更線のすぐ西側（東経180度付近）',
    reasons: [
      {
        id: 's-b3-q05-r1',
        text: '地球は西から東へ自転しており、東にある地域ほど日の出や時刻が早いから',
      },
      { id: 's-b3-q05-r2', text: 'ロンドンが世界の時刻の中心だから' },
      { id: 's-b3-q05-r3', text: '赤道に近いほど自転スピードが速いから' },
    ],
    reasonAnswer: 's-b3-q05-r1',
    reasonFeedback: {
      's-b3-q05-r1': '正解！日付変更線のすぐ西側から地球上で最も早く新しい日が始まります。',
      's-b3-q05-r2':
        '本初子午線は経度の基準ですが、1日の始まりは日付変更線からです。',
      's-b3-q05-r3':
        '自転速度ではなく、日付変更線の西側から新しい日付がスタートする決まりです。',
    },
    explanation:
      '日付変更線のすぐ西側（キリバスなど）が世界で最も早く新しい1日を迎えます。',
    sample: true,
  },

  // ==========================================
  // 数学：正の数と負の数 (math-g1-integers)
  // ==========================================
  // --- b1: 大小と絶対値がわかる (◯必須) ---
  {
    id: 'math-g1-integers-b1-q01',
    badgeId: 'math-g1-integers-b1',
    type: 'number',
    question: '−7 の絶対値はいくつですか。',
    answer: 7,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 絶対値は、数直線上で0からの距離',
      '② −7は0から7はなれている',
    ],
    explanation: '−7 の絶対値は 7。符号をとった大きさです。',
    sample: false,
  },
  {
    id: 'math-g1-integers-b1-q02',
    badgeId: 'math-g1-integers-b1',
    type: 'twostep',
    question: '−5 と −2 では、どちらが大きいですか。',
    choices: ['−5', '−2'],
    answer: '−2',
    reasons: [
      { id: 'm-b1-q02-r1', text: '数直線で右にあるほうが大きいから' },
      { id: 'm-b1-q02-r2', text: '5は2より大きいから' },
      { id: 'm-b1-q02-r3', text: 'マイナスがついた数はどれも同じ大きさだから' },
    ],
    reasonAnswer: 'm-b1-q02-r1',
    reasonFeedback: {
      'm-b1-q02-r1': '正解！数直線上で右にある数ほど大きくなります。',
      'm-b1-q02-r2': '負の数は、絶対値が大きいほど小さくなります。',
      'm-b1-q02-r3':
        '負の数にも大小がある。数直線で右にあるほうが大きい',
    },
    explanation:
      '負の数は数直線上で右にある数（絶対値が小さい数）ほど大きいため、−2 のほうが大きいです。',
    sample: false,
  },
  {
    id: 'math-g1-integers-b1-q03',
    badgeId: 'math-g1-integers-b1',
    type: 'number',
    question: '【仮】＋12 の絶対値はいくつですか。',
    answer: 12,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 絶対値は0からの距離',
      '② 符号をとった大きさ',
    ],
    explanation: '＋12 の絶対値は 12 です。',
    sample: true,
  },
  {
    id: 'math-g1-integers-b1-q04',
    badgeId: 'math-g1-integers-b1',
    type: 'choice',
    question: '【仮】次の数の中で、最も小さい数はどれですか。',
    choices: ['−8', '−3', '0', '＋2'],
    answer: '−8',
    explanation:
      '負の数では絶対値が大きいほど小さくなります。数直線で最も左にあるのは −8 です。',
    sample: true,
  },
  {
    id: 'math-g1-integers-b1-q05',
    badgeId: 'math-g1-integers-b1',
    type: 'number',
    question: '【仮】絶対値が 4 である正の数はいくつですか。',
    answer: 4,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 絶対値が4である数は ＋4 と −4 の2つあります',
      '② そのうち「正の数」を答えます',
    ],
    explanation: '絶対値が4である数は ＋4 と −4 です。正の数は 4 です。',
    sample: true,
  },

  // --- b2: 加法と減法ができる (◯必須) ---
  {
    id: 'math-g1-integers-b2-q01',
    badgeId: 'math-g1-integers-b2',
    type: 'number',
    question: '(−7)＋(＋4) を計算しなさい。',
    answer: -3,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 符号がちがう2つの数の和は、絶対値の差に、絶対値の大きいほうの符号をつける',
      '② 7−4＝3',
      '③ −7のほうが絶対値が大きいので、符号は−',
    ],
    explanation: '(−7)＋(＋4)＝−3。',
    sample: false,
  },
  {
    id: 'math-g1-integers-b2-q02',
    badgeId: 'math-g1-integers-b2',
    type: 'number',
    question: '(−3)−(−8) を計算しなさい。',
    answer: 5,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① ひく数の符号を変えて、たし算になおす',
      '② (−3)＋(＋8)',
      '③ 絶対値の差 8−3＝5、符号は＋',
    ],
    explanation: '(−3)−(−8)＝(−3)＋(＋8)＝5。',
    sample: false,
  },
  {
    id: 'math-g1-integers-b2-q03',
    badgeId: 'math-g1-integers-b2',
    type: 'number',
    question: '【仮】(−5)＋(−9) を計算しなさい。',
    answer: -14,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 同じ符号の加法は、絶対値の和に共通の符号をつける',
      '② 5＋9＝14',
      '③ 符号は−',
    ],
    explanation: '(−5)＋(−9)＝−(5＋9)＝−14。',
    sample: true,
  },
  {
    id: 'math-g1-integers-b2-q04',
    badgeId: 'math-g1-integers-b2',
    type: 'number',
    question: '【仮】(＋6)−(＋11) を計算しなさい。',
    answer: -5,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① ひき算をたし算になおす：(＋6)＋(−11)',
      '② 絶対値の差 11−6＝5',
      '③ 符号は−',
    ],
    explanation: '(＋6)−(＋11)＝6 − 11 ＝ −5。',
    sample: true,
  },
  {
    id: 'math-g1-integers-b2-q05',
    badgeId: 'math-g1-integers-b2',
    type: 'number',
    question: '【仮】(−12)＋(＋12) を計算しなさい。',
    answer: 0,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 互いに符号が逆で絶対値が等しい数の和',
      '② 数直線上で行って戻る',
    ],
    explanation: '(−12)＋(＋12)＝0。',
    sample: true,
  },

  // --- b3: 乗法と除法ができる (◯必須) ---
  {
    id: 'math-g1-integers-b3-q01',
    badgeId: 'math-g1-integers-b3',
    type: 'number',
    question: '(−6)×(−4) を計算しなさい。',
    answer: 24,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 同じ符号の2つの数の積は正',
      '② 6×4 を計算する',
    ],
    explanation: '(−6)×(−4)＝24。同符号の積はプラスになります。',
    sample: false,
  },
  {
    id: 'math-g1-integers-b3-q02',
    badgeId: 'math-g1-integers-b3',
    type: 'number',
    question: '(−18)÷(＋3) を計算しなさい。',
    answer: -6,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① ちがう符号の2つの数の商は負',
      '② 18÷3 を計算する',
    ],
    explanation: '(−18)÷(＋3)＝−6。異符号の商はマイナスになります。',
    sample: false,
  },
  {
    id: 'math-g1-integers-b3-q03',
    badgeId: 'math-g1-integers-b3',
    type: 'twostep',
    question:
      '(−2)×(−3)×(−1) の答えの符号は、正と負のどちらですか。',
    choices: ['正', '負'],
    answer: '負',
    reasons: [
      { id: 'm-b3-q03-r1', text: '負の数を3個（奇数個）かけているから' },
      { id: 'm-b3-q03-r2', text: '負の数がふくまれているから' },
      {
        id: 'm-b3-q03-r3',
        text: 'かけ算をすると答えはいつも大きくなるから',
      },
    ],
    reasonAnswer: 'm-b3-q03-r1',
    reasonFeedback: {
      'm-b3-q03-r1': '正解！負の因数が奇数個あるときの積は負になります。',
      'm-b3-q03-r2':
        '負の数が偶数個なら答えは正になる。個数で決まる',
      'm-b3-q03-r3': '符号は、負の数の個数で決まる',
    },
    explanation:
      '負の数を奇数個（3個）かけているため、積の符号は「負」になります。計算結果は −6 です。',
    sample: false,
  },
  {
    id: 'math-g1-integers-b3-q04',
    badgeId: 'math-g1-integers-b3',
    type: 'number',
    question: '【仮】(−8)×(＋5) を計算しなさい。',
    answer: -40,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 異符号の積は負',
      '② 8×5＝40',
      '③ 符号は−',
    ],
    explanation: '(−8)×(＋5)＝−40。',
    sample: true,
  },
  {
    id: 'math-g1-integers-b3-q05',
    badgeId: 'math-g1-integers-b3',
    type: 'number',
    question: '【仮】(−36)÷(−9) を計算しなさい。',
    answer: 4,
    tolerance: 0,
    unit: 'なし',
    hints: [
      '① 同符号の商は正',
      '② 36÷9＝4',
    ],
    explanation: '(−36)÷(−9)＝＋4。',
    sample: true,
  },

  // ==========================================
  // 英語：一般動詞（三人称単数現在） (eng-g1-present)
  // ==========================================
  // --- b1: be動詞と一般動詞を使い分けられる (◯必須) ---
  {
    id: 'eng-g1-present-b1-q01',
    badgeId: 'eng-g1-present-b1',
    type: 'choice',
    question: 'I (   ) a student.',
    choices: ['am', 'is', 'are', 'do'],
    answer: 'am',
    explanation: '主語が I のときの be動詞は am。',
    sample: false,
  },
  {
    id: 'eng-g1-present-b1-q02',
    badgeId: 'eng-g1-present-b1',
    type: 'choice',
    question: 'I (   ) tennis every day.',
    choices: ['play', 'am', 'am play', 'plays'],
    answer: 'play',
    explanation:
      '「〜する」という動作は一般動詞で表す。be動詞と一般動詞はいっしょに使わない（I am play ×）。主語が I なので s はつかない。',
    sample: false,
  },
  {
    id: 'eng-g1-present-b1-q03',
    badgeId: 'eng-g1-present-b1',
    type: 'choice',
    question: '【仮】They (   ) soccer after school.',
    choices: ['play', 'are play', 'plays', 'is'],
    answer: 'play',
    explanation:
      '主語が They（複数）なので一般動詞の原形 play を使います。be動詞と一般動詞を重ねてはいけません。',
    sample: true,
  },
  {
    id: 'eng-g1-present-b1-q04',
    badgeId: 'eng-g1-present-b1',
    type: 'choice',
    question: '【仮】You (   ) a kind teacher.',
    choices: ['are', 'am', 'is', 'do'],
    answer: 'are',
    explanation: '主語が You のときの be動詞は are です。',
    sample: true,
  },
  {
    id: 'eng-g1-present-b1-q05',
    badgeId: 'eng-g1-present-b1',
    type: 'choice',
    question: '【仮】We (   ) in Tokyo.',
    choices: ['live', 'are live', 'lives', 'am'],
    answer: 'live',
    explanation:
      '「住んでいる」という動作・状態を表す一般動詞 live を使います。主語が We（複数）なので s はつきません。',
    sample: true,
  },

  // --- b2: 三単現の s をつけられる (◯必須) ---
  {
    id: 'eng-g1-present-b2-q01',
    badgeId: 'eng-g1-present-b2',
    type: 'twostep',
    question: 'She (   ) soccer every day.',
    choices: ['play', 'plays', 'is play'],
    answer: 'plays',
    reasons: [
      {
        id: 'e-b2-q01-r1',
        text: '主語が3人称単数（I・you 以外の1人・1つ）で、現在の文だから',
      },
      { id: 'e-b2-q01-r2', text: '主語が女の子だから' },
      { id: 'e-b2-q01-r3', text: 'every day があるから' },
    ],
    reasonAnswer: 'e-b2-q01-r1',
    reasonFeedback: {
      'e-b2-q01-r1':
        '正解！主語が三人称単数で現在形の文なので、動詞に s をつけます。',
      'e-b2-q01-r2':
        'He や Ken でも同じ。性別ではなく、3人称単数かどうかで決まる',
      'e-b2-q01-r3':
        '主語が I なら every day があっても play のまま',
    },
    explanation:
      '主語が三人称単数（She）で現在の肯定文なので、動詞 play に s をつけて plays になります。',
    sample: false,
  },
  {
    id: 'eng-g1-present-b2-q02',
    badgeId: 'eng-g1-present-b2',
    type: 'choice',
    question:
      '主語が he の現在の文で、study を使うときの形はどれですか。',
    choices: ['studies', 'studys', 'studyes', 'study'],
    answer: 'studies',
    explanation:
      '〈子音字＋y〉で終わる動詞は、y を i にかえて es をつける。study → studies。',
    sample: false,
  },
  {
    id: 'eng-g1-present-b2-q03',
    badgeId: 'eng-g1-present-b2',
    type: 'choice',
    question: '【仮】Ken (   ) baseball on Sundays.',
    choices: ['plays', 'play', 'is plays', 'playing'],
    answer: 'plays',
    explanation:
      'Ken は三人称単数なので、一般動詞 play に s をつけて plays にします。',
    sample: true,
  },
  {
    id: 'eng-g1-present-b2-q04',
    badgeId: 'eng-g1-present-b2',
    type: 'choice',
    question:
      '【仮】My brother (   ) TV after dinner.（watchの適切な形を選びなさい）',
    choices: ['watches', 'watchs', 'watch', 'is watch'],
    answer: 'watches',
    explanation:
      '-ch, -sh, -s, -x, -o で終わる動詞の三単現は -es をつけます。watch → watches。',
    sample: true,
  },
  {
    id: 'eng-g1-present-b2-q05',
    badgeId: 'eng-g1-present-b2',
    type: 'choice',
    question:
      '【仮】My mother (   ) breakfast every morning.（makeの適切な形を選びなさい）',
    choices: ['makes', 'make', 'is make', 'making'],
    answer: 'makes',
    explanation:
      'My mother は三人称単数なので、動詞 make に s をつけて makes にします。',
    sample: true,
  },

  // --- b3: does を使って疑問文・否定文を作れる ---
  {
    id: 'eng-g1-present-b3-q01',
    badgeId: 'eng-g1-present-b3',
    type: 'choice',
    question: '(   ) Ken like music?',
    choices: ['Do', 'Does', 'Is', 'Are'],
    answer: 'Does',
    explanation:
      '主語が3人称単数の一般動詞の疑問文は Does で始める。',
    sample: false,
  },
  {
    id: 'eng-g1-present-b3-q02',
    badgeId: 'eng-g1-present-b3',
    type: 'twostep',
    question: 'Does Ken (   ) soccer every Sunday?',
    choices: ['play', 'plays', 'playing'],
    answer: 'play',
    reasons: [
      {
        id: 'e-b3-q02-r1',
        text: 'does に「3人称単数・現在」のしるしが入っているので、動詞は元の形（原形）になるから',
      },
      {
        id: 'e-b3-q02-r2',
        text: 'Ken は3人称単数なので s が必要だから',
      },
      { id: 'e-b3-q02-r3', text: '疑問文では ing をつけるから' },
    ],
    reasonAnswer: 'e-b3-q02-r1',
    reasonFeedback: {
      'e-b3-q02-r1': '正解！Does を使った文では、動詞は必ず原形（もとの形）に戻ります。',
      'e-b3-q02-r2': 'does を使ったら、動詞には s をつけない',
      'e-b3-q02-r3': '一般動詞の疑問文では ing はつけない',
    },
    explanation:
      'Does を使った疑問文では、動詞の語尾の s は does に吸収されるため、動詞は原形の play に戻ります。',
    sample: false,
  },
  {
    id: 'eng-g1-present-b3-q03',
    badgeId: 'eng-g1-present-b3',
    type: 'choice',
    question: 'Ken (   ) like natto.（「ケンは納豆が好きではありません」）',
    choices: ["doesn't", "don't", "isn't", 'not'],
    answer: "doesn't",
    explanation:
      '主語が3人称単数の一般動詞の否定文は〈doesn\'t＋動詞の原形〉。',
    sample: false,
  },
  {
    id: 'eng-g1-present-b3-q04',
    badgeId: 'eng-g1-present-b3',
    type: 'choice',
    question: '【仮】(   ) your sister have a dog?',
    choices: ['Does', 'Do', 'Is', 'Are'],
    answer: 'Does',
    explanation:
      'your sister は三人称単数なので、一般動詞 have の疑問文は Does で始めます。',
    sample: true,
  },
  {
    id: 'eng-g1-present-b3-q05',
    badgeId: 'eng-g1-present-b3',
    type: 'choice',
    question: '【仮】She (   ) speak French.',
    choices: ["doesn't", "don't", "isn't", 'not'],
    answer: "doesn't",
    explanation:
      '主語が She（三人称単数）なので、一般動詞の否定文は doesn\'t ＋ 動詞の原形を使います。',
    sample: true,
  },
];
