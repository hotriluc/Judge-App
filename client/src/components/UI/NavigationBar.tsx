import React from 'react';
import { createStyles, Navbar, Group, Code, ScrollArea } from '@mantine/core';
import NavigationMenu from './NavigationMenu';
import { ILink } from '../../interfaces/Link';
import NavLinksGroup from './NavLinksGroup';
import { IconBook, IconDashboard, IconHome, IconPencil } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const links: Array<ILink> = [
  { icon: IconHome, label: 'Home', path: '/' },
  { icon: IconDashboard, label: 'Dashboard', path: '/dashboard' },
  {
    icon: IconBook,
    label: 'Courses',
    path: '/courses',
    links: [{ label: 'Enrolled', path: '/enrolled' }],
  },
  {
    icon: IconPencil,
    label: 'Solutions',
    path: '/solutions',
    links: [
      { label: 'Applied', path: '/applied' },
      { label: 'Drafts', path: '/drafts' },
    ],
  },
];

const NavigationBar = () => {
  const { classes } = useStyles();
  const linksGroup = links.map((item) => (
    <NavLinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar
      height={'100vh'}
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
    >
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{linksGroup}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <NavigationMenu />
      </Navbar.Section>
    </Navbar>
  );
};

export default NavigationBar;
