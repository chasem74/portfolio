import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Nav from 'react-bootstrap/Nav';

import { Container } from './nav.css';

const SimpleNavLink = ({ to, label, as = 'li' }) => {
  return (
    <Nav.Link as={as} eventKey={to}>
      <Link to={to}>{label}</Link>
    </Nav.Link>
  );
};

SimpleNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  as: PropTypes.string,
};

const MainNav = () => (
  <Container>
    <Nav className="mr-auto" variant="pills" as="ul">
      <SimpleNavLink to="/about" label="About" />
      <SimpleNavLink to="/" label="Projects" />
    </Nav>
  </Container>
);

export default MainNav;
