import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Album from './Album';

class AlbumsContainer extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    if (this.props.items.length === 0) return null;

    return <Album albums={this.props.items} query={this.props.query} />;
  }
}

AlbumsContainer.defaultProps = {
  items: [],
  query: null,
};

AlbumsContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string,
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  items: state.search.items,
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer);
