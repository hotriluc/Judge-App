import { Menu, Text } from '@mantine/core';
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconSearch,
  IconSettings,
  IconLogout,
} from '@tabler/icons';
import React from 'react';
import UserButton from '../Users/UserButton';

const NavigationMenu = () => {
  return (
    <Menu shadow="md" width={270}>
      <Menu.Target>
        <UserButton image="" name="Luc Ho" email="example@example.com" />
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
        <Menu.Item color="red" icon={<IconLogout size={14} />}>
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavigationMenu;
