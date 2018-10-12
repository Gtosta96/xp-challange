import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Album from './Album';

class AlbumContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onAlbumClickHandler = this.onAlbumClickHandler.bind(this);
  }

  onAlbumClickHandler(album) {
    return () => this.props.history.push(`/album/${album.id}`);
  }

  render() {
    return (
      <Album
        albums={this.props.items}
        query={this.props.query}
        onAlbumClick={this.onAlbumClickHandler}
      />
    );
  }
}

AlbumContainer.defaultProps = {
  items: [],
  query: null,
};

AlbumContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  items: state.search.items,
});

const mapDispatchToProps = ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumContainer));
