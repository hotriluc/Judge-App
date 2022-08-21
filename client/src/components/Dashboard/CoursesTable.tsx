import { Table } from '@mantine/core';
import React from 'react';
// import { Link } from 'react-router-dom';

const courseList = [
  { id: '1', name: 'course 1' },
  { id: '2', name: 'course 2' },
];

const CoursesTable = () => {
  const rows = courseList.map((element) => (
    <tr key={element.name}>
      <td>{element.id}</td>
      <td>{element.name}</td>
    </tr>
  ));

  return (
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
  );
};

export default CoursesTable;
