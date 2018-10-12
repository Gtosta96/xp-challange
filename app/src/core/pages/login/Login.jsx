import React from 'react';
import PropTypes from 'prop-types';

import styles from './Login.css';

const Login = (props) => (
  <div className={styles.container}>
    <a href={props.url}>
      <button className={styles.login}>Login</button>
    </a>
  </div>
);

Login.defaultProps = {};
Login.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Login;
