import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/app-hooks';
import ICourse from '../../interfaces/Course';
import { getCourses } from '../../services/CoursesService';
import DataTable, { ColumnDefinitionType } from '../Tables/DataTable';
// import { Link } from 'react-router-dom';

const mockData: Array<ICourse> = [
  { title: 'Luc', description: 'nice course' },
  { title: 'Luc2', description: 'nice course' },
  { title: 'Luc3', description: 'nice course' },
  { title: 'Luc4', description: 'nice course' },
];

const columns: ColumnDefinitionType<ICourse, keyof ICourse>[] = [
  { key: 'title', header: 'Name' },
  { key: 'description', header: 'Description' },
];

const CoursesTable = () => {
  const dispatch = useAppDispatch();
  const [newPage, setNewPage] = useState(0);

  //create tableSlice that will handle nextPage and lastPage
  // or check mantine
  // on open new component courses or else that use table
  // reset pagination and etc.
  useEffect(() => {
    dispatch(getCourses());
  }, [newPage]);

  const onClickNextPageHandler = () => {
    setNewPage((newPage: number) => newPage + 1);
  };

  const onClickPrevPageHandler = () => {
    setNewPage((newPage: number) => newPage - 1);
  };

  return (
    <div>
      <button onClick={onClickPrevPageHandler}>Prev</button>
      <button onClick={onClickNextPageHandler}>Next</button>
      <DataTable data={mockData} columns={columns} />
    </div>
  );
};

export default CoursesTable;
