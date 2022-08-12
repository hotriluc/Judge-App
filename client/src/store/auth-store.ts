import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../interfaces/User';

const initialState: { user: IUser; isAuthenticated: boolean } = {
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
  },
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
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
