import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getAuthorization } from '../redux/modules/authorization/authorization.reducer';

import Application from './Application';

class ApplicationContainer extends PureComponent {
  componentDidMount() {
    this.props.getAuthorization();
  }

  render() {
    return (
      <Application {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({
  getAuthorization,
});

ApplicationContainer.defaultProps = {};

ApplicationContainer.propTypes = {
  getAuthorization: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);
