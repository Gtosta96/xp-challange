import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
  <a href={props.url}>click</a>
);

Login.defaultProps = {};
Login.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Login;
