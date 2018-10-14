/* eslint-disable jsx-a11y/media-has-caption */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TrackPreview from './TrackPreview';

import styles from './TrackPreviewList.css';

class TrackPreviewList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { tracks: [] };

    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
  }

  componentDidMount() {
    const tracks = this.props.album.tracks.items.map((track) => ({
      item: track,
      isPlaying: false,
    }));

    this.setState({ tracks }); // eslint-disable-line react/no-did-mount-set-state
  }

  onPlay(track) {
    const tracks = this.props.album.tracks.items.map((t) => ({
      item: t,
      isPlaying: t === track,
    }));

    this.setState({ tracks });
  }

  onPause(track) {
    const tracks = this.props.album.tracks.items.map((t) => ({
      item: t,
      isPlaying: t === track && t.isPlaying,
    }));

    this.setState({ tracks });
  }

  render() {
    return (
      <ul className={styles.tracks}>
        {this.state.tracks.map((track) => (
          <TrackPreview
            key={track.item.id}
            track={track.item}
            isPlaying={track.isPlaying}

            onPlay={this.onPlay}
            onPause={this.onPause}
          />
        ))}
      </ul>
    );
  }
}

TrackPreviewList.defaultProps = {};

TrackPreviewList.propTypes = {
  album: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TrackPreviewList;
