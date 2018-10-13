import React from 'react';
import PropTypes from 'prop-types';

import styles from './AlbumCover.css';

const AlbumCover = (props) => (
  <figure className={`${styles.figure} ${props.className}`}>
    <img className={styles.image} src={props.src} alt={props.alt} />

    <figcaption className={styles.details}>
      <span className={styles.name}>{props.name}</span>
      <span className={styles.singer}>{props.singer}</span>
    </figcaption>
  </figure>
);

AlbumCover.defaultProps = {
  className: '',
};

AlbumCover.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
};

export default AlbumCover;
