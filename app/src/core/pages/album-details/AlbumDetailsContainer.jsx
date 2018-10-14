import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { search, clear } from 'app-redux/modules/album-details/album-details.reducer';

import Loading from 'app-core/shared/loading/Loading';

import AlbumDetails from './AlbumDetails';

class AlbumDetailsContainer extends PureComponent {
  componentDidMount() {
    if (!this.props.album) {
      this.props.search(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    if (!this.props.album) return <Loading />;

    return <AlbumDetails {...this.props} />;
  }
}

AlbumDetailsContainer.defaultProps = {
  album: null,
};

AlbumDetailsContainer.propTypes = {
  album: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  search: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  album: state.albumDetails.album,
});

const mapDispatchToProps = ({
  search,
  clear,
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetailsContainer);
