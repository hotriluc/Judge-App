import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICourse from '../interfaces/Course';

const initialState: { ownedCourses: Array<ICourse>; isChanged: boolean } = {
  ownedCourses: [],
  isChanged: false,
};

const CourseSlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {
    setOwnedCourses: (state, action) => {
      state.ownedCourses = action.payload;
      state.isChanged = false;
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      console.log(action.payload, 'successfully removed');
      // re-fetch after delete the course
      state.isChanged = true;
    },
  },
});

export const courseActions = CourseSlice.actions;
export default CourseSlice.reducer;
