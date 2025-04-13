import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CommonSliceState = {
  bodyScrollTop: number;
  heroCardScrollProgress: number;
};

const initialState: CommonSliceState = {
  bodyScrollTop: 0,
  heroCardScrollProgress: 0,
};

const setBodyScrollTopAction = (
  state: CommonSliceState,
  action: PayloadAction<number>
) => {
  state.bodyScrollTop = action.payload;
};

const setHeroCardScrollProgressAction = (
  state: CommonSliceState,
  action: PayloadAction<number>
) => {
  state.heroCardScrollProgress = action.payload;
};

const commonSlice = createSlice({
  name: "common_slice",
  initialState: { ...initialState },
  reducers: {
    setBodyScrollTop: setBodyScrollTopAction,
    setHeroCardScrollProgress: setHeroCardScrollProgressAction,
  },
});

export const { setBodyScrollTop, setHeroCardScrollProgress } =
  commonSlice.actions;
export const commonReducer = commonSlice.reducer;
