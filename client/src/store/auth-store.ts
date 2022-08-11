import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../interfaces/User';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, isLoggedIn: false },
  reducers: {
    login(state, action: PayloadAction<{ user: IUser }>) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
