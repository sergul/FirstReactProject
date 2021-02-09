import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

import { AppThunk } from "../../../core/store";
import { RequestState,ResponseError } from "../../../core/utils/request";
import { ProblemList } from "./Problem.model";

export interface ProblemState {
  problems: ProblemList;
  error?: ResponseError;
  requestState: RequestState;
}

const initialState: ProblemState = { problems: { leetcode: [] }, requestState: RequestState.None };

const problemSlice = createSlice({
  name: "problem",
  initialState,
  reducers: {
    setProblemsResponse: (state, action: PayloadAction<ProblemList>) => {
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

export const { setProblemsResponse, setProblemsFailure, setRequestState } = problemSlice.actions;

export const requestProblems = (): AppThunk => (dispatch) => {
  dispatch(setRequestState(RequestState.Loading));
  axios
    .get("/api/problems")
    .then((response: AxiosResponse) => {
      try {
        dispatch(setProblemsResponse(JSON.parse(response.data)));
        dispatch(setRequestState(RequestState.Ready));
      } catch (error) {
        dispatch(setRequestState(RequestState.Failure));
        dispatch(setProblemsFailure({ message: "problemSlice: Invalid response received", error }));
      }
    })
    .catch((error: AxiosError) => {
      dispatch(setRequestState(RequestState.Failure));
      dispatch(setProblemsFailure(error));
    });
};

export default problemSlice.reducer;
