import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction
} from "@reduxjs/toolkit";

import problemReducer from "../features/problem/store/problemSlice";
import searchReducer from "../features/search/store/searchBoxSlice";

const rootReducer = { problem: problemReducer, search: searchReducer };

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
