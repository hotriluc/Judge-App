import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-store';
import courseReducer from './course-store';
import uiReducer from './ui-store';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
