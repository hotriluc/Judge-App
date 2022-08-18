import React from 'react';
import { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons';
import {
  Group,
  Avatar,
  Text,
  UnstyledButton,
  createStyles,
} from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const useStyle = createStyles((theme) => ({
  button: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => {
    const { classes } = useStyle();

    return (
      <UnstyledButton ref={ref} {...others} className={classes.button}>
        <Group>
          <Avatar src={image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <IconChevronRight size={16} />}
        </Group>
      </UnstyledButton>
    );
  }
);

UserButton.displayName = 'UserButton';
export default UserButton;
