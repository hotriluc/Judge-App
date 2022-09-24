import axios from 'axios';
import { authHeader } from '../helpers/auth-helper';
import { AppDispatch } from '../store';
import { courseActions } from '../store/course-store';
import { uiActions } from '../store/ui-store';
// import { AppDispatch } from '../store';

const config = {
  headers: {},
  data: {},
};

/**
 * Auto-login if token stored in the browser
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
          dispatch(uiActions.setNeedsUpdate(false));
        }
      })
      .catch((err) => alert(err));
  };
};

/**
 * GET /api/v1/courses/:id
 * return course details
 */
export const getCourse = (id: string) => {
  config.headers = { ...authHeader() };

  return async (dispatch: AppDispatch) => {
    axios
      .get(`/api/v1/courses/${id}`, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch(courseActions.setCourse(res.data));
          dispatch(uiActions.setNeedsUpdate(false));
        }
      })
      .catch((err) => alert(err));
  };
};

/**
 * Delete course by ID
 * DELETE /api/v1/courses/:id
 */
export const deleteCourse = (id: string) => {
  config.headers = { ...authHeader() };

  return async (dispatch: AppDispatch) => {
    axios
      .delete(`/api/v1/courses/${id}`, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch(courseActions.deleteCourse(id));
          dispatch(uiActions.setNeedsUpdate(true));
        }
      })
      .catch((err) => alert(err));
  };
};

/**
 * Delete student from course
 * DELETE /api/v1/courses/:id/remove_student/:student_id
 */
export const removeStudent = (courseId: string, studentId: string) => {
  config.headers = { ...authHeader() };

  // request body data
  config.data = { student_id: studentId };

  return async (dispatch: AppDispatch) => {
    axios
      .delete(`/api/v1/courses/${courseId}/remove_student`, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch(courseActions.removeStudent(studentId));

          // tell UI that it needs to update
          dispatch(uiActions.setNeedsUpdate(true));
        }
      })
      .catch((err) => alert(err));
  };
};
