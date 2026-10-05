import { QUESTIONS_DATABASE } from '../data/questions';
import { AttemptRecord, Question } from '../types';

/**
 * Normalizes user number input:
 * - Converts zenkaku (full-width) digits ０-９ to 0-9
 * - Normalizes minus signs: '-', '−' (U+2212), '－' (U+FF0D), 'ー' (U+30FC), '‐' (U+2010) to '-'
 * - Converts zenkaku period ． or comma ， to .
 * - Trims whitespace and unit symbols
 */
export function normalizeNumberInput(input: string): number | null {
  if (!input) return null;
  let normalized = input
    .trim()
    .replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
    // Normalize any minus/dash variants to standard '-'
    .replace(/[−－ー‐—–]/g, '-')
    // Normalize plus signs
    .replace(/[＋]/g, '+')
    .replace(/[．。]/g, '.')
    .replace(/，/g, '')
    .replace(/％/g, '')
    .replace(/[%ｇg度回文節]/gi, '')
    .replace(/\s+/g, '')
    .trim();

  // If there's an explicit '+' at front, parseFloat handles it, or remove '+'
  if (normalized.startsWith('+')) {
    normalized = normalized.substring(1);
  }

  const num = parseFloat(normalized);
  return isNaN(num) ? null : num;
}

/**
 * Validates user answer for number type with tolerance.
 */
export function checkNumberAnswer(
  userInput: string,
  correctAnswer: number,
  tolerance: number = 0.05
): { isCorrect: boolean; parsedValue: number | null } {
  const parsed = normalizeNumberInput(userInput);
  if (parsed === null) {
    return { isCorrect: false, parsedValue: null };
  }
  const diff = Math.abs(parsed - correctAnswer);
  return {
    isCorrect: diff <= tolerance + 0.000001,
    parsedValue: parsed,
  };
}

/**
 * Fisher-Yates shuffle array helper.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Prepares a question for display: shuffles choice order & reason order.
 */
export function prepareQuestionForDisplay(q: Question): Question {
  const clone: Question = { ...q };
  if (clone.choices && clone.choices.length > 1) {
    clone.choices = shuffleArray(clone.choices);
  }
  if (clone.reasons && clone.reasons.length > 1) {
    clone.reasons = shuffleArray(clone.reasons);
  }
  return clone;
}

/**
 * Calculate question frequency from attempt history.
 */
function getQuestionFrequency(
  attempts: AttemptRecord[]
): {
  countMap: Record<string, number>;
  lastAttemptQuestionIds: Set<string>;
} {
  const countMap: Record<string, number> = {};
  const lastAttempt = attempts[attempts.length - 1];
  const lastAttemptQuestionIds = new Set<string>();

  if (lastAttempt) {
    lastAttempt.questionResults.forEach((r) => lastAttemptQuestionIds.add(r.questionId));
  }

  attempts.forEach((att) => {
    att.questionResults.forEach((r) => {
      countMap[r.questionId] = (countMap[r.questionId] || 0) + 1;
    });
  });

  return { countMap, lastAttemptQuestionIds };
}

/**
 * Selects 5 questions for single badge challenge.
 * Prioritizes:
 * 1. Questions NOT shown in the immediate last attempt
 * 2. Questions with the lowest total shown count
 */
export function selectBadgeQuestions(
  badgeId: string,
  attempts: AttemptRecord[],
  count: number = 5
): Question[] {
  const pool = QUESTIONS_DATABASE.filter((q) => q.badgeId === badgeId);
  if (pool.length <= count) {
    return shuffleArray(pool).map(prepareQuestionForDisplay);
  }

  const { countMap, lastAttemptQuestionIds } = getQuestionFrequency(attempts);

  // Partition pool into not-in-last vs in-last
  const freshPool = pool.filter((q) => !lastAttemptQuestionIds.has(q.id));
  const recentPool = pool.filter((q) => lastAttemptQuestionIds.has(q.id));

  // Sort each pool by frequency ascending
  const sortByFreq = (a: Question, b: Question) => {
    const ca = countMap[a.id] || 0;
    const cb = countMap[b.id] || 0;
    if (ca !== cb) return ca - cb;
    return Math.random() - 0.5;
  };

  freshPool.sort(sortByFreq);
  recentPool.sort(sortByFreq);

  const selected = [...freshPool, ...recentPool].slice(0, count);
  return shuffleArray(selected).map(prepareQuestionForDisplay);
}

/**
 * Selects 8 questions for "単元チャレンジ" (Unit Challenge).
 * Drawn from passed or mastered badges in the unit.
 */
export function selectUnitChallengeQuestions(
  eligibleBadgeIds: string[],
  attempts: AttemptRecord[],
  totalCount: number = 8
): Question[] {
  if (eligibleBadgeIds.length === 0) return [];

  const pool = QUESTIONS_DATABASE.filter((q) => eligibleBadgeIds.includes(q.badgeId));
  if (pool.length <= totalCount) {
    return shuffleArray(pool).map(prepareQuestionForDisplay);
  }

  const { countMap, lastAttemptQuestionIds } = getQuestionFrequency(attempts);

  // Group by badge to ensure representation
  const byBadge: Record<string, Question[]> = {};
  eligibleBadgeIds.forEach((bId) => {
    byBadge[bId] = pool.filter((q) => q.badgeId === bId);
  });

  const selected: Question[] = [];
  const targetPerBadge = Math.floor(totalCount / eligibleBadgeIds.length);
  const remainder = totalCount % eligibleBadgeIds.length;
  const shuffledBadgeIds = shuffleArray(eligibleBadgeIds);

  shuffledBadgeIds.forEach((badgeId, idx) => {
    const numToPick = targetPerBadge + (idx < remainder ? 1 : 0);
    const badgePool = byBadge[badgeId] || [];

    const sorted = [...badgePool].sort((a, b) => {
      const aRecent = lastAttemptQuestionIds.has(a.id) ? 1 : 0;
      const bRecent = lastAttemptQuestionIds.has(b.id) ? 1 : 0;
      if (aRecent !== bRecent) return aRecent - bRecent;
      const ca = countMap[a.id] || 0;
      const cb = countMap[b.id] || 0;
      if (ca !== cb) return ca - cb;
      return Math.random() - 0.5;
    });

    selected.push(...sorted.slice(0, numToPick));
  });

  // If still not enough, fill from remaining pool
  if (selected.length < totalCount) {
    const selectedIds = new Set(selected.map((s) => s.id));
    const remaining = pool.filter((q) => !selectedIds.has(q.id));
    remaining.sort((a, b) => (countMap[a.id] || 0) - (countMap[b.id] || 0));
    selected.push(...remaining.slice(0, totalCount - selected.length));
  }

  return shuffleArray(selected.slice(0, totalCount)).map(prepareQuestionForDisplay);
}
