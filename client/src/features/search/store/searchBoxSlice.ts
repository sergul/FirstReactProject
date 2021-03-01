import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface SearchBoxState {
  phrase: string;
}

const initialState: SearchBoxState = { phrase: "" };

const searchBoxSlice = createSlice({
  name: "searchBox", initialState, reducers: {
    setSearchText: (state, payload: PayloadAction<string>) => {
      state.phrase = payload.payload;
    }
  }
});

export const { setSearchText } = searchBoxSlice.actions;

export default searchBoxSlice.reducer;
