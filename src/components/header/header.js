import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import Navbar from 'react-bootstrap/Navbar';

import Title from 'components/title';
import { Container } from './header.css';
import MainNav from './nav/nav';

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Navbar fixed="top" bg="dark" variant="dark" expand="md">
        <Navbar.Brand>
          <Link to="/">
            <Title as="h1">{title}</Title>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <MainNav />
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
