import React from 'react';
import PropTypes from 'prop-types';

import Spotify from 'app-core/shared/spotify/Spotify';

import styles from './Template.css';

const Template = (props) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <Spotify />
    </div>
    <div className={styles.right}>
      {props.children}
    </div>
  </div>
);

Template.defaultProps = {};
Template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Template;
