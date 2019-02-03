import React from 'react';
import PropTypes from 'prop-types';
//import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, description, url }) => (
  <figure>
    {/* <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} /> */}
    <figcaption>
      <a href={url}>
        <Title>{title}</Title>
      </a>
      <Copy>{description}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  //  image: PropTypes.object.isRequired,
};

export default Item;
