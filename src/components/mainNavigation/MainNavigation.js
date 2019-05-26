import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Tooltip
import PopUpOverlay from '../../common/popUpOverlay/PopUpOverlay';

import MainNavItem from './views/MainNavItem';

// Importing all images
import FBIcon from './imgs/f_logo_RGB-Blue_1024.png';
import IGIcon from './imgs/glyph-logo_May2016.png';
import YTIcon from './imgs/youtube_social_icon_red.png';

// Info Icon
import InfoIcon from '../../common/infoIcon/InfoIcon';

// Style
import './css/MainNavigation.css';

class MainNavigation extends Component {
  render() {
    return (
      <Navbar
        bg='light'
        variant='light'
        id='MainNavigation'
        className='animated fadeIn'
      >
        <Navbar.Brand href='/'>JT Ask</Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar-nav' />

        <Navbar.Collapse id='main-navbar-nav'>
          <Nav className='justify-content-end mr-auto'>
            <MainNavItem title='Ask' to='/top-questions/' />
            <MainNavItem title='Top Questions' to='/top-questions/' />
            <Nav.Link>
              <PopUpOverlay
                key='bottom'
                placement='bottom'
                tooltip='Watch on Facebook'
              >
                <img className='nav-img' src={FBIcon} alt='Watch on Facebook' />
              </PopUpOverlay>
            </Nav.Link>
            <PopUpOverlay
              key='bottom'
              placement='bottom'
              tooltip='Follow us on Instagram'
            >
              <Nav.Link>
                <img
                  className='nav-img'
                  src={IGIcon}
                  alt='Follow us on Instagram'
                />
              </Nav.Link>
            </PopUpOverlay>
            <PopUpOverlay
              key='bottom'
              placement='bottom'
              tooltip='Watch on YouTube'
            >
              <Nav.Link>
                <img
                  className='nav-img'
                  src={YTIcon}
                  alt='Watch Us On YouTube'
                />
              </Nav.Link>
            </PopUpOverlay>
          </Nav>
          <Nav className='justify-content-end ml-auto mr-sm-1'>
            <MainNavItem title='Privacy' to='/privacy/' />
            <MainNavItem title='Sign In' to='/sign-in/' />

            <Form inline>
              <FormControl
                type='text'
                placeholder='Search for a question'
                className='mr-sm-2'
              />
              <Button variant='outline-primary'>Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavigation;
