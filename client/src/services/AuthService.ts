import { Dispatch } from '@reduxjs/toolkit';
import { authActions } from '../store/auth-store';
// import axios from 'axios';

export const login = (user: { email: string; password: string }) => {
  async (dispatch: Dispatch) => {
    console.log(user);
    dispatch(authActions.login);
    // const response = await axios.post('/api/v1/auth/login', {
    //     auth: {
    //         email: user.email,
    //         password: user.password
    //     }
    // });
  };
};
