import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

import { AppThunk } from "../../app/store";
import { ProblemList } from "./Problem.model";

export interface ProblemState {
  problems: ProblemList;
}

const initialState: ProblemState = { problems: { leetcode: [] } };

const problemSlice = createSlice({
  name: "problem",
  initialState,
  reducers: {
    getProblems: (state, action: PayloadAction<ProblemList>) => {
      state.problems = action.payload;
    }
  }
});

export const { getProblems } = problemSlice.actions;

export const requestProblems = ():AppThunk => (dispatch) => {
  axios
    .get("/api/problems")
    .then((response: AxiosResponse) => {
      dispatch(getProblems(JSON.parse(response.data)));
    })
    .catch((error: AxiosError) => {
      console.log(error.response?.statusText, error.response?.status);
    });
};

export default problemSlice.reducer;
