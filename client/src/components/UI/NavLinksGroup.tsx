import { createStyles, NavLink } from '@mantine/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ILink } from '../../interfaces/Link';

const useStyle = createStyles(() => ({
  link: {
    // color: 'blue',
  },
  subLinks: {
    // paddingLeft: 32,
  },
  label: {},
}));

const NavLinksGroup = ({ icon: Icon, path, label, links }: ILink) => {
  const location = useLocation();
  const { classes } = useStyle();

  const subLinks = links?.map((subLink) => (
    <NavLink
      key={subLink.label}
      label={subLink.label}
      component={Link}
      to={`${path}${subLink.path}`}
      active={location.pathname === `${path}${subLink.path}`}
    ></NavLink>
  ));

  // Set active link depends on location
  // Split the location path and filter it for non-empty strings
  // the first element will be root
  // e.g /dashboard/courses => ['dashboard', 'courses']
  // if location path has arr[0] ('dashboard') then links is active
  // otherwise inactive
  const isActive = (): boolean => {
    const locationPath = location.pathname;
    const splittedPath = locationPath.split('/').filter((el) => el !== '');
    return (
      locationPath === path ||
      (splittedPath.length > 0 && path.includes(splittedPath[0]) && !links)
    );
  };

  //for better aligning
  //1px icon-size => 1.6px children offset
  //e.g 20px icon => 32px offset
  return (
    <NavLink
      key={label}
      label={label}
      component={Link}
      to={path}
      active={isActive()}
      icon={<Icon size={20} stroke={1.5} />}
      childrenOffset={32}
      classNames={{
        root: classes.link,
        label: classes.label,
        children: classes.subLinks,
      }}
    >
      {links && subLinks}
    </NavLink>
  );
};

export default NavLinksGroup;
