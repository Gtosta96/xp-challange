/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';

import AlbumCover from 'app-core/shared/album-cover/AlbumCover';

import styles from './Showcase.css';

const Showcase = (props) => (
  <div className={styles.container}>
    { props.query && <span className={styles.feedback}>Resultados encontrados para &quot;{props.query}&quot;</span> }

    <div className={styles.albums}>
      {props.albums.map((album) => (
        <div key={album.id} className={styles.album} onClick={props.onClick(album)}>
          <AlbumCover
            src={album.images[0].url}
            alt={`Album - ${props.query}`}
            name={album.name}
            singer={album.artists[0].name}
          />
        </div>
      ))}
    </div>
  </div>
);

Showcase.defaultProps = {
  onClick: () => {},
};

Showcase.propTypes = {
  query: PropTypes.string.isRequired,
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
};

export default Showcase;
