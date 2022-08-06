import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth-store';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
