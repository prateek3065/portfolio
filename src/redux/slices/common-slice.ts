import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CommonSliceState = {
  bodyScrollTop: number;
};

const initialState: CommonSliceState = {
  bodyScrollTop: 0,
};

const setBodyScrollTopAction = (
  state: CommonSliceState,
  action: PayloadAction<number>
) => {
  state.bodyScrollTop = action.payload;
};

const commonSlice = createSlice({
  name: "common_slice",
  initialState: { ...initialState },
  reducers: {
    setBodyScrollTop: setBodyScrollTopAction,
  },
});

export const { setBodyScrollTop } = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
