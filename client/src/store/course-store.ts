import { createSlice } from '@reduxjs/toolkit';
import ICourse from '../interfaces/Course';

const initialState: { ownedCourses: Array<ICourse> } = {
  ownedCourses: [],
};

const CourseSlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {
    setOwnedCourses: (state, action) => {
      state.ownedCourses = action.payload;
    },
  },
});

export const courseActions = CourseSlice.actions;
export default CourseSlice.reducer;
