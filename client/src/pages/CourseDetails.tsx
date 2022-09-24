import { Button, createStyles, Group, Stack, Tooltip } from '@mantine/core';
import { IconUserPlus } from '@tabler/icons';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataTable, { ColumnDefinitionType } from '../components/Table/DataTable';
import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import IUser from '../interfaces/User';
import { getCourse, removeStudent } from '../services/CoursesService';

const useStyle = createStyles((theme) => ({
  wrapper: {
    '& h2': {
      marginBottom: 15,
    },
  },
  stack: {
    flexBasis: '50%',
    marginTop: theme.spacing.xl,
  },
  description: {},
  tasks: {
    flexGrow: 1,
    marginTop: theme.spacing.xl,
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
  { key: 'email', header: 'Email' },
  { key: 'last_name', header: 'Last name' },
];

const CourseDetails = () => {
  const { id } = useParams();
  const { classes } = useStyle();
  const dispatch = useAppDispatch();
  const course = useAppSelector((state) => state.course.course);
  const needsUpdate = useAppSelector((state) => state.ui.needsUpdate);

  useEffect(() => {
    if (id) {
      dispatch(getCourse(id));
    }
  }, [id]);

  /**
   * on UPDATE and DELETE
   * refetch up to date information
   */
  useEffect(() => {
    // to avoid double request
    if (needsUpdate && id) {
      dispatch(getCourse(id));
    }
  }, [needsUpdate]);

  const viewUser = (id: string) => {
    console.log(id);
  };

  const removeUser = (studentId: string) => {
    if (id) {
      dispatch(removeStudent(id, studentId));
    }
  };

  return (
    <Group align={'flex-start'} spacing={20} className={classes.wrapper}>
      <Stack className={classes.stack} spacing={40}>
        <h1>{course.data.title}</h1>
        <div className={classes.courseImg}>course image</div>
        <div className={classes.description}>
          <h2>Description</h2>
          <p>{course.data.description}</p>
        </div>
        <div className={classes.students}>
          <Group>
            <h2>Enrolled students</h2>
            <Tooltip label="Invite a student">
              <Button
                size={'xs'}
                variant="outline"
                style={{ marginBottom: 15 }}
              >
                <IconUserPlus size={18} />
              </Button>
            </Tooltip>
          </Group>
          <DataTable
            data={course.students}
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
          data={course.students}
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
