/* eslint-disable jsx-a11y/media-has-caption */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './TrackPreview.css';

class TrackPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();

    this.toggleAudio = this.toggleAudio.bind(this);
  }

  toggleAudio() {
    if (this.audioRef.current.paused) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  render() {
    return (
      <li className={styles.container}>
        <div className={styles.info}>
          <span className={styles.controls} onClick={this.toggleAudio}>
            <i className="material-icons">music_note</i>
          </span>

          <span>{this.props.name}</span>
        </div>

        <div className={styles.preview} />

        <audio ref={this.audioRef} className={styles.audio}>
          {this.props.sources.map((source) => <source key={source.url} src={source.url} type={source.type} />)}

          O seu navegador não suporta o elemento <code>audio</code>.
        </audio>
      </li>
    );
  }
}

TrackPreview.defaultProps = {};

TrackPreview.propTypes = {
  name: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
};

export default TrackPreview;
