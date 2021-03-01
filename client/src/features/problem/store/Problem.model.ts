import { DifficultyLevel } from "./LeetCodeProblem.model";

export interface Problem {
  id: number;
  displayId: string;
  title: string;
  url: string;
  tags?: string[];
  difficulty: DifficultyLevel;
  solution?: ProblemSolution;
}

export interface ProblemSolution {
  name: string;
  body: string;
  explanation?: string;
}
