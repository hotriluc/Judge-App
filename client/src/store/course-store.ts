import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICourse from '../interfaces/Course';
import IUser from '../interfaces/User';

const initialState: {
  course: {
    data: ICourse;
    students: Array<IUser>;
  };
  ownedCourses: Array<ICourse>;
  isChanged: boolean;
} = {
  course: {
    data: { id: '', title: '', description: '', owner_id: '' },
    students: [],
  },
  ownedCourses: [],
  isChanged: false,
};

const CourseSlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {
    setCourse: (
      state,
      action: PayloadAction<{ data: ICourse; students: Array<IUser> }>
    ) => {
      state.course.data = action.payload.data;
      state.course.students = action.payload.students;
      state.isChanged = false;
    },
    setOwnedCourses: (state, action) => {
      state.ownedCourses = action.payload;
      state.isChanged = false;
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      console.log(action.payload, 'successfully removed');
      // re-fetch after delete the course
      state.isChanged = true;
    },
    removeStudent: (state, action) => {
      console.log(action.payload, 'student successfully removed');
      state.isChanged = true;
    },
  },
});

export const courseActions = CourseSlice.actions;
export default CourseSlice.reducer;
