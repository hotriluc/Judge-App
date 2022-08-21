import axios from 'axios';
// import { AppDispatch } from '../store';

/* Auto-login if token stored in the browser
 * GET /api/v1/courses
 * return user (owner) courses
 */
export const getCourses = (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return async () => {
    axios
      .get('/api/v1/courses', config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => alert(err));
  };
};
