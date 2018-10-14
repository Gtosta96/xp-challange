import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Loading from 'app-core/shared/loading/Loading';

import SearchBar from './search-bar/SearchBar';
import Album from './album/Album';

const Search = (props) => (
  <Fragment>
    <SearchBar
      // hint="Busque por artistas, álbuns ou músicas"
      placeholder="Comece a escrever..."
      query={props.query}
      onChange={props.searchTypeHandler}
    />

    {props.isFetching
    ? <Loading />
    : <Album
      query={props.query}
      albums={props.items}
      onClick={props.albumClickHandler}
    />
    }
  </Fragment>
);

Search.defaultProps = {};
Search.propTypes = {
  isFetching: PropTypes.bool.isRequired,

  query: PropTypes.string.isRequired,
  searchTypeHandler: PropTypes.func.isRequired,
  items: PropTypes.objectOf(PropTypes.any).isRequired,
  albumClickHandler: PropTypes.func.isRequired,
};

export default Search;
