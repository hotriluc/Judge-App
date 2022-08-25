import { Table } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/app-hooks';
import { getCourses } from '../../services/CoursesService';
// import { Link } from 'react-router-dom';

const courseList = [
  { id: '1', name: 'course 1' },
  { id: '2', name: 'course 2' },
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

  const rows = courseList.map((element) => (
    <tr key={element.name}>
      <td>{element.id}</td>
      <td>
        <Link to={element.id}>{element.name}</Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <button onClick={onClickPrevPageHandler}>Prev</button>
      <button onClick={onClickNextPageHandler}>Next</button>

      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>User count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default CoursesTable;
