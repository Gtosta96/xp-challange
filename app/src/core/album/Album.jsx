/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Album.css';

const Album = (props) => (
  <div className={styles.album}>
    <span className={styles.feedback}>Resultados encontrados para "{props.query}"</span>

    {props.albums.map((album) => (
      <figure className={styles.figure} key={album.id}>
        <img className={styles.image} src={album.images[0].url} alt="Orangotango jovem pendurado em uma corda" />
        <figcaption className={styles.details}>
          <span>{album.name}</span>
          <span>{album.artists[0].name}</span>
        </figcaption>
      </figure>
    ))}
  </div>
);

Album.defaultProps = {};
Album.propTypes = {};

export default Album;
