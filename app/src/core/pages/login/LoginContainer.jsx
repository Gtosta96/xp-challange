import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { apiUrl } from 'app-config/constants';

import Login from './Login';

class LoginContainer extends PureComponent {
  static get spotifyURL() {
    return `${apiUrl.authorization}?client_id=e1b64e07e993491f9904ac5f44876dfa&response_type=token&redirect_uri=http://localhost:8080/home`;
  }

  render() {
    return (
      <Login url={this.constructor.spotifyURL} {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({});

LoginContainer.defaultProps = {};

LoginContainer.propTypes = {};


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
