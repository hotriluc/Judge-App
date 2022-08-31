import axios from 'axios';
import { authHeader } from '../helpers/auth-helper';
import { AppDispatch } from '../store';
import { courseActions } from '../store/course-store';
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

  return async (dispatch: AppDispatch) => {
    axios
      .get('/api/v1/courses', config)
      .then((res) => {
        if (res.status === 200) {
          dispatch(courseActions.setOwnedCourses(res.data));
        }
      })
      .catch((err) => alert(err));
  };
};

export const deleteCourse = (id: string) => {
  config.headers = { ...authHeader() };

  return async (dispatch: AppDispatch) => {
    axios
      .delete(`/api/v1/courses/${id}`, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch(courseActions.deleteCourse(id));
        }
      })
      .catch((err) => alert(err));
  };
};
