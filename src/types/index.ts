export type SubjectId = 'jpn' | 'soc' | 'math' | 'sci' | 'eng';

export type Grade = 1 | 2 | 3;

export type BadgeStage = 'not_started' | 'practicing' | 'passed' | 'mastered';

export interface BadgeDef {
  id: string; // Permanent id, e.g. 'sci-g1-substance-b1'
  name: string;
  required: boolean; // ◯ marks required
  description?: string;
}

export interface UnitDef {
  id: string; // Permanent id, e.g. 'sci-g1-substance'
  name: string;
  ref?: string; // e.g. '数学 第1学年 A⑴'
  open: boolean; // true if playable, false if 準備中
  description?: string;
  badges: BadgeDef[];
}

export interface FieldDef {
  id: string; // Permanent id, e.g. 'sci-g1-particles'
  name: string;
  units: UnitDef[];
}

export interface GradeCurriculum {
  grade: Grade;
  gradeName: string;
  fields: FieldDef[];
}

export interface SubjectColor {
  badgeBg: string;
  badgeText: string;
  border: string;
  bgLight: string;
  gradient: string;
  accent: string;
}

export interface SubjectCurriculum {
  id: SubjectId;
  name: string;
  shortName: string;
  color: SubjectColor;
  grades: Record<Grade, GradeCurriculum>;
}

export type CurriculumData = Record<SubjectId, SubjectCurriculum>;

export type QuestionType = 'choice' | 'number' | 'twostep';

export interface ReasonOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  badgeId: string; // Matches BadgeDef.id
  type: QuestionType;
  question: string;
  choices?: string[];
  answer?: string | number;
  tolerance?: number;
  unit?: string;
  hints?: string[];
  reasons?: ReasonOption[];
  reasonAnswer?: string; // ReasonOption.id
  reasonFeedback?: Record<string, string>; // reason id -> explanation
  figure?: {
    type: 'density_table' | 'solubility_chart_and_table';
    data?: any;
  };
  explanation: string;
  sample?: boolean;
}

export interface AttemptQuestionResult {
  questionId: string;
  isCorrect: boolean;
  hintsOpened: number;
  selectedAnswer: string;
  selectedReasonId?: string;
  countedAsCorrect: boolean;
}

export type ChallengeMode = 'practice' | 'mastery' | 'unit';

export interface AttemptRecord {
  attemptId: string;
  timestamp: string; // ISO
  simDate: string; // YYYY-MM-DD
  mode: ChallengeMode;
  targetId: string; // badgeId or unitId
  totalQuestions: number;
  correctCount: number; // counted correct without hints
  hintsUsedCount: number;
  questionResults: AttemptQuestionResult[];
  isPassed: boolean;
}

export interface BadgeState {
  stage: BadgeStage;
  passedDate: string | null; // 'YYYY-MM-DD'
  masteredDate: string | null; // 'YYYY-MM-DD'
  lastAttemptDate: string | null;
  attemptCount: number;
}

export interface AppStorageData {
  learnerId: string;
  attemptRecords: AttemptRecord[];
  badgeStates: Record<string, BadgeState>; // keyed by badgeId
  simDateOffsetDays: number;
}

export interface UserAnswerRecord {
  questionId: string;
  question: Question;
  userAnswer: string;
  userReasonId?: string;
  isCorrect: boolean;
  hintsOpened: number;
  countedAsCorrect: boolean;
  specificFeedback?: string;
}

export interface ChallengeSession {
  mode: ChallengeMode;
  badgeId?: string;
  unitId?: string;
  questions: Question[];
  currentIndex: number;
  userAnswers: UserAnswerRecord[];
  isCompleted: boolean;
}

export interface ChallengeResult {
  mode: ChallengeMode;
  badgeId?: string;
  unitId?: string;
  badgeName?: string;
  unitName?: string;
  totalQuestions: number;
  rawCorrectCount: number;
  countedCorrectCount: number;
  hintsUsedCount: number;
  isPassed: boolean;
  previousStage?: BadgeStage;
  newStage?: BadgeStage;
  nextActionText: string;
  unitPromotions?: Array<{
    badgeId: string;
    badgeName: string;
    promotedToMastered: boolean;
    remainingDays: number;
  }>;
}
