import React from 'react';
import { IconEye, IconTrash } from '@tabler/icons';
import { Button, createStyles, Group } from '@mantine/core';

const useStyles = createStyles(() => ({
  link: {
    width: 20,
  },
}));

interface IActions {
  id: string;
  viewFn: (id: string) => void;
  removeFn: (id: string) => void;
}

const Actions = ({ id, viewFn, removeFn }: IActions): JSX.Element => {
  const { classes } = useStyles();

  const onClickViewButton = () => {
    viewFn(id);
  };

  const onClickRemoveButton = () => {
    removeFn(id);
  };

  return (
    <Group>
      <Button variant="outline" onClick={onClickViewButton}>
        <IconEye className={classes.link} />
      </Button>
      <Button variant="outline" onClick={onClickRemoveButton}>
        <IconTrash className={classes.link} />
      </Button>
    </Group>
  );
};

export default Actions;
