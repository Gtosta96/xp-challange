import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { saveAuthorizationData } from '../../redux/modules/authorization/authorization.reducer';

import Home from './Home';

class HomeContainer extends PureComponent {
  static parseQueryString(queryString) {
    const result = queryString
      .replace(/\?|#/, '')
      .split('&')
      .reduce((prev, cur) => {
        const [key, value] = cur.split('=');
        return { ...prev, [key]: value };
      }, {});

    return result;
  }

  componentDidMount() {
    const params = this.constructor.parseQueryString(this.props.location.search || this.props.location.hash);
    this.props.saveAuthorizationData(params);
  }

  render() {
    return (
      <Home url={this.constructor.spotifyURL} {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({
  saveAuthorizationData,
});

HomeContainer.defaultProps = {};

HomeContainer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
  saveAuthorizationData: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
