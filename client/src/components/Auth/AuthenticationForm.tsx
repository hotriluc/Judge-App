import React from 'react';
import {
  Paper,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Group,
  Anchor,
  Button,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';

const useStyle = createStyles(() => ({
  wrapper: {
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80)',
  },
  form: {
    minHeight: '100vh',
    maxWidth: 450,
    padding: '8rem 2rem 0 2rem',
  },
  imageHolder: {
    maxHeight: '100vh',
  },
}));

const AuthenticationForm = (): JSX.Element => {
  const [type, toggle] = useToggle(['login', 'register']);
  // Define the form
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validateInputOnChange: true,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Invalid password'),
    },
  });

  // Get styles
  const { classes } = useStyle();

  return (
    <div className={classes.wrapper}>
      <Paper radius={0} className={classes.form}>
        <Title order={2}>Welcome to Judge</Title>
        <form onSubmit={form.onSubmit((value) => console.log(value))}>
          <TextInput
            required
            label="Email"
            placeholder="expample@example.com"
            {...form.getInputProps('email')}
            mt="xl"
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
            mt="md"
          />

          <Group mt="xl">
            <Button fullWidth type="submit">
              {upperFirst(type)}
            </Button>
          </Group>
          <Text align="center" mt="md">
            {type === 'register'
              ? 'Already have an account? '
              : "Don't have an account? "}
            <Anchor component="button" type="button" onClick={() => toggle()}>
              {upperFirst(type)}
            </Anchor>
          </Text>
        </form>
      </Paper>
    </div>
  );
};

export default AuthenticationForm;
