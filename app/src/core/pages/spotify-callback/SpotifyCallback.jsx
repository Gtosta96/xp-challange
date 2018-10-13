import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { paths } from 'app-config/constants';
import { saveAuthorizationData } from 'app-redux/modules/authorization/authorization.reducer';

class SearchContainer extends PureComponent {
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
      <Redirect to={`/${paths.search}`} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({
  saveAuthorizationData,
});

SearchContainer.defaultProps = {};

SearchContainer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
  saveAuthorizationData: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
