import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Search from './Search';

class SearchContainer extends PureComponent {
  render() {
    return (
      <Search {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({});

SearchContainer.defaultProps = {};

SearchContainer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
