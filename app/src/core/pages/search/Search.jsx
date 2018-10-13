import React, { Fragment } from 'react';

import SearchContainer from './search/SearchContainer';
import AlbumContainer from './album/AlbumContainer';

const Search = () => (
  <Fragment>
    <SearchContainer />
    <AlbumContainer />
  </Fragment>
);

Search.defaultProps = {};
Search.propTypes = {};

export default Search;
