import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
//import posed from 'react-pose';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//import { Container } from './header.css';
import Title from 'components/title';
//import MainNav from 'components/header/nav';

// Example of a component-specific page transition
// const AnimatedContainer = posed.div({
//   enter: {
//     y: 0,
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     y: '-100%',
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
// });

const Header = ({ title }) => (
  <Navbar bg="dark" fixed="bottom">
    <Navbar.Brand>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as="span">
        <Link to="/about">About</Link>
      </Nav.Link>
      <Nav.Link as="span">
        <Link to="/">Projects</Link>
      </Nav.Link>
    </Nav>{' '}
    {/* <MainNav /> */}
  </Navbar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
