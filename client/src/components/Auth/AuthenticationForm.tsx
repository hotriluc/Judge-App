import React, { useEffect } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import { createSession } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

// Styling
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
  const navigate = useNavigate();

  const { classes } = useStyle();
  const [type, toggle] = useToggle(['login', 'register']);

  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  // Form declaration
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },

    validateInputOnChange: true,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      // password: (value) => (value.length >= 6 ? null : 'Invalid password'),
    },
  });
  type FormValues = typeof form.values;

  // Effects
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  // Handlers
  const onAnchorClickHandler = () => {
    toggle();
    form.reset();
  };

  const onSubmitHandler = (values: FormValues) => {
    dispatch(createSession(values));
  };

  return (
    <div className={classes.wrapper}>
      <Paper radius={0} className={classes.form}>
        <Title order={2}>
          {type === 'register' ? 'Registration ' : 'Welcome to Judge'}
        </Title>
        <form onSubmit={form.onSubmit((values) => onSubmitHandler(values))}>
          {type === 'register' && (
            <>
              <TextInput required label="Name" placeholder="Name" mt="md" />
              <TextInput
                required
                label="Last name"
                placeholder="Last name"
                mt="md"
              />
            </>
          )}
          <TextInput
            required
            label="Email"
            placeholder="expample@example.com"
            {...form.getInputProps('email')}
            mt="md"
          />
          <PasswordInput
            required
            label="Password"
            placeholder="Password"
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
            <Anchor
              component="button"
              type="button"
              onClick={onAnchorClickHandler}
            >
              {type === 'register' ? 'Login' : 'Register'}
            </Anchor>
          </Text>
        </form>
      </Paper>
    </div>
  );
};

export default AuthenticationForm;
