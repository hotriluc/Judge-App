import React from 'react';
import { IconEye, IconTrash } from '@tabler/icons';
import { Button, createStyles, Group } from '@mantine/core';

const useStyles = createStyles(() => ({
  link: {
    width: 20,
  },
}));

const Actions = (props: {
  id: string;
  removeFn(id: string): void;
}): JSX.Element => {
  const { classes } = useStyles();

  const onClickViewButton = () => {
    console.log(props.id);
  };

  const onClickRemoveButton = () => {
    props.removeFn(props.id);
  };

  return (
    <Group>
      <Button onClick={onClickViewButton}>
        <IconEye className={classes.link} />
      </Button>
      <Button onClick={onClickRemoveButton}>
        <IconTrash className={classes.link} />
      </Button>
    </Group>
  );
};

export default Actions;
