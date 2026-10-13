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

// 単元とバッジの一覧は docs/badge-catalog.md（学習指導要領にもとづくたたき台）から作っている。
// open: false の単元は「準備中」。問題（questions.ts）を入れてから open: true にする。
// 単元とバッジの一覧は docs/badge-catalog.md（学習指導要領にもとづくたたき台）から作っている。
// open: false の単元は「準備中」。問題（questions.ts）を入れてから open: true にする（中1は全単元に問題あり）。
export const CURRICULUM_DATA: Record<SubjectId, SubjectCurriculum> = {
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
                open: true,
                badges: [
                  {
                    id: 'jpn-g1-kanji-b1',
                    name: '中1で学ぶ常用漢字が読める',
                    required: true,
                  },
                  {
                    id: 'jpn-g1-kanji-b2',
                    name: '小学校で学んだ漢字を、文の中で正しく使い分けられる（同じ読みの漢字から選ぶ）',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g1-vocab',
                name: '語彙',
                ref: '国語 第1学年〔知識及び技能〕⑴ウ',
                open: true,
                badges: [
                  {
                    id: 'jpn-g1-vocab-b1',
                    name: '事象・行為・心情を表す語句の意味がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g1-vocab-b2',
                    name: '語句の辞書的な意味と、文脈上の意味を区別できる',
                    required: false,
                  },
                ],
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
                  {
                    id: 'jpn-g1-wordclass-b4',
                    name: '指示する語句（こそあど言葉）が指す内容がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g1-wordclass-b5',
                    name: '接続する語句の働き（順接・逆接・並立・添加・対比・説明・転換）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g1-expression',
                name: '表現の技法',
                ref: '国語 第1学年〔知識及び技能〕⑴オ',
                open: true,
                badges: [
                  {
                    id: 'jpn-g1-expression-b1',
                    name: '比喩（直喩・隠喩・擬人法）を見分けられる',
                    required: false,
                  },
                  {
                    id: 'jpn-g1-expression-b2',
                    name: '反復・倒置・体言止め・対句を見分けられる',
                    required: false,
                  },
                ],
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
                open: true,
                badges: [
                  {
                    id: 'jpn-g1-info-relation-b1',
                    name: '原因と結果の関係を見分けられる',
                    required: false,
                  },
                  {
                    id: 'jpn-g1-info-relation-b2',
                    name: '意見と根拠を見分けられる',
                    required: false,
                  },
                  {
                    id: 'jpn-g1-info-relation-b3',
                    name: '引用のしかたと出典の示し方がわかる',
                    required: false,
                  },
                ],
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
                ref: '国語 第1学年〔知識及び技能〕⑶ア・イ・ウ',
                open: true,
                badges: [
                  {
                    id: 'jpn-g1-classic-intro-b1',
                    name: '歴史的仮名遣いを現代仮名遣いに直せる',
                    required: true,
                  },
                  {
                    id: 'jpn-g1-classic-intro-b2',
                    name: '返り点（レ点・一二点）にしたがって、漢文を読む順番がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g1-classic-intro-b3',
                    name: '古典作品の種類（物語・随筆・説話など）と代表的な作品がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g1-classic-intro-b4',
                    name: '共通語と方言の役割がわかる',
                    required: false,
                  },
                ],
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
            id: 'jpn-g2-words-usage',
            name: '言葉の特徴や使い方',
            units: [
              {
                id: 'jpn-g2-kanji',
                name: '漢字',
                ref: '国語 第2学年〔知識及び技能〕⑴ウ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-kanji-b1',
                    name: '中2で学ぶ常用漢字が読める',
                    required: true,
                  },
                  {
                    id: 'jpn-g2-kanji-b2',
                    name: '学年別漢字配当表の漢字を、文の中で正しく使える',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g2-vocab',
                name: '語彙',
                ref: '国語 第2学年〔知識及び技能〕⑴エ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-vocab-b1',
                    name: '類義語・対義語がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-vocab-b2',
                    name: '同音異義語・同訓異字を使い分けられる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-vocab-b3',
                    name: '多義語の、文脈に合った意味がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-vocab-b4',
                    name: '抽象的な概念を表す語句の意味がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g2-language',
                name: '言葉の働き',
                ref: '国語 第2学年〔知識及び技能〕⑴ア・イ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-language-b1',
                    name: '話し言葉と書き言葉の特徴のちがいがわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-language-b2',
                    name: '相手の行動を促す言葉の働きがわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g2-verbs',
                name: '文法：用言の活用',
                ref: '国語 第2学年〔知識及び技能〕⑴オ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-verbs-b1',
                    name: '動詞の活用の種類（五段・上一段・下一段・カ変・サ変）を見分けられる',
                    required: true,
                  },
                  {
                    id: 'jpn-g2-verbs-b2',
                    name: '活用形（未然・連用・終止・連体・仮定・命令）を見分けられる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-verbs-b3',
                    name: '形容詞・形容動詞の活用がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g2-particles',
                name: '文法：付属語の働き',
                ref: '国語 第2学年〔知識及び技能〕⑴オ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-particles-b1',
                    name: '助詞の種類（格・接続・副・終）と働きがわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-particles-b2',
                    name: '助動詞の意味を見分けられる（れる・られる、せる・させる、ようだ、らしい など）',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-particles-b3',
                    name: '同じ形の言葉（「ない」「の」「に」など）の品詞を見分けられる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g2-sentence',
                name: '文法：文の成分と構成',
                ref: '国語 第2学年〔知識及び技能〕⑴オ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-sentence-b1',
                    name: '文の成分（主語・述語・修飾語・接続語・独立語）がわかる',
                    required: true,
                  },
                  {
                    id: 'jpn-g2-sentence-b2',
                    name: '主語と述語のねじれや、係り受けの誤りに気づける',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g2-keigo',
                name: '敬語',
                ref: '国語 第2学年〔知識及び技能〕⑴カ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-keigo-b1',
                    name: '尊敬語・謙譲語・丁寧語を見分けられる',
                    required: true,
                  },
                  {
                    id: 'jpn-g2-keigo-b2',
                    name: '場面に合う敬語を選べる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'jpn-g2-info',
            name: '情報の扱い方',
            units: [
              {
                id: 'jpn-g2-info',
                name: '情報と情報の関係',
                ref: '国語 第2学年〔知識及び技能〕⑵ア・イ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-info-b1',
                    name: '意見と根拠、具体と抽象の関係がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-info-b2',
                    name: '情報の関係に合う表し方（図・表・矢印など）を選べる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'jpn-g2-culture',
            name: '我が国の言語文化',
            units: [
              {
                id: 'jpn-g2-classic',
                name: '古典',
                ref: '国語 第2学年〔知識及び技能〕⑶ア・イ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g2-classic-b1',
                    name: '古典によく出る言葉（古語）の意味がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g2-classic-b2',
                    name: '現代語訳や語注を手がかりに、古典の内容がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'jpn-g3-words-usage',
            name: '言葉の特徴や使い方',
            units: [
              {
                id: 'jpn-g3-kanji',
                name: '漢字',
                ref: '国語 第3学年〔知識及び技能〕⑴ア',
                open: false,
                badges: [
                  {
                    id: 'jpn-g3-kanji-b1',
                    name: '中3で学ぶ常用漢字（常用漢字の大体）が読める',
                    required: true,
                  },
                  {
                    id: 'jpn-g3-kanji-b2',
                    name: '文の中の誤った漢字を見つけて直せる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g3-vocab',
                name: '語彙',
                ref: '国語 第3学年〔知識及び技能〕⑴イ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g3-vocab-b1',
                    name: '慣用句・ことわざの意味がわかる',
                    required: true,
                  },
                  {
                    id: 'jpn-g3-vocab-b2',
                    name: '四字熟語の意味と使い方がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g3-vocab-b3',
                    name: '和語・漢語・外来語を見分け、使い分けられる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g3-genre',
                name: '話や文章の種類',
                ref: '国語 第3学年〔知識及び技能〕⑴ウ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g3-genre-b1',
                    name: '文章の種類（説明・論説・報道・随筆など）とその特徴がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'jpn-g3-keigo',
                name: '敬語と言葉遣い',
                ref: '国語 第3学年〔知識及び技能〕⑴エ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g3-keigo-b1',
                    name: '相手や場に合わない言葉遣い（誤った敬語）を直せる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'jpn-g3-info',
            name: '情報の扱い方',
            units: [
              {
                id: 'jpn-g3-info',
                name: '情報の扱い方',
                ref: '国語 第3学年〔知識及び技能〕⑵ア・イ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g3-info-b1',
                    name: '具体と抽象の関係がわかる',
                    required: false,
                  },
                  {
                    id: 'jpn-g3-info-b2',
                    name: '情報の信頼性の確かめ方（発信者・出典・日付・複数の情報の比べ方）がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'jpn-g3-culture',
            name: '我が国の言語文化',
            units: [
              {
                id: 'jpn-g3-classic',
                name: '古典と言葉の変化',
                ref: '国語 第3学年〔知識及び技能〕⑶ア・イ・ウ',
                open: false,
                badges: [
                  {
                    id: 'jpn-g3-classic-b1',
                    name: '和歌の表現の技法（枕詞・掛詞・序詞）を見分けられる',
                    required: false,
                    description: '扱う作品は教科書に合わせる',
                  },
                  {
                    id: 'jpn-g3-classic-b2',
                    name: '古典の一節や故事成語の意味がわかり、場面に合わせて使える',
                    required: false,
                  },
                  {
                    id: 'jpn-g3-classic-b3',
                    name: '時代による言葉の変化や、世代による言葉のちがいがわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
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
                  {
                    id: 'soc-g1-world-b4',
                    name: '主な国の名前と位置がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-b5',
                    name: '日本の位置と領域（領土・領海・排他的経済水域）がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-b6',
                    name: '都道府県の名前・位置と、都道府県庁所在地がわかる',
                    required: true,
                  },
                ],
              },
              {
                id: 'soc-g1-world-life',
                name: '世界各地の人々の生活と環境',
                ref: '社会 地理的分野 B⑴',
                open: true,
                badges: [
                  {
                    id: 'soc-g1-world-life-b1',
                    name: '気候帯（熱帯・乾燥帯・温帯・冷帯・寒帯）の特徴がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g1-world-life-b2',
                    name: '雨温図から気候帯を見分けられる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-life-b3',
                    name: '気候に合わせた衣食住の工夫がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-life-b4',
                    name: '世界の主な宗教と、人々の暮らしとの関わりがわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g1-world-regions',
                name: '世界の諸地域',
                ref: '社会 地理的分野 B⑵',
                open: true,
                badges: [
                  {
                    id: 'soc-g1-world-regions-b1',
                    name: 'アジア州の主な国と地域の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-regions-b2',
                    name: 'ヨーロッパ州の主な国と地域の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-regions-b3',
                    name: 'アフリカ州の主な国と地域の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-regions-b4',
                    name: '北アメリカ州の主な国と地域の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-regions-b5',
                    name: '南アメリカ州の主な国と地域の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-world-regions-b6',
                    name: 'オセアニア州の主な国と地域の特色がわかる',
                    required: false,
                  },
                ],
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
                ref: '社会 歴史的分野 A⑴',
                open: true,
                badges: [
                  {
                    id: 'soc-g1-history-intro-b1',
                    name: '西暦と世紀を換算できる（例：1192年は12世紀）',
                    required: true,
                  },
                  {
                    id: 'soc-g1-history-intro-b2',
                    name: '時代区分（原始・古代・中世・近世・近代・現代）と時代名の順番がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-history-intro-b3',
                    name: '年表から、できごとの前後関係を読み取れる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g1-japan-ancient',
                name: '古代までの日本',
                ref: '社会 歴史的分野 B⑴',
                open: true,
                badges: [
                  {
                    id: 'soc-g1-japan-ancient-b1',
                    name: '世界の古代文明と宗教のおこりがわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-japan-ancient-b2',
                    name: '縄文・弥生・古墳時代の暮らしと、国のでき方がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g1-japan-ancient-b3',
                    name: '律令国家のしくみ（大化の改新・大宝律令・班田収授）がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g1-japan-ancient-b4',
                    name: '奈良・平安時代の政治と、東アジアとの関わりがわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g1-japan-ancient-b5',
                    name: '古代の文化（仏教の伝来・国風文化など）がわかる',
                    required: false,
                  },
                ],
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
            units: [
              {
                id: 'soc-g2-local-survey',
                name: '地域調査の手法',
                ref: '社会 地理的分野 C⑴',
                open: false,
                badges: [
                  {
                    id: 'soc-g2-local-survey-b1',
                    name: '地形図の縮尺から、実際の距離を求められる',
                    required: true,
                  },
                  {
                    id: 'soc-g2-local-survey-b2',
                    name: '地図記号と等高線を読み取れる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-local-survey-b3',
                    name: '調査の方法（野外調査・文献調査）と、目的に合う主題図の選び方がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g2-japan-regions',
                name: '日本の地域的特色と地域区分',
                ref: '社会 地理的分野 C⑵',
                open: false,
                badges: [
                  {
                    id: 'soc-g2-japan-regions-b1',
                    name: '日本の地形（山地・川・平野・海岸）と気候区分の特色がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g2-japan-regions-b2',
                    name: '自然災害と防災の取り組みがわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-regions-b3',
                    name: '日本の人口の特色（少子高齢化・過疎と過密・人口ピラミッド）がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g2-japan-regions-b4',
                    name: '資源・エネルギーと発電の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-regions-b5',
                    name: '農業・工業・商業などの産業の特色と分布がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g2-japan-regions-b6',
                    name: '交通・通信網の特色がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g2-japan-areas',
                name: '日本の諸地域',
                ref: '社会 地理的分野 C⑶',
                open: false,
                badges: [
                  {
                    id: 'soc-g2-japan-areas-b1',
                    name: '九州地方の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-areas-b2',
                    name: '中国・四国地方の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-areas-b3',
                    name: '近畿地方の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-areas-b4',
                    name: '中部地方の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-areas-b5',
                    name: '関東地方の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-areas-b6',
                    name: '東北地方の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-japan-areas-b7',
                    name: '北海道地方の特色がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'soc-g2-hist',
            name: '歴史',
            units: [
              {
                id: 'soc-g2-medieval',
                name: '中世の日本',
                ref: '社会 歴史的分野 B⑵',
                open: false,
                badges: [
                  {
                    id: 'soc-g2-medieval-b1',
                    name: '鎌倉幕府のしくみ（御恩と奉公・執権政治）がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g2-medieval-b2',
                    name: '元寇とその影響がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-medieval-b3',
                    name: '室町幕府と東アジアとの関わり（日明貿易・琉球・アイヌ）がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-medieval-b4',
                    name: '民衆の成長（惣・一揆）と、室町時代の文化がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g2-early-modern',
                name: '近世の日本',
                ref: '社会 歴史的分野 B⑶',
                open: false,
                badges: [
                  {
                    id: 'soc-g2-early-modern-b1',
                    name: 'ヨーロッパ人の来航と、織田・豊臣の統一事業がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-early-modern-b2',
                    name: '江戸幕府のしくみと対外関係（いわゆる鎖国）がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g2-early-modern-b3',
                    name: '産業・交通の発達と町人の文化がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-early-modern-b4',
                    name: '幕府の政治の展開（三大改革など）の流れがわかる',
                    required: true,
                  },
                ],
              },
              {
                id: 'soc-g2-modern',
                name: '近代の日本と世界①',
                ref: '社会 歴史的分野 C⑴ア〜エ',
                open: false,
                badges: [
                  {
                    id: 'soc-g2-modern-b1',
                    name: '欧米の近代革命・産業革命と、アジアへの進出がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-modern-b2',
                    name: '開国と明治維新の諸改革（廃藩置県・学制・徴兵令・地租改正）がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g2-modern-b3',
                    name: '自由民権運動と大日本帝国憲法がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-modern-b4',
                    name: '日清・日露戦争と条約改正の流れがわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g2-modern-b5',
                    name: '日本の産業革命と近代文化がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'soc-g3-hist',
            name: '歴史',
            units: [
              {
                id: 'soc-g3-modern-wars',
                name: '近代の日本と世界②',
                ref: '社会 歴史的分野 C⑴オ・カ',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-modern-wars-b1',
                    name: '第一次世界大戦と、大正時代の民主主義の動きがわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-modern-wars-b2',
                    name: '世界恐慌から第二次世界大戦への流れがわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g3-contemporary',
                name: '現代の日本と世界',
                ref: '社会 歴史的分野 C⑵',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-contemporary-b1',
                    name: '戦後の民主化（日本国憲法の制定など）と冷戦がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-contemporary-b2',
                    name: '高度経済成長とグローバル化する世界がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'soc-g3-civics',
            name: '公民',
            units: [
              {
                id: 'soc-g3-society',
                name: '現代社会と文化の特色',
                ref: '社会 公民的分野 A⑴',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-society-b1',
                    name: '少子高齢化・情報化・グローバル化の特色がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-society-b2',
                    name: '伝統と文化の継承・創造がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g3-framework',
                name: '現代社会を捉える枠組み',
                ref: '社会 公民的分野 A⑵',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-framework-b1',
                    name: '対立と合意、効率と公正の考え方がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-framework-b2',
                    name: '決まりの決め方（全会一致・多数決）と、契約の考え方がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g3-constitution',
                name: '日本国憲法と基本的人権',
                ref: '社会 公民的分野 C⑴',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-constitution-b1',
                    name: '日本国憲法の三つの基本原則がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-constitution-b2',
                    name: '基本的人権の種類（平等権・自由権・社会権・参政権など）がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-constitution-b3',
                    name: '新しい人権と公共の福祉がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-constitution-b4',
                    name: '天皇の地位と国事行為がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-constitution-b5',
                    name: '平和主義と日本の安全保障がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g3-democracy',
                name: '民主政治と政治参加',
                ref: '社会 公民的分野 C⑵',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-democracy-b1',
                    name: '選挙のしくみと政党の役割がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-democracy-b2',
                    name: '国会・内閣・裁判所のしくみと三権分立がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-democracy-b3',
                    name: '裁判のしくみ（民事・刑事・三審制・裁判員制度）がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-democracy-b4',
                    name: '地方自治のしくみ（首長と議会・直接請求権）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g3-economy',
                name: '市場の働きと経済',
                ref: '社会 公民的分野 B⑴',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-economy-b1',
                    name: '需要・供給と価格の関係がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-economy-b2',
                    name: '消費者の権利と契約がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-economy-b3',
                    name: '企業のしくみ（株式会社など）がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-economy-b4',
                    name: '金融のしくみと日本銀行の役割がわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-economy-b5',
                    name: '働く人の権利（労働基準法など）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g3-public-finance',
                name: '国民の生活と政府の役割',
                ref: '社会 公民的分野 B⑵',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-public-finance-b1',
                    name: '税の種類（直接税と間接税・累進課税）がわかる',
                    required: true,
                  },
                  {
                    id: 'soc-g3-public-finance-b2',
                    name: '社会保障制度のしくみがわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-public-finance-b3',
                    name: '景気の変動と、政府・日本銀行の対策がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'soc-g3-global',
                name: '世界平和と人類の福祉',
                ref: '社会 公民的分野 D⑴',
                open: false,
                badges: [
                  {
                    id: 'soc-g3-global-b1',
                    name: '国家の主権と領域、国際連合のしくみがわかる',
                    required: false,
                  },
                  {
                    id: 'soc-g3-global-b2',
                    name: '地球環境・資源・貧困などの課題と、国際協力の取り組みがわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
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
                  {
                    id: 'math-g1-integers-b4',
                    name: '四則の混じった計算（累乗・かっこをふくむ）ができる',
                    required: false,
                  },
                  {
                    id: 'math-g1-integers-b5',
                    name: '正の数・負の数を使って、具体的な場面を表せる（基準との差・平均）',
                    required: false,
                  },
                  {
                    id: 'math-g1-integers-b6',
                    name: '素数と素因数分解がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g1-algebraic',
                name: '文字を用いた式',
                ref: '数学 第1学年 A⑵',
                open: true,
                badges: [
                  {
                    id: 'math-g1-algebraic-b1',
                    name: '文字式の表し方のきまり（×と÷の省略など）にしたがって書ける',
                    required: false,
                  },
                  {
                    id: 'math-g1-algebraic-b2',
                    name: '式の値を求められる（負の数の代入をふくむ）',
                    required: true,
                  },
                  {
                    id: 'math-g1-algebraic-b3',
                    name: '一次式の加法・減法ができる',
                    required: true,
                  },
                  {
                    id: 'math-g1-algebraic-b4',
                    name: '一次式と数の乗法・除法ができる',
                    required: false,
                  },
                  {
                    id: 'math-g1-algebraic-b5',
                    name: '数量の関係を、等式・不等式に表せる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g1-equations',
                name: '一元一次方程式',
                ref: '数学 第1学年 A⑶',
                open: true,
                badges: [
                  {
                    id: 'math-g1-equations-b1',
                    name: '方程式の解の意味がわかる（代入して確かめる）',
                    required: false,
                  },
                  {
                    id: 'math-g1-equations-b2',
                    name: '等式の性質や移項を使って、方程式を解ける',
                    required: true,
                  },
                  {
                    id: 'math-g1-equations-b3',
                    name: 'かっこ・分数・小数をふくむ方程式を解ける',
                    required: true,
                  },
                  {
                    id: 'math-g1-equations-b4',
                    name: '比例式を解ける',
                    required: false,
                  },
                ],
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
                open: true,
                badges: [
                  {
                    id: 'math-g1-plane-geom-b1',
                    name: '平行移動・対称移動・回転移動を見分けられる',
                    required: false,
                  },
                  {
                    id: 'math-g1-plane-geom-b2',
                    name: '基本の作図（垂直二等分線・角の二等分線・垂線）が、それぞれ何を作る作図かわかる',
                    required: false,
                    description: '作図そのものは外す',
                  },
                  {
                    id: 'math-g1-plane-geom-b3',
                    name: '図形の用語と記号（弧・弦・∠・⊥・//）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g1-space-geom',
                name: '空間図形',
                ref: '数学 第1学年 B⑵',
                open: true,
                badges: [
                  {
                    id: 'math-g1-space-geom-b1',
                    name: '空間での直線や平面の位置関係（ねじれの位置など）がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g1-space-geom-b2',
                    name: 'おうぎ形の弧の長さと面積を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g1-space-geom-b3',
                    name: '柱体・錐体の体積を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g1-space-geom-b4',
                    name: '柱体・錐体・球の表面積と、球の体積を求められる',
                    required: false,
                  },
                  {
                    id: 'math-g1-space-geom-b5',
                    name: '回転体・展開図・投影図から、立体の形がわかる',
                    required: false,
                  },
                ],
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
                open: true,
                badges: [
                  {
                    id: 'math-g1-proportions-b1',
                    name: '関数・変数・変域の意味がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g1-proportions-b2',
                    name: '比例の式を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g1-proportions-b3',
                    name: '反比例の式を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g1-proportions-b4',
                    name: '座標がわかり、比例・反比例のグラフを読み取れる',
                    required: false,
                  },
                ],
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
                open: true,
                badges: [
                  {
                    id: 'math-g1-data-dist-b1',
                    name: '度数分布表とヒストグラムを読み取れる',
                    required: false,
                  },
                  {
                    id: 'math-g1-data-dist-b2',
                    name: '相対度数・累積度数・累積相対度数を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g1-data-dist-b3',
                    name: '範囲を求められ、代表値（平均値・中央値・最頻値）を使える',
                    required: false,
                    description: '代表値は小学6年の内容の確かめ。中1で新しく学ぶのは範囲',
                  },
                ],
              },
              {
                id: 'math-g1-probability',
                name: '不確定な事象の起こりやすさ',
                ref: '数学 第1学年 D⑵',
                open: true,
                badges: [
                  {
                    id: 'math-g1-probability-b1',
                    name: '多数回の試行の結果から、起こりやすさ（相対度数）を求められる',
                    required: false,
                  },
                ],
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
            id: 'math-g2-numbers',
            name: '数と式',
            units: [
              {
                id: 'math-g2-expressions',
                name: '式の計算',
                ref: '数学 第2学年 A⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g2-expressions-b1',
                    name: '多項式の加法・減法（同類項をまとめる）ができる',
                    required: true,
                  },
                  {
                    id: 'math-g2-expressions-b2',
                    name: '単項式の乗法・除法ができる',
                    required: true,
                  },
                  {
                    id: 'math-g2-expressions-b3',
                    name: '式を簡単にしてから、式の値を求められる',
                    required: false,
                  },
                  {
                    id: 'math-g2-expressions-b4',
                    name: '等式を、ある文字について解ける（等式の変形）',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g2-sim-eq',
                name: '連立二元一次方程式',
                ref: '数学 第2学年 A⑵',
                open: false,
                badges: [
                  {
                    id: 'math-g2-sim-eq-b1',
                    name: '連立方程式の解の意味がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g2-sim-eq-b2',
                    name: '加減法で解ける',
                    required: true,
                  },
                  {
                    id: 'math-g2-sim-eq-b3',
                    name: '代入法で解ける',
                    required: true,
                  },
                  {
                    id: 'math-g2-sim-eq-b4',
                    name: 'かっこ・分数・小数をふくむ連立方程式を解ける',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'math-g2-geometry',
            name: '図形',
            units: [
              {
                id: 'math-g2-angles',
                name: '平行線と角',
                ref: '数学 第2学年 B⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g2-angles-b1',
                    name: '対頂角・同位角・錯角の性質を使って、角度を求められる',
                    required: false,
                  },
                  {
                    id: 'math-g2-angles-b2',
                    name: '三角形の内角・外角の性質を使って、角度を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g2-angles-b3',
                    name: '多角形の内角の和・外角の和を求められる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g2-congruence',
                name: '図形の合同と証明',
                ref: '数学 第2学年 B⑵',
                open: false,
                badges: [
                  {
                    id: 'math-g2-congruence-b1',
                    name: '三角形の合同条件がわかる',
                    required: true,
                  },
                  {
                    id: 'math-g2-congruence-b2',
                    name: '定義・定理・仮定・結論・逆・反例がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g2-congruence-b3',
                    name: '証明の空らんにあてはまる根拠を選べる',
                    required: false,
                  },
                  {
                    id: 'math-g2-congruence-b4',
                    name: '二等辺三角形の性質と、直角三角形の合同条件がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g2-congruence-b5',
                    name: '平行四辺形の性質と、平行四辺形になるための条件がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g2-congruence-b6',
                    name: '長方形・ひし形・正方形と平行四辺形の関係がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'math-g2-functions',
            name: '関数',
            units: [
              {
                id: 'math-g2-linear',
                name: '一次関数',
                ref: '数学 第2学年 C⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g2-linear-b1',
                    name: '一次関数の式と、変化の割合がわかる',
                    required: true,
                  },
                  {
                    id: 'math-g2-linear-b2',
                    name: '傾きと切片から、グラフと式がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g2-linear-b3',
                    name: '傾きと1点、または2点から、一次関数の式を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g2-linear-b4',
                    name: '二元一次方程式のグラフと、連立方程式の解（グラフの交点）がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'math-g2-data',
            name: 'データの活用',
            units: [
              {
                id: 'math-g2-boxplot',
                name: '四分位範囲と箱ひげ図',
                ref: '数学 第2学年 D⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g2-boxplot-b1',
                    name: '四分位数・四分位範囲を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g2-boxplot-b2',
                    name: '箱ひげ図を読み取れる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g2-probability',
                name: '確率',
                ref: '数学 第2学年 D⑵',
                open: false,
                badges: [
                  {
                    id: 'math-g2-probability-b1',
                    name: '樹形図や表を使って、場合の数を数えられる',
                    required: false,
                  },
                  {
                    id: 'math-g2-probability-b2',
                    name: '確率を求められる（さいころ・硬貨・くじ）',
                    required: true,
                  },
                  {
                    id: 'math-g2-probability-b3',
                    name: '「〜でない確率」を求められる',
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      3: {
        grade: 3,
        gradeName: '中3',
        fields: [
          {
            id: 'math-g3-numbers',
            name: '数と式',
            units: [
              {
                id: 'math-g3-sqrt',
                name: '平方根',
                ref: '数学 第3学年 A⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g3-sqrt-b1',
                    name: '平方根の意味がわかり、根号を使って表せる',
                    required: false,
                  },
                  {
                    id: 'math-g3-sqrt-b2',
                    name: '平方根の大小、有理数と無理数がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g3-sqrt-b3',
                    name: '根号をふくむ式の乗法・除法ができる（√の中を簡単にする）',
                    required: true,
                  },
                  {
                    id: 'math-g3-sqrt-b4',
                    name: '根号をふくむ式の加法・減法ができる',
                    required: true,
                  },
                  {
                    id: 'math-g3-sqrt-b5',
                    name: '分母を有理化できる',
                    required: false,
                    description: '教科書で扱う内容',
                  },
                ],
              },
              {
                id: 'math-g3-factoring',
                name: '式の展開と因数分解',
                ref: '数学 第3学年 A⑵',
                open: false,
                badges: [
                  {
                    id: 'math-g3-factoring-b1',
                    name: '乗法公式を使って展開できる',
                    required: true,
                  },
                  {
                    id: 'math-g3-factoring-b2',
                    name: '共通因数をくくり出せる',
                    required: false,
                  },
                  {
                    id: 'math-g3-factoring-b3',
                    name: '公式を使って因数分解できる',
                    required: true,
                  },
                  {
                    id: 'math-g3-factoring-b4',
                    name: '展開や因数分解を使って、数の計算をくふうできる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g3-quadratic-eq',
                name: '二次方程式',
                ref: '数学 第3学年 A⑶',
                open: false,
                badges: [
                  {
                    id: 'math-g3-quadratic-eq-b1',
                    name: '平方根の考えを使って解ける（x²＝k、(x＋m)²＝k の形）',
                    required: false,
                  },
                  {
                    id: 'math-g3-quadratic-eq-b2',
                    name: '因数分解を使って解ける',
                    required: true,
                  },
                  {
                    id: 'math-g3-quadratic-eq-b3',
                    name: '解の公式を使って解ける',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'math-g3-geometry',
            name: '図形',
            units: [
              {
                id: 'math-g3-similar',
                name: '図形の相似',
                ref: '数学 第3学年 B⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g3-similar-b1',
                    name: '三角形の相似条件がわかる',
                    required: false,
                  },
                  {
                    id: 'math-g3-similar-b2',
                    name: '相似な図形の辺の長さを求められる',
                    required: true,
                  },
                  {
                    id: 'math-g3-similar-b3',
                    name: '平行線と線分の比を使って、長さを求められる',
                    required: true,
                  },
                  {
                    id: 'math-g3-similar-b4',
                    name: '中点連結定理を使って、長さを求められる',
                    required: false,
                    description: '教科書で扱う内容',
                  },
                  {
                    id: 'math-g3-similar-b5',
                    name: '相似比から、面積比・体積比を求められる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g3-circle',
                name: '円周角と中心角',
                ref: '数学 第3学年 B⑵',
                open: false,
                badges: [
                  {
                    id: 'math-g3-circle-b1',
                    name: '円周角の定理を使って、角度を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g3-circle-b2',
                    name: '直径に対する円周角や、円周角の定理の逆がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'math-g3-pythagoras',
                name: '三平方の定理',
                ref: '数学 第3学年 B⑶',
                open: false,
                badges: [
                  {
                    id: 'math-g3-pythagoras-b1',
                    name: '三平方の定理を使って、辺の長さを求められる',
                    required: true,
                  },
                  {
                    id: 'math-g3-pythagoras-b2',
                    name: '特別な直角三角形（30°・60°・90°、45°・45°・90°）の辺の比がわかる',
                    required: true,
                  },
                  {
                    id: 'math-g3-pythagoras-b3',
                    name: '座標平面上の2点間の距離や、長方形の対角線の長さを求められる',
                    required: false,
                  },
                  {
                    id: 'math-g3-pythagoras-b4',
                    name: '立体の対角線や、錐体の高さを求められる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'math-g3-functions',
            name: '関数',
            units: [
              {
                id: 'math-g3-quadratic-fn',
                name: '関数 y＝ax²',
                ref: '数学 第3学年 C⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g3-quadratic-fn-b1',
                    name: 'y＝ax² の式を求められる',
                    required: true,
                  },
                  {
                    id: 'math-g3-quadratic-fn-b2',
                    name: 'グラフ（放物線）の特徴と、a の符号による違いがわかる',
                    required: false,
                  },
                  {
                    id: 'math-g3-quadratic-fn-b3',
                    name: '変域と、変化の割合を求められる',
                    required: false,
                  },
                  {
                    id: 'math-g3-quadratic-fn-b4',
                    name: 'いろいろな関数（階段状のグラフなど）がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'math-g3-data',
            name: 'データの活用',
            units: [
              {
                id: 'math-g3-sampling',
                name: '標本調査',
                ref: '数学 第3学年 D⑴',
                open: false,
                badges: [
                  {
                    id: 'math-g3-sampling-b1',
                    name: '全数調査と標本調査のちがいがわかる',
                    required: true,
                  },
                  {
                    id: 'math-g3-sampling-b2',
                    name: '標本から母集団の数量を推定できる',
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
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
                name: '身近な物理現象：光と音',
                ref: '理科 第1分野⑴ア',
                open: true,
                badges: [
                  {
                    id: 'sci-g1-energy-phenomena-b1',
                    name: '光の反射（入射角と反射角）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-energy-phenomena-b2',
                    name: '光の屈折と全反射がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-energy-phenomena-b3',
                    name: '凸レンズでできる像（実像・虚像）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-energy-phenomena-b4',
                    name: '音の大きさ・高さと、振幅・振動数の関係がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-energy-phenomena-b5',
                    name: '音の速さを計算できる',
                    required: false,
                  },
                ],
              },
              {
                id: 'sci-g1-force',
                name: '身近な物理現象：力の働き',
                ref: '理科 第1分野⑴イ',
                open: true,
                badges: [
                  {
                    id: 'sci-g1-force-b1',
                    name: '力の表し方（矢印）と、いろいろな力（重力・弾性力・摩擦力など）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-force-b2',
                    name: 'ばねののびと力の大きさの関係（フックの法則）を計算できる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-force-b3',
                    name: '重さと質量のちがいがわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-force-b4',
                    name: '2力のつり合いの条件がわかる',
                    required: false,
                  },
                ],
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
                open: true,
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
                  {
                    id: 'sci-g1-substance-b6',
                    name: '物質の分類（有機物と無機物、金属の性質）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-substance-b7',
                    name: '気体の性質と集め方（酸素・二酸化炭素・水素・アンモニアなど）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-substance-b8',
                    name: '状態変化と、体積・質量の変化がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-substance-b9',
                    name: '融点・沸点と、蒸留による分け方がわかる',
                    required: false,
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
                open: true,
                badges: [
                  {
                    id: 'sci-g1-life-organisms-b1',
                    name: '観察器具（ルーペ・顕微鏡）の使い方がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-life-organisms-b2',
                    name: '花のつくりと働きがわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-life-organisms-b3',
                    name: '種子植物（被子植物・裸子植物）と、種子をつくらない植物の分類がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-life-organisms-b4',
                    name: '根・茎・葉のつくりで、植物（単子葉類・双子葉類）を分類できる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-life-organisms-b5',
                    name: '脊椎動物の5つのなかまの特徴がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-life-organisms-b6',
                    name: '無脊椎動物（節足動物・軟体動物など）の特徴がわかる',
                    required: false,
                  },
                ],
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
                open: true,
                badges: [
                  {
                    id: 'sci-g1-earth-formation-b1',
                    name: '地層のでき方（風化・侵食・運搬・堆積）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-earth-formation-b2',
                    name: '堆積岩の種類と見分け方がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-earth-formation-b3',
                    name: '示相化石・示準化石がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-earth-formation-b4',
                    name: '柱状図から、地層の重なりと過去の様子を読み取れる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-earth-formation-b5',
                    name: 'マグマのねばりけと、火山の形・噴火の様子の関係がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-earth-formation-b6',
                    name: '火成岩（火山岩・深成岩）のつくりと見分け方がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-earth-formation-b7',
                    name: '初期微動継続時間と震源からの距離を計算できる',
                    required: true,
                  },
                  {
                    id: 'sci-g1-earth-formation-b8',
                    name: '震度とマグニチュードのちがい、プレートと地震の関係がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g1-earth-formation-b9',
                    name: '火山・地震による災害と、大地の恵みがわかる',
                    required: false,
                  },
                ],
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
            units: [
              {
                id: 'sci-g2-circuits',
                name: '電流',
                ref: '理科 第1分野⑶ア',
                open: false,
                badges: [
                  {
                    id: 'sci-g2-circuits-b1',
                    name: '回路図の記号がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-circuits-b2',
                    name: '直列回路・並列回路の電流と電圧の関係がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-circuits-b3',
                    name: 'オームの法則で、電流・電圧・抵抗を計算できる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-circuits-b4',
                    name: '直列・並列回路の全体の抵抗を計算できる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-circuits-b5',
                    name: '電力・電力量・熱量を計算できる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-circuits-b6',
                    name: '静電気と電流の関係（電子の流れ）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'sci-g2-magnetism',
                name: '電流と磁界',
                ref: '理科 第1分野⑶イ',
                open: false,
                badges: [
                  {
                    id: 'sci-g2-magnetism-b1',
                    name: '磁界の向きと磁力線がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-magnetism-b2',
                    name: '電流が磁界から受ける力の向きがわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-magnetism-b3',
                    name: '電磁誘導と、誘導電流を大きくする方法がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-magnetism-b4',
                    name: '直流と交流のちがいがわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'sci-g2-particles',
            name: '粒子',
            units: [
              {
                id: 'sci-g2-reactions',
                name: '化学変化と原子・分子',
                ref: '理科 第1分野⑷',
                open: false,
                badges: [
                  {
                    id: 'sci-g2-reactions-b1',
                    name: '分解（熱分解・電気分解）でできる物質がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-reactions-b2',
                    name: '原子・分子の性質と、元素記号がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-reactions-b3',
                    name: '化学式（単体と化合物）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-reactions-b4',
                    name: '化学反応式をつくれる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-reactions-b5',
                    name: '酸化・還元・燃焼がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-reactions-b6',
                    name: '化学変化と熱の出入り（発熱反応・吸熱反応）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-reactions-b7',
                    name: '質量保存の法則がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-reactions-b8',
                    name: '反応する物質の質量の比を計算できる',
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            id: 'sci-g2-life',
            name: '生命',
            units: [
              {
                id: 'sci-g2-cells',
                name: '生物と細胞',
                ref: '理科 第2分野⑶ア',
                open: false,
                badges: [
                  {
                    id: 'sci-g2-cells-b1',
                    name: '植物の細胞と動物の細胞のつくりのちがいがわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-cells-b2',
                    name: '単細胞生物と多細胞生物のちがいがわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'sci-g2-plants',
                name: '植物の体のつくりと働き',
                ref: '理科 第2分野⑶イ',
                open: false,
                badges: [
                  {
                    id: 'sci-g2-plants-b1',
                    name: '光合成のしくみ（材料・できるもの・行われる場所）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-plants-b2',
                    name: '光合成と呼吸の関係を、対照実験から説明できる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-plants-b3',
                    name: '蒸散と、水や養分の通り道（道管・師管）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'sci-g2-animals',
                name: '動物の体のつくりと働き',
                ref: '理科 第2分野⑶ウ',
                open: false,
                badges: [
                  {
                    id: 'sci-g2-animals-b1',
                    name: '消化と吸収（消化酵素）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-animals-b2',
                    name: '呼吸と血液の循環がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-animals-b3',
                    name: '排出のしくみ（じん臓・肝臓）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-animals-b4',
                    name: '刺激と反応（感覚器官・神経・反射）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-animals-b5',
                    name: '骨格と筋肉による運動のしくみがわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'sci-g2-earth',
            name: '地球',
            units: [
              {
                id: 'sci-g2-weather',
                name: '気象とその変化',
                ref: '理科 第2分野⑷',
                open: false,
                badges: [
                  {
                    id: 'sci-g2-weather-b1',
                    name: '気象観測（天気記号・風向・風力）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-weather-b2',
                    name: '圧力と大気圧を計算できる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-weather-b3',
                    name: '飽和水蒸気量から、湿度と露点を求められる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-weather-b4',
                    name: '雲のでき方がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-weather-b5',
                    name: '前線と天気の変化（寒冷前線・温暖前線）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g2-weather-b6',
                    name: '高気圧・低気圧と風の吹き方がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-weather-b7',
                    name: '日本の四季の天気と気団がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g2-weather-b8',
                    name: '気象による災害と、気象の恵みがわかる',
                    required: false,
                  },
                ],
              },
            ],
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
            units: [
              {
                id: 'sci-g3-motion',
                name: '運動とエネルギー',
                ref: '理科 第1分野⑸',
                open: false,
                badges: [
                  {
                    id: 'sci-g3-motion-b1',
                    name: '水圧と浮力がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-motion-b2',
                    name: '力の合成と分解ができる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-motion-b3',
                    name: '速さ・平均の速さを計算できる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-motion-b4',
                    name: '記録タイマーの記録から、物体の運動を読み取れる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-motion-b5',
                    name: '慣性の法則と、作用・反作用の法則がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-motion-b6',
                    name: '仕事と仕事率を計算できる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-motion-b7',
                    name: '仕事の原理（てこ・滑車・斜面）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-motion-b8',
                    name: '力学的エネルギーの保存がわかる',
                    required: true,
                  },
                ],
              },
              {
                id: 'sci-g3-technology',
                name: '科学技術と人間',
                ref: '理科 第1分野⑺',
                open: false,
                badges: [
                  {
                    id: 'sci-g3-technology-b1',
                    name: 'エネルギーの移り変わりと、変換効率がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-technology-b2',
                    name: '熱の伝わり方（伝導・対流・放射）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-technology-b3',
                    name: '発電の方法と、エネルギー資源の特徴がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-technology-b4',
                    name: '放射線の性質と利用がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'sci-g3-particles',
            name: '粒子',
            units: [
              {
                id: 'sci-g3-ions',
                name: '化学変化とイオン',
                ref: '理科 第1分野⑹',
                open: false,
                badges: [
                  {
                    id: 'sci-g3-ions-b1',
                    name: '電解質と非電解質がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-ions-b2',
                    name: '原子の成り立ちと、イオンのでき方・イオン式がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-ions-b3',
                    name: '電離のようすを式で表せる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-ions-b4',
                    name: '酸・アルカリの性質と pH がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-ions-b5',
                    name: '中和と塩がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-ions-b6',
                    name: '金属のイオンへのなりやすさがわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-ions-b7',
                    name: '電池のしくみ（電極で起こる反応）がわかる',
                    required: false,
                    description: 'ダニエル電池などは教科書に合わせる',
                  },
                ],
              },
            ],
          },
          {
            id: 'sci-g3-life',
            name: '生命',
            units: [
              {
                id: 'sci-g3-genetics',
                name: '生命の連続性',
                ref: '理科 第2分野⑸',
                open: false,
                badges: [
                  {
                    id: 'sci-g3-genetics-b1',
                    name: '細胞分裂（体細胞分裂）の順番と、成長のしくみがわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-genetics-b2',
                    name: '無性生殖と有性生殖（減数分裂）がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-genetics-b3',
                    name: '遺伝の規則性から、子や孫の形質の割合を求められる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-genetics-b4',
                    name: 'DNA と遺伝子、遺伝子に関する技術がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-genetics-b5',
                    name: '生物の進化と、その証拠（相同器官など）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'sci-g3-nature',
                name: '自然と人間',
                ref: '理科 第2分野⑺',
                open: false,
                badges: [
                  {
                    id: 'sci-g3-nature-b1',
                    name: '食物連鎖と、生態系の生物の数量のつり合いがわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-nature-b2',
                    name: '分解者の働きと、炭素の循環がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-nature-b3',
                    name: '自然環境の調べ方と、自然環境の保全がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'sci-g3-earth',
            name: '地球',
            units: [
              {
                id: 'sci-g3-space',
                name: '地球と宇宙',
                ref: '理科 第2分野⑹',
                open: false,
                badges: [
                  {
                    id: 'sci-g3-space-b1',
                    name: '太陽の日周運動と、地球の自転の関係がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-space-b2',
                    name: '星座の年周運動と、地球の公転の関係がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-space-b3',
                    name: '季節の変化（南中高度・昼の長さ）と地軸の傾きの関係がわかる',
                    required: true,
                  },
                  {
                    id: 'sci-g3-space-b4',
                    name: '月の満ち欠けと、日食・月食がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-space-b5',
                    name: '金星の見え方（満ち欠け・見える時間）がわかる',
                    required: false,
                  },
                  {
                    id: 'sci-g3-space-b6',
                    name: '太陽系の惑星と恒星、銀河系がわかる',
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
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
                ref: '外国語〔英語〕 2⑴エ（小学校の内容をふくむ）',
                open: true,
                badges: [
                  {
                    id: 'eng-g1-be-verbs-b1',
                    name: '主語に合わせて am・is・are を選べる',
                    required: true,
                  },
                  {
                    id: 'eng-g1-be-verbs-b2',
                    name: 'be動詞の疑問文・否定文を作れる',
                    required: false,
                  },
                  {
                    id: 'eng-g1-be-verbs-b3',
                    name: '人称代名詞（I・my・me・mine など）を使い分けられる',
                    required: false,
                  },
                ],
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
                  {
                    id: 'eng-g1-present-b4',
                    name: '命令文（Don\'t 〜. / Let\'s 〜.）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g1-wh-questions',
                name: '疑問詞',
                ref: '外国語〔英語〕 2⑴エ（文法事項 a、文 b）',
                open: true,
                badges: [
                  {
                    id: 'eng-g1-wh-questions-b1',
                    name: 'what・who・where・when・whose・which・how を使い分けられる',
                    required: true,
                  },
                  {
                    id: 'eng-g1-wh-questions-b2',
                    name: 'how many・how much・how old などで尋ねられる',
                    required: false,
                  },
                  {
                    id: 'eng-g1-wh-questions-b3',
                    name: '疑問詞の疑問文への答え方がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g1-can',
                name: 'can',
                ref: '外国語〔英語〕 2⑴エ（文法事項 c）',
                open: true,
                badges: [
                  {
                    id: 'eng-g1-can-b1',
                    name: 'can の文・疑問文・否定文を作れる',
                    required: true,
                  },
                ],
              },
              {
                id: 'eng-g1-progressive',
                name: '現在進行形',
                ref: '外国語〔英語〕 2⑴エ（文法事項 e）',
                open: true,
                badges: [
                  {
                    id: 'eng-g1-progressive-b1',
                    name: '〈be動詞＋〜ing〉の形を作れる（ing のつけ方をふくむ）',
                    required: true,
                  },
                  {
                    id: 'eng-g1-progressive-b2',
                    name: '現在形と現在進行形を使い分けられる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g1-past',
                name: '過去形',
                ref: '外国語〔英語〕 2⑴エ（文法事項 e）',
                open: true,
                badges: [
                  {
                    id: 'eng-g1-past-b1',
                    name: '規則動詞の過去形（-ed のつけ方）がわかる',
                    required: true,
                  },
                  {
                    id: 'eng-g1-past-b2',
                    name: 'よく使う不規則動詞の過去形がわかる',
                    required: false,
                  },
                  {
                    id: 'eng-g1-past-b3',
                    name: 'did を使った疑問文・否定文を作れる',
                    required: true,
                  },
                  {
                    id: 'eng-g1-past-b4',
                    name: 'be動詞の過去形（was・were）を使える',
                    required: false,
                  },
                ],
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
                ref: '外国語〔英語〕 2⑴ウ',
                open: true,
                badges: [
                  {
                    id: 'eng-g1-vocab-b1',
                    name: '中1で学ぶ単語の意味がわかる',
                    required: true,
                  },
                  {
                    id: 'eng-g1-vocab-b2',
                    name: '中1で学ぶ単語のつづりが書ける',
                    required: false,
                  },
                ],
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
            name: '文法',
            units: [
              {
                id: 'eng-g2-tense',
                name: '過去進行形と未来の表現',
                ref: '外国語〔英語〕 2⑴エ（文法事項 e）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-tense-b1',
                    name: '過去進行形を作り、過去形と使い分けられる',
                    required: false,
                  },
                  {
                    id: 'eng-g2-tense-b2',
                    name: 'will と be going to を使える',
                    required: true,
                  },
                  {
                    id: 'eng-g2-tense-b3',
                    name: '未来の文の疑問文・否定文を作れる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g2-modals',
                name: '助動詞',
                ref: '外国語〔英語〕 2⑴エ（文法事項 c、文 b）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-modals-b1',
                    name: 'must・have to・should・may・could などの意味を使い分けられる',
                    required: true,
                  },
                  {
                    id: 'eng-g2-modals-b2',
                    name: 'must not と don\'t have to のちがいがわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g2-conjunctions',
                name: '接続詞',
                ref: '外国語〔英語〕 2⑴エ（文法事項 b、文 a）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-conjunctions-b1',
                    name: 'when・if・because を使える',
                    required: true,
                  },
                  {
                    id: 'eng-g2-conjunctions-b2',
                    name: 'that（I think that 〜 など）を使える',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g2-there',
                name: 'There is / are',
                ref: '外国語〔英語〕 2⑴エ（文構造 e）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-there-b1',
                    name: 'There is と There are を使い分けられる',
                    required: true,
                  },
                ],
              },
              {
                id: 'eng-g2-infinitives',
                name: '不定詞',
                ref: '外国語〔英語〕 2⑴エ（文法事項 g）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-infinitives-b1',
                    name: '名詞的用法（want to 〜 など）を使える',
                    required: true,
                  },
                  {
                    id: 'eng-g2-infinitives-b2',
                    name: '副詞的用法（〜するために）を使える',
                    required: true,
                  },
                  {
                    id: 'eng-g2-infinitives-b3',
                    name: '形容詞的用法（something to drink など）を使える',
                    required: false,
                  },
                  {
                    id: 'eng-g2-infinitives-b4',
                    name: '〈It is 〜 for … to ―〉の文を使える',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g2-gerunds',
                name: '動名詞',
                ref: '外国語〔英語〕 2⑴エ（文法事項 h）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-gerunds-b1',
                    name: '動名詞を主語や目的語に使える',
                    required: true,
                  },
                  {
                    id: 'eng-g2-gerunds-b2',
                    name: '不定詞だけをとる動詞と、動名詞だけをとる動詞（want・enjoy など）を見分けられる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g2-comparison',
                name: '比較',
                ref: '外国語〔英語〕 2⑴エ（文法事項 f）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-comparison-b1',
                    name: '-er・-est の比較級・最上級を作れる',
                    required: true,
                  },
                  {
                    id: 'eng-g2-comparison-b2',
                    name: 'more・most を使う比較の文を作れる',
                    required: false,
                  },
                  {
                    id: 'eng-g2-comparison-b3',
                    name: 'as 〜 as の文を使える',
                    required: false,
                  },
                  {
                    id: 'eng-g2-comparison-b4',
                    name: '不規則に変化する比較（good・better・best など）がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g2-passive',
                name: '受け身',
                ref: '外国語〔英語〕 2⑴エ（文法事項 j）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-passive-b1',
                    name: '〈be動詞＋過去分詞〉の形を作れる',
                    required: true,
                  },
                  {
                    id: 'eng-g2-passive-b2',
                    name: 'よく使う動詞の過去分詞がわかる',
                    required: false,
                  },
                  {
                    id: 'eng-g2-passive-b3',
                    name: '受け身の疑問文・否定文を作れる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g2-sentence-patterns',
                name: '文の形（文型）',
                ref: '外国語〔英語〕 2⑴エ（文構造 a・c・d）',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-sentence-patterns-b1',
                    name: '〈look・become など＋形容詞・名詞〉の文を使える',
                    required: false,
                  },
                  {
                    id: 'eng-g2-sentence-patterns-b2',
                    name: '〈give・show など＋人＋もの〉の文を使える',
                    required: true,
                  },
                  {
                    id: 'eng-g2-sentence-patterns-b3',
                    name: '〈call・make など＋目的語＋補語〉の文を使える',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'eng-g2-vocab-field',
            name: '語彙',
            units: [
              {
                id: 'eng-g2-vocab',
                name: '中2の単語',
                ref: '外国語〔英語〕 2⑴ウ',
                open: false,
                badges: [
                  {
                    id: 'eng-g2-vocab-b1',
                    name: '中2で学ぶ単語の意味がわかる',
                    required: true,
                  },
                  {
                    id: 'eng-g2-vocab-b2',
                    name: '中2で学ぶ単語のつづりが書ける',
                    required: false,
                  },
                ],
              },
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
            name: '文法',
            units: [
              {
                id: 'eng-g3-perfect',
                name: '現在完了形',
                ref: '外国語〔英語〕 2⑴エ（文法事項 e）',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-perfect-b1',
                    name: '完了・結果の用法（already・yet・just）がわかる',
                    required: true,
                  },
                  {
                    id: 'eng-g3-perfect-b2',
                    name: '経験の用法（ever・never・〜 times）がわかる',
                    required: false,
                  },
                  {
                    id: 'eng-g3-perfect-b3',
                    name: '継続の用法（for・since・How long 〜?）がわかる',
                    required: true,
                  },
                  {
                    id: 'eng-g3-perfect-b4',
                    name: '現在完了進行形を使える',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g3-infinitives',
                name: '不定詞の発展',
                ref: '外国語〔英語〕 2⑴エ（文構造 b・c・d・e）',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-infinitives-b1',
                    name: '〈疑問詞＋to 不定詞〉（how to 〜 など）を使える',
                    required: false,
                  },
                  {
                    id: 'eng-g3-infinitives-b2',
                    name: '〈want・tell・ask＋人＋to 〜〉の文を使える',
                    required: true,
                  },
                  {
                    id: 'eng-g3-infinitives-b3',
                    name: '〈let・help・make＋人＋動詞の原形〉の文を使える',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g3-participles',
                name: '分詞の後置修飾',
                ref: '外国語〔英語〕 2⑴エ（文法事項 i）',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-participles-b1',
                    name: '現在分詞で名詞を後ろから修飾できる',
                    required: true,
                  },
                  {
                    id: 'eng-g3-participles-b2',
                    name: '過去分詞で名詞を後ろから修飾できる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g3-relatives',
                name: '関係代名詞',
                ref: '外国語〔英語〕 2⑴エ（文法事項 a）',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-relatives-b1',
                    name: '主格の関係代名詞（who・which・that）を使える',
                    required: true,
                  },
                  {
                    id: 'eng-g3-relatives-b2',
                    name: '目的格の関係代名詞（which・that、省略をふくむ）を使える',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g3-indirect',
                name: '間接疑問文',
                ref: '外国語〔英語〕 2⑴エ（文構造 b）',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-indirect-b1',
                    name: '〈I know what 〜〉などの語順がわかる',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g3-subjunctive',
                name: '仮定法',
                ref: '外国語〔英語〕 2⑴エ（文法事項 k）',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-subjunctive-b1',
                    name: 'If I were 〜, I would ―. と I wish 〜. を使える',
                    required: false,
                  },
                ],
              },
              {
                id: 'eng-g3-sentences',
                name: 'いろいろな文',
                ref: '外国語〔英語〕 2⑴エ（文 c、文構造 e）',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-sentences-b1',
                    name: '感嘆文（What 〜! / How 〜!）がわかる',
                    required: false,
                  },
                  {
                    id: 'eng-g3-sentences-b2',
                    name: '〈be動詞＋形容詞＋that 〜〉（I\'m sure that 〜 など）を使える',
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            id: 'eng-g3-vocab-field',
            name: '語彙',
            units: [
              {
                id: 'eng-g3-vocab',
                name: '中3の単語',
                ref: '外国語〔英語〕 2⑴ウ',
                open: false,
                badges: [
                  {
                    id: 'eng-g3-vocab-b1',
                    name: '中3で学ぶ単語の意味がわかる',
                    required: true,
                  },
                  {
                    id: 'eng-g3-vocab-b2',
                    name: '中3で学ぶ単語のつづりが書ける',
                    required: false,
                  },
                ],
              },
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
