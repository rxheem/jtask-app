import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavItem = props => {
  return (
    <Nav.Item as='li' className='m-nav-li'>
      <Link className='nav-link m-nav-link' to={props.to}>
        {props.title}
      </Link>
    </Nav.Item>
  );
};

export default MainNavItem;
