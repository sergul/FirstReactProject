export interface LeetCode {
  stat_status_pairs: LeetCodeProblem[];
}

export interface LeetCodeProblem {
  stat: Stat;
  status?: null;
  difficulty: Difficulty;
  paid_only: boolean;
  is_favor: boolean;
  frequency: number;
  progress: number;
}

export interface Stat {
  question_id: number;
  question__article__live?: null;
  question__article__slug?: null;
  question__article__has_video_solution?: null;
  question__title: string;
  question__title_slug: string;
  question__hide: boolean;
  total_acs: number;
  total_submitted: number;
  frontend_question_id: number;
  is_new_question: boolean;
}

interface Difficulty {
  level: DifficultyLevel;
}

export enum DifficultyLevel {
  Easy = 1,
  Medium,
  Hard
}
