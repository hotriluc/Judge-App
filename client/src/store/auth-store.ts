import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../interfaces/User';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, isAuthenticated: false },
  reducers: {
    login(state, action: PayloadAction<{ user: IUser }>) {
      state.user = action.payload.user;
      state.isAuthenticated = !!state.user;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
