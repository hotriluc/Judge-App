import axios from 'axios';
import { authHeader } from '../helpers/auth-helper';
// import { AppDispatch } from '../store';

const config = {
  headers: {},
};

/* Auto-login if token stored in the browser
 * GET /api/v1/courses
 * return user (owner) courses
 */
export const getCourses = () => {
  config.headers = { ...authHeader() };

  return async () => {
    axios
      .get('/api/v1/courses', config)
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data);
        }
      })
      .catch((err) => alert(err));
  };
};
