import React from 'react';
import PropTypes from 'prop-types';

import AlbumCover from 'app-core/shared/album-cover/AlbumCover';

import styles from './Album.css';

const Album = (props) => (
  <div className={styles.container}>
    <span className={styles.feedback}>Resultados encontrados para &quot;{props.query}&quot;</span>

    <div className={styles.albums}>
      {props.albums.map((album) => (
        <div key={album.id} className={styles.album} onClick={props.onClick(album)}>
          <AlbumCover
            src={album.images[0].url}
            alt="Orangotango jovem pendurado em uma corda"
            name={album.name}
            singer={album.artists[0].name}
          />
        </div>
      ))}
    </div>
  </div>
);

Album.defaultProps = {
  onClick: () => {},
};

Album.propTypes = {
  query: PropTypes.string.isRequired,
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
};

export default Album;
