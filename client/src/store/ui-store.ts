import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  needsUpdate: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setNeedsUpdate: (state, action: PayloadAction<boolean>) => {
      state.needsUpdate = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
