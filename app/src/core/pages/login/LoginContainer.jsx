import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { apiUrl, spotifyConfig } from 'app-config/constants';

import Login from './Login';

class LoginContainer extends PureComponent {
  static get spotifyURL() {
    return `${apiUrl.authorization}?client_id=${spotifyConfig.clientId}&response_type=token&redirect_uri=${spotifyConfig.redirectURI}`;
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
