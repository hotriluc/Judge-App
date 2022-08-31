import React from 'react';
import { createStyles, Table } from '@mantine/core';
import Actions from './Actions';

interface MinimumData {
  id: string;
}

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
interface DataTableProps<T extends MinimumData, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  displayActions?: boolean;
  viewFn: (id: string) => void;
  removeFn: (id: string) => void;
}

const useStyles = createStyles(() => ({
  actions: {
    width: '20%',
  },
}));

const DataTable = <T extends MinimumData, K extends keyof T>({
  data,
  columns,
  displayActions,
  viewFn,
  removeFn,
}: DataTableProps<T, K>) => {
  const { classes } = useStyles();

  // prepare rows and columns
  const rows = data.map((row, index) => (
    <tr key={`row-${index}`}>
      {columns.map((col, index) => (
        <td key={`col-${index}`}>{`${row[col.key] ?? '-'}`}</td>
      ))}
      {displayActions && (
        <td>
          <Actions id={row.id} viewFn={viewFn} removeFn={removeFn} />
        </td>
      )}
    </tr>
  ));

  const cols = columns.map((col, index) => (
    <th key={`header-${index}`}>{col.header}</th>
  ));

  return (
    <Table>
      <thead>
        <tr>
          {cols}
          {displayActions && <th className={classes.actions}>Actions</th>}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default DataTable;
