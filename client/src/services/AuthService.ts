import axios from 'axios';
import { AppDispatch } from '../store';
import { authActions } from '../store/auth-store';
// import axios from 'axios';

export const createSession = (credentials: {
  email: string;
  password: string;
}) => {
  // Create session thunk
  return async (dispatch: AppDispatch) => {
    const { email, password } = credentials;

    axios
      .post('/api/v1/auth/login', { user: { email, password } })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data?.token);
          dispatch(authActions.login(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const stopSession = () => {
  return async (dispatch: AppDispatch) => {
    // later implement refresh token
    // post auth/revoke pass token
    localStorage.removeItem('token');
    dispatch(authActions.logout());
  };
};

export const autoLogin = (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return async (dispatch: AppDispatch) => {
    axios
      .get('/api/v1/auth/auto_login', config)
      .then((res) => {
        if (res.status === 200) {
          dispatch(authActions.login({ user: res.data }));
        }
      })
      .catch((err) => console.log(err));
  };
};
