import { Menu, Text } from '@mantine/core';
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconSearch,
  IconSettings,
  IconLogout,
} from '@tabler/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import { stopSession } from '../../services/AuthService';
import UserButton from './UserButton';

const NavigationMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.user);

  const onClickLogoutHandler = () => {
    dispatch(stopSession());
    navigate('/login');
  };

  return (
    <Menu shadow="md" width={270}>
      <Menu.Target>
        <UserButton
          image=""
          name={`${currentUser.first_name} ${currentUser.last_name}`}
          email={currentUser.email}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
          Change account
        </Menu.Item>
        <Menu.Item
          onClick={onClickLogoutHandler}
          color="red"
          icon={<IconLogout size={14} />}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavigationMenu;
