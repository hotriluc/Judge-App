import {
  Avatar,
  createStyles,
  Group,
  UnstyledButton,
  Text,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import React from 'react';
import { useAppSelector } from '../../hooks/app-hooks';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
  group: {
    gap: 12,
  },
}));

const UserButton = () => {
  const { classes } = useStyles();
  const currentUser = useAppSelector((state) => state.auth.user);

  return (
    <UnstyledButton className={classes.user}>
      <Group className={classes.group}>
        <Avatar src={''} radius="md" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {currentUser.last_name}
          </Text>

          <Text color="dimmed" size="xs">
            {currentUser.email}
          </Text>
        </div>

        {'' || <IconChevronRight size={14} stroke={1.5} />}
      </Group>
    </UnstyledButton>
  );
};

export default UserButton;
