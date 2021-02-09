export interface ProblemList {
  leetcode: Problem[];
}

export interface Problem {
  id: string;
  name: string;
  url: string;
  tags?: string[];
  difficulty: string;
  solution?: ProblemSolution;
}

export interface ProblemSolution {
  name: string;
  body: string;
  explanation?: string;
}
