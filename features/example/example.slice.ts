import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from '@config/persistStorage';
import { persistReducer } from 'redux-persist';
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

const reducer = persistReducer(
  {
    key: 'sv:overview',
    storage,
    whitelist: ['user'],
  },
  slice.reducer,
);

export const { setUser, reset } = slice.actions;

export default reducer;
