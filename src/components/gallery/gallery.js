import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ items, title }) => (
  <Container>
    <h1>{title}</h1>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default Gallery;
