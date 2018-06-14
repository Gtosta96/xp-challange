import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import Home from './Home';

class HomeContainer extends PureComponent {
  render() {
    return (
      <Home url={this.constructor.spotifyURL} {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({});

HomeContainer.defaultProps = {};

HomeContainer.propTypes = {};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
