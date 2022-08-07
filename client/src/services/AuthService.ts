import { AppDispatch } from '../store';
import { authActions } from '../store/auth-store';
// import axios from 'axios';

export const createSession = (credentials: {
  email: string;
  password: string;
}) => {
  /*Create session thunk*/
  return async (dispatch: AppDispatch) => {
    console.log(credentials);
    // do request to backend
    dispatch(authActions.login());
  };
};
