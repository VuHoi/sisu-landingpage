import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserResponse } from './example.type';

export interface OverviewState {
  user: UserResponse | null;
}

const initialState: OverviewState = {
  user: null,
};

const slice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    reset: () => initialState,
    setUser: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, reset } = slice.actions;

export default  slice.reducer;
