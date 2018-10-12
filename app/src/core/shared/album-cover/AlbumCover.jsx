import React from 'react';
import PropTypes from 'prop-types';

import styles from './AlbumCover.css';

const AlbumCover = (props) => (
  <figure className={`${styles.figure} ${props.className}`}>
    <img className={styles.image} src={props.src} alt={props.alt} />

    {props.details && (
      <figcaption className={styles.details}>
        {props.details.map((detail) => <span key={detail}>{detail}</span>)}
      </figcaption>
    )}
  </figure>
);

AlbumCover.defaultProps = {
  className: '',
  details: null,
};

AlbumCover.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string),
};

export default AlbumCover;
