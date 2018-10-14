/* eslint-disable jsx-a11y/media-has-caption, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './TrackPreviewList.css';

class TrackPreview extends PureComponent {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.state = { icon: 'music_note', preview: false };

    this.toggleAudio = this.toggleAudio.bind(this);
    this.onPlayListener = this.onPlayListener.bind(this);
    this.onPauseListener = this.onPauseListener.bind(this);
  }

  componentDidMount() {
    this.ref.current.addEventListener('play', this.onPlayListener);
    this.ref.current.addEventListener('pause', this.onPauseListener);
  }

  componentDidUpdate() {
    if (this.props.standalone) return;

    if (this.props.isPlaying) {
      this.ref.current.play();
    } else {
      this.ref.current.pause();
    }
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener('play', this.onPlayListener);
    this.ref.current.removeEventListener('pause', this.onPauseListener);
  }

  onPlayListener() {
    this.setState({ icon: 'play_arrow', preview: true });
  }

  onPauseListener() {
    this.setState({ icon: 'stop', preview: false });
    this.ref.current.currentTime = 0;
  }

  toggleAudio() {
    if (this.ref.current.paused) {
      this.ref.current.play();
      this.props.onPlay(this.props.track, this.ref);
    } else {
      this.ref.current.pause();
      this.props.onPause(this.props.track, this.ref);
    }
  }

  render() {
    return (
      <li className={styles.container} onClick={this.toggleAudio}>
        <div className={styles.info}>
          <span className={styles.controls}>
            <i className="material-icons">{this.state.icon}</i>
          </span>

          <span>{this.props.track.name}</span>
        </div>

        {this.state.preview && <div className={styles.preview} /> }

        <audio ref={this.ref} className={styles.audio}>
          <source src={this.props.track.preview_url} type="audio/mp3" />

          O seu navegador não suporta o elemento <code>audio</code>.
        </audio>
      </li>
    );
  }
}

TrackPreview.defaultProps = {
  standalone: false,
  isPlaying: null,
  onPlay: () => {},
  onPause: () => {},
};

TrackPreview.propTypes = {
  standalone: PropTypes.bool,
  isPlaying: PropTypes.bool,
  track: PropTypes.objectOf(PropTypes.any).isRequired,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
};

export default TrackPreview;
