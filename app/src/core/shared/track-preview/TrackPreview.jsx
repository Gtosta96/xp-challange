/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import PropTypes from 'prop-types';

// import styles from './TrackPreview.css';

const TrackPreview = (props) => (
  <div>
    <span>{props.name}</span>
    <audio controls>
      {props.sources.map((source) => <source key={source.url} src={source.url} type={source.type} />)}

      O seu navegador não suporta o elemento <code>audio</code>.
    </audio>
  </div>
);

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
