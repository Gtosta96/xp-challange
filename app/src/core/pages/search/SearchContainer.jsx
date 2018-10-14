import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { search } from 'app-redux/modules/search/search.reducer';

import Search from './Search';

class SearchContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.searchTypeHandler = this.searchTypeHandler.bind(this);
    this.albumClickHandler = this.albumClickHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.query) this.props.search(this.props.query);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.props.search(this.props.query);
    }
  }

  searchTypeHandler(event) {
    this.props.search(event.target.value);
  }

  albumClickHandler(album) {
    return () => this.props.history.push(`/album/${album.id}`);
  }

  render() {
    return (
      <Search
        searchTypeHandler={this.searchTypeHandler}
        albumClickHandler={this.albumClickHandler}
        {...this.props}
      />
    );
  }
}

SearchContainer.defaultProps = {
  query: null,
  items: [],
};

SearchContainer.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,

  search: PropTypes.func.isRequired,
  query: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  isFetching: state.search.isFetching,
  query: state.search.query,
  items: state.search.items,
});

const mapDispatchToProps = ({
  search,
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
