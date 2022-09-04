import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import { getCourse } from '../services/CoursesService';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const course = useAppSelector((state) => state.course.course);

  useEffect(() => {
    if (id) {
      dispatch(getCourse(id));
    }
  }, [id]);

  return (
    <div>
      <h1>{course.title}</h1>
      <div>
        <h2>Description</h2>
        <p>{course.description ?? '-'}</p>
      </div>
      <div>
        <h2>Students</h2>
        <p>{course.description ?? '-'}</p>
      </div>
      <div>
        <h2>Tasks</h2>
        <p>{course.description ?? '-'}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
