import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      //   localStorage.setItem()
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
