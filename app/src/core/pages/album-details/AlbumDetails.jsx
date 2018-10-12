import React from 'react';
import PropTypes from 'prop-types';

import AlbumCover from 'app-core/shared/album-cover/AlbumCover';
import TrackPreview from 'app-core/shared/track-preview/TrackPreview';
import Spotify from 'app-core/shared/spotify/Spotify';

import styles from './AlbumDetails.css';

const AlbumDetails = (props) => (
  <div className={styles.container}>
    <Spotify />

    <AlbumCover
      className={styles.cover}
      src={props.album.images[0].url}
      alt="Orangotango jovem pendurado em uma corda"
      details={[props.album.name, props.album.artists[0].name]}
    />

    <ul className={styles.tracks}>
      {props.album.tracks.items.map((track) => (
        <TrackPreview
          key={track.preview_url}
          name={track.name}
          sources={[{ url: track.preview_url, type: 'audio/mp3' }]}
        />
      ))}
    </ul>
  </div>
);

AlbumDetails.defaultProps = {};
AlbumDetails.propTypes = {
  album: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AlbumDetails;
