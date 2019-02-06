import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Nav from 'react-bootstrap/Nav';

//import { Container } from './nav.css';

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link as="span">
      <Link to="/about">About</Link>
    </Nav.Link>
    <Nav.Link as="span">
      <Link to="/">Projects</Link>
    </Nav.Link>
  </Nav>
);

MainNav.propTypes = {
  title: PropTypes.string,
};

export default MainNav;
