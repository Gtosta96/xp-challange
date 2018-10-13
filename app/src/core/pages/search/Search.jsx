import React, { Fragment } from 'react';

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

    <Album
      query={props.query}
      albums={props.items}
      onClick={props.albumClickHandler}
    />
  </Fragment>
);

Search.defaultProps = {};
Search.propTypes = {};

export default Search;
