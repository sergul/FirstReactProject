import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import problemReducer from "../features/problem/problemSlice";

export const store = configureStore({ reducer: { problem: problemReducer } });

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
