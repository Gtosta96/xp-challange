import React from 'react';
import PropTypes from 'prop-types';

import AlbumCover from 'app-core/shared/album-cover/AlbumCover';
import TrackPreviewList from 'app-core/shared/track-preview/TrackPreviewList';

import styles from './AlbumDetails.css';

const AlbumDetails = (props) => (
  <div className={styles.container}>
    <AlbumCover
      className={styles.cover}
      src={props.album.images[0].url}
      alt="Orangotango jovem pendurado em uma corda"
      name={props.album.name}
      singer={props.album.artists[0].name}
    />

    <TrackPreviewList album={props.album} />
  </div>
);

AlbumDetails.defaultProps = {};
AlbumDetails.propTypes = {
  album: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AlbumDetails;
