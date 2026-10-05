import {
  AppStorageData,
  AttemptRecord,
  BadgeStage,
  BadgeState,
} from './types';

const STORAGE_KEY = 'kyoka_badge_map_v1';

function generateLearnerId(): string {
  const rand = Math.random().toString(36).substring(2, 8);
  const time = Date.now().toString(36).slice(-4);
  return `lrn-${rand}-${time}`;
}

export function getDefaultBadgeState(): BadgeState {
  return {
    stage: 'not_started',
    passedDate: null,
    masteredDate: null,
    lastAttemptDate: null,
    attemptCount: 0,
  };
}

const INITIAL_DATA: AppStorageData = {
  learnerId: generateLearnerId(),
  attemptRecords: [],
  badgeStates: {},
  simDateOffsetDays: 0,
};

let inMemoryStorage: AppStorageData = JSON.parse(JSON.stringify(INITIAL_DATA));

/**
 * Loads storage data safely.
 */
export function loadStorageData(): AppStorageData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const fresh = { ...INITIAL_DATA, learnerId: generateLearnerId() };
      inMemoryStorage = fresh;
      saveStorageData(fresh);
      return fresh;
    }
    const parsed = JSON.parse(raw) as Partial<AppStorageData>;
    const data: AppStorageData = {
      learnerId: parsed.learnerId || generateLearnerId(),
      attemptRecords: Array.isArray(parsed.attemptRecords) ? parsed.attemptRecords : [],
      badgeStates: parsed.badgeStates || {},
      simDateOffsetDays: typeof parsed.simDateOffsetDays === 'number' ? parsed.simDateOffsetDays : 0,
    };
    inMemoryStorage = data;
    return data;
  } catch (err) {
    console.warn('localStorage read failed, using in-memory store', err);
    return inMemoryStorage;
  }
}

/**
 * Saves storage data safely.
 */
export function saveStorageData(data: AppStorageData): void {
  inMemoryStorage = data;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('localStorage write failed, using in-memory store', err);
  }
}

/**
 * Get the anonymous learner ID.
 */
export function getLearnerId(): string {
  return loadStorageData().learnerId;
}

/**
 * Get state for a specific badge.
 */
export function getBadgeState(badgeId: string): BadgeState {
  const data = loadStorageData();
  return data.badgeStates[badgeId] || getDefaultBadgeState();
}

/**
 * Get all badge states.
 */
export function getAllBadgeStates(): Record<string, BadgeState> {
  return loadStorageData().badgeStates;
}

/**
 * Update single badge state.
 */
export function updateBadgeState(
  badgeId: string,
  updater: (prev: BadgeState) => BadgeState
): BadgeState {
  const data = loadStorageData();
  const current = data.badgeStates[badgeId] || getDefaultBadgeState();
  const updated = updater(current);
  data.badgeStates[badgeId] = updated;
  saveStorageData(data);
  return updated;
}

/**
 * Append an immutable attempt record to history.
 */
export function recordAttempt(
  recordInput: Omit<AttemptRecord, 'attemptId' | 'timestamp'>
): AttemptRecord {
  const data = loadStorageData();
  const newAttempt: AttemptRecord = {
    ...recordInput,
    attemptId: `att_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toISOString(),
  };

  data.attemptRecords.push(newAttempt);
  saveStorageData(data);
  return newAttempt;
}

/**
 * Get all past attempt records.
 */
export function getAttemptRecords(): AttemptRecord[] {
  return loadStorageData().attemptRecords;
}

/**
 * Date simulation offset in days.
 */
export function getSimDateOffset(): number {
  return loadStorageData().simDateOffsetDays;
}

export function setSimDateOffset(offset: number): void {
  const data = loadStorageData();
  data.simDateOffsetDays = offset;
  saveStorageData(data);
}

/**
 * Resets all stored user data completely (factory reset).
 */
export function resetAllData(): AppStorageData {
  const fresh: AppStorageData = {
    learnerId: generateLearnerId(),
    attemptRecords: [],
    badgeStates: {},
    simDateOffsetDays: 0,
  };
  saveStorageData(fresh);
  return fresh;
}

// ==========================================
// Date & Mastery Calculation Helpers
// ==========================================

export function getSimulatedDate(offsetDays: number = 0): {
  dateStr: string; // YYYY-MM-DD
  displayStr: string; // e.g. "10月5日(月)"
  fullDisplayStr: string; // e.g. "2026年10月5日(月)"
  dateObj: Date;
} {
  const base = new Date();
  base.setDate(base.getDate() + offsetDays);

  const year = base.getFullYear();
  const month = base.getMonth() + 1;
  const day = base.getDate();
  const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][base.getDay()];
  const displayStr = `${month}月${day}日(${dayOfWeek})`;
  const fullDisplayStr = `${year}年${month}月${day}日(${dayOfWeek})`;

  return { dateStr, displayStr, fullDisplayStr, dateObj: base };
}

export function getDaysDifference(dateStrFrom: string, dateStrTo: string): number {
  const [y1, m1, d1] = dateStrFrom.split('-').map(Number);
  const [y2, m2, d2] = dateStrTo.split('-').map(Number);
  const t1 = Date.UTC(y1, m1 - 1, d1);
  const t2 = Date.UTC(y2, m2 - 1, d2);
  const diffMs = t2 - t1;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function getMasteryStatus(
  badge: BadgeState,
  currentSimDateStr: string
): {
  canChallenge: boolean;
  daysSincePassed: number;
  daysRemaining: number;
  targetDateStr?: string;
} {
  if (badge.stage === 'mastered') {
    return { canChallenge: false, daysSincePassed: 0, daysRemaining: 0 };
  }
  if (badge.stage !== 'passed' || !badge.passedDate) {
    return { canChallenge: false, daysSincePassed: 0, daysRemaining: 7 };
  }

  const daysSince = getDaysDifference(badge.passedDate, currentSimDateStr);
  const daysRemaining = Math.max(0, 7 - daysSince);

  const [py, pm, pd] = badge.passedDate.split('-').map(Number);
  const targetDateObj = new Date(Date.UTC(py, pm - 1, pd + 7));
  const targetMonth = targetDateObj.getUTCMonth() + 1;
  const targetDay = targetDateObj.getUTCDate();
  const targetDateStr = `${targetMonth}月${targetDay}日`;

  return {
    canChallenge: daysSince >= 7,
    daysSincePassed: daysSince,
    daysRemaining,
    targetDateStr,
  };
}

export function formatFriendlyDate(dateStr: string | null): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const m = parseInt(parts[1], 10);
  const d = parseInt(parts[2], 10);
  return `${m}月${d}日`;
}
