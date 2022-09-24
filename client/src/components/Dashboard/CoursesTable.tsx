import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import ICourse from '../../interfaces/Course';
import { deleteCourse, getCourses } from '../../services/CoursesService';
import DataTable, { ColumnDefinitionType } from '../Table/DataTable';

const columns: ColumnDefinitionType<ICourse, keyof ICourse>[] = [
  { key: 'title', header: 'Title' },
  { key: 'description', header: 'Description' },
];

const CoursesTable = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [newPage, setNewPage] = useState(0);
  const courses = useAppSelector((state) => state.course.ownedCourses);
  const needsUpdate = useAppSelector((state) => state.ui.needsUpdate);

  // On first mount fetch courses
  useEffect(() => {
    dispatch(getCourses());
  }, []);

  /**
   * on UPDATE and DELETE
   * refetch up to date information
   */
  useEffect(() => {
    if (needsUpdate) {
      dispatch(getCourses());
    }
  }, [needsUpdate]);

  const removeCourse = (id: string) => {
    dispatch(deleteCourse(id));
  };

  // passing view function like this make it more flexible to do something custom on UI
  const viewCourse = (id: string) => {
    navigate(id);
  };

  return (
    <>
      {/* <button onClick={onClickPrevPageHandler}>Prev</button>
      <button onClick={onClickNextPageHandler}>Next</button> */}
      <DataTable
        data={courses}
        columns={columns}
        displayActions={true}
        removeFn={removeCourse}
        viewFn={viewCourse}
      />
    </>
  );
};

export default CoursesTable;
