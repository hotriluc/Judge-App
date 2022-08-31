import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import ICourse from '../../interfaces/Course';
import { deleteCourse, getCourses } from '../../services/CoursesService';
import DataTable, { ColumnDefinitionType } from '../Table/DataTable';
// import { Link } from 'react-router-dom';

const columns: ColumnDefinitionType<ICourse, keyof ICourse>[] = [
  { key: 'title', header: 'Name' },
  { key: 'description', header: 'Description' },
];

const CoursesTable = () => {
  const dispatch = useAppDispatch();
  // const [newPage, setNewPage] = useState(0);
  const courses = useAppSelector((state) => state.course.ownedCourses);
  const isChanged = useAppSelector((state) => state.course.isChanged);

  // On first mount fetch courses
  useEffect(() => {
    dispatch(getCourses());
  }, []);

  // On state changes refetch
  useEffect(() => {
    if (isChanged) {
      console.log(isChanged);
      dispatch(getCourses());
    }
  }, [isChanged]);

  const removeCourse = (id: string) => {
    dispatch(deleteCourse(id));
  };

  return (
    <div>
      {/* <button onClick={onClickPrevPageHandler}>Prev</button>
      <button onClick={onClickNextPageHandler}>Next</button> */}
      <DataTable
        data={courses}
        columns={columns}
        displayActions={true}
        removeFn={removeCourse}
      />
    </div>
  );
};

export default CoursesTable;
