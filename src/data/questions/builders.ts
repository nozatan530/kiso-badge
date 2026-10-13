// 問題を短く書くための関数。id は「バッジID-q01」から順につける。
// ここで作る問題は Claude が下書きしたもので、先生の確認待ち（sample: true）。
import { Question } from '../../types';

type Draft = Omit<Question, 'id' | 'badgeId' | 'sample'>;

/** 選択式。answer は choices のどれかと同じ文字列にする */
export const c = (question: string, choices: string[], answer: string, explanation: string): Draft => ({
  type: 'choice',
  question,
  choices,
  answer,
  explanation,
});

/** 数値入力。unit が「なし」なら単位を表示しない */
export const n = (
  question: string,
  answer: number,
  unit: string,
  explanation: string,
  hints: string[] = [],
  tolerance = 0
): Draft => ({
  type: 'number',
  question,
  answer,
  unit,
  tolerance,
  hints,
  explanation,
});

/** 答え＋理由の二段階。reasons の1つめを正しい理由として書く（表示は混ぜられる） */
export const t = (
  question: string,
  choices: string[],
  answer: string,
  reasons: Array<[text: string, feedback: string]>,
  explanation: string
): Draft => ({
  type: 'twostep',
  question,
  choices,
  answer,
  reasons: reasons.map(([text], i) => ({ id: `r${i + 1}`, text })),
  reasonAnswer: 'r1',
  reasonFeedback: Object.fromEntries(reasons.map(([, fb], i) => [`r${i + 1}`, fb])),
  explanation,
});

/** バッジごとに問題をまとめる */
export function badge(badgeId: string, drafts: Draft[]): Question[] {
  return drafts.map((d, i) => {
    const id = `${badgeId}-q${String(i + 1).padStart(2, '0')}`;
    const q: Question = { ...d, id, badgeId, sample: true };
    if (q.reasons) {
      q.reasons = q.reasons.map((r) => ({ ...r, id: `${id}-${r.id}` }));
      q.reasonAnswer = `${id}-${q.reasonAnswer}`;
      q.reasonFeedback = Object.fromEntries(
        Object.entries(q.reasonFeedback ?? {}).map(([k, v]) => [`${id}-${k}`, v])
      );
    }
    return q;
  });
}
