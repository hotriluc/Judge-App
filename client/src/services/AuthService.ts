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
