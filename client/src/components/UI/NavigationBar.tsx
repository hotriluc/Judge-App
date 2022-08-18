import React from 'react';
import { createStyles, Navbar, Group, Code, ScrollArea } from '@mantine/core';
import { IconHome, IconDashboard, IconBook, IconPencil } from '@tabler/icons';
import LinksGroup from './NavBarLinksGroup';
import NavigationMenu from './NavigationMenu';

// Navbar links
// dashboard only for admin
const linksData = [
  { label: 'Home', icon: IconHome, link: '/' },
  {
    label: 'Dashboard',
    icon: IconDashboard,
    links: [
      { label: 'Students', link: '/students' },
      { label: 'Courses', link: '/' },
    ],
  },
  {
    label: 'Courses',
    icon: IconBook,
    links: [
      { label: 'New courses', link: '/courses' },
      { label: 'Enrolled courses', link: '/' },
    ],
  },
  {
    label: 'Solutions',
    icon: IconPencil,
    links: [
      { label: 'Applied solutions', link: '/solutions' },
      { label: 'Drafts', link: '/solutions-drafts' },
    ],
  },
];

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

const NavigationBar = () => {
  const { classes } = useStyles();
  const links = linksData.map((item) => (
    <LinksGroup {...item} key={item.label} />
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
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <NavigationMenu />
      </Navbar.Section>
    </Navbar>
  );
};

export default NavigationBar;
