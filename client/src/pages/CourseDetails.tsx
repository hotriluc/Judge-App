import { createStyles, Group, Stack } from '@mantine/core';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataTable, { ColumnDefinitionType } from '../components/Table/DataTable';
import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import IUser from '../interfaces/User';
import { getCourse } from '../services/CoursesService';

const useStyle = createStyles((theme) => ({
  stack: {
    flexBasis: '50%',
    marginTop: theme.spacing.xl,
  },
  tasks: {
    flexGrow: 1,
    marginTop: theme.spacing.xl,
    backgroundColor: 'green',
    height: '100vh',
  },

  courseImg: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
  },
  students: {},
}));

const studentsColumns: ColumnDefinitionType<IUser, keyof IUser>[] = [
  { key: 'id', header: 'Id' },
  { key: 'email', header: 'Email' },
  { key: 'last_name', header: 'Last name' },
];

const dummyStudents: Array<IUser> = [
  {
    id: '1',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '2',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '3',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '4',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '5',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '6',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '7',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '8',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
  {
    id: '9',
    first_name: 'luc',
    last_name: 'ho',
    email: 'test@test',
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const { classes } = useStyle();
  const dispatch = useAppDispatch();
  const course = useAppSelector((state) => state.course.course);

  useEffect(() => {
    if (id) {
      dispatch(getCourse(id));
    }
  }, [id]);

  const viewUser = (id: string) => {
    console.log(id);
  };

  const removeUser = (id: string) => {
    console.log(id);
  };

  return (
    <Group align={'flex-start'} spacing="xl">
      <Stack className={classes.stack}>
        <h1>{course.title}</h1>
        <div className={classes.courseImg}>course image</div>
        <div>
          <h2>Description</h2>
          <p>{course.description ?? '-'}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            neque. Pariatur error consectetur tempore iste, temporibus nemo
            necessitatibus reiciendis nam possimus repellendus consequatur velit
            ratione sapiente odit quidem voluptatum fugiat?
          </p>
        </div>
        <div className={classes.students}>
          <h2>Enrolled students</h2>
          <DataTable
            data={dummyStudents}
            columns={studentsColumns}
            viewFn={viewUser}
            removeFn={removeUser}
            displayActions={true}
          />
        </div>
      </Stack>

      <div className={classes.tasks}>
        <h2>Tasks</h2>
        <DataTable
          data={dummyStudents}
          columns={studentsColumns}
          viewFn={() => {
            console.log('b');
          }}
          removeFn={() => {
            console.log('a');
          }}
        />
      </div>
    </Group>
  );
};

export default CourseDetails;
