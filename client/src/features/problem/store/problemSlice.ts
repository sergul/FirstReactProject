import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

import { AppThunk } from "../../../core/store";
import { RequestState, ResponseError } from "../../../core/utils/request";
import { LeetCode } from "./LeetCodeProblem.model";
import { Problem } from "./Problem.model";

export interface ProblemState {
  problems: Problem[];
  error?: ResponseError;
  requestState: RequestState;
}

const initialState: ProblemState = { problems: [], requestState: RequestState.None };

const problemSlice = createSlice({
  name: "problem",
  initialState,
  reducers: {
    setLeetCodeProblems: (state, action: PayloadAction<Problem[]>) => {
      state.problems = action.payload;
    },
    setProblemsFailure: (state, action: PayloadAction<ResponseError>) => {
      state.error = action.payload;
    },
    setRequestState: (state, action: PayloadAction<RequestState>) => {
      state.requestState = action.payload;
    }
  }
});

export const { setLeetCodeProblems, setProblemsFailure, setRequestState } = problemSlice.actions;

export const getLeetCodeProblems = (): AppThunk => (dispatch) => {
  dispatch(setRequestState(RequestState.Loading));
  axios
    .get("/api/leetcode")
    .then((response: AxiosResponse<LeetCode>) => {
      try {
        const problems: Problem[] = [];
        response.data.stat_status_pairs.forEach((ltcodeProblem) => {
          const details = ltcodeProblem.stat;
          problems.push({
            id: details.question_id,
            displayId: details.frontend_question_id.toString(),
            title: details.question__title,
            url: `https://leetcode.com/problems/${ltcodeProblem.stat.question__title_slug}`,
            difficulty: ltcodeProblem.difficulty.level
          });
        });
        dispatch(setLeetCodeProblems(problems));
        dispatch(setRequestState(RequestState.Ready));
      } catch (error) {
        dispatch(setRequestState(RequestState.Failure));
        dispatch(setProblemsFailure({ message: "getLeetCodeProblems: Invalid response received", error }));
      }
    })
    .catch((error: AxiosError) => {
      dispatch(setRequestState(RequestState.Failure));
      dispatch(setProblemsFailure(error));
    });
};

export default problemSlice.reducer;
