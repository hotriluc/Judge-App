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
      color="red"
    ></NavLink>
  ));

  //for better aligning
  //1px icon-size => 1.6px children offset
  //e.g 20px icon => 32px offset
  return (
    <NavLink
      key={label}
      label={label}
      component={Link}
      to={path}
      active={location.pathname === path}
      icon={<Icon size={20} stroke={1.5} />}
      childrenOffset={32}
      color="red"
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
