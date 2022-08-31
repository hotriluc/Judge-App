import { createStyles } from '@mantine/core';
import React from 'react';

const useStyle = createStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
    padding: theme.spacing.xl,
  },
}));

const Wrapper = (props: { children: JSX.Element | JSX.Element[] }) => {
  const { classes } = useStyle();
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default Wrapper;
