import { createSlice } from '@reduxjs/toolkit';

const CourseSlice = createSlice({
  name: 'course',
  initialState: {
    ownedCourses: [],
  },
  reducers: {
    setOwnedCourses: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default CourseSlice.reducer;
