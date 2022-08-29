import React from 'react';
import { Table } from '@mantine/core';

// Define structure for column object
// K are keys defined in T
// i.e you can not pass random keys only ones that exist in T Object
// e.g for Course keys are title, description, etc.
export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
};

// Define structure for component's props
// data - array of T (e.g Course, User, etc.)
// columns - array of columns (it depends on data we passed)
interface DataTableProps<T, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
}

const DataTable = <T, K extends keyof T>({
  data,
  columns,
}: DataTableProps<T, K>) => {
  const rows = data.map((row, index) => (
    <tr key={`row-${index}`}>
      {columns.map((col, index) => (
        <td key={`col-${index}`}>{`${row[col.key]}`}</td>
      ))}
    </tr>
  ));
  const cols = columns.map((col, index) => (
    <th key={`header-${index}`}>{col.header}</th>
  ));

  return (
    <Table>
      <thead>
        <tr>{cols}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default DataTable;
