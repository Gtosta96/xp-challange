import React from 'react';

import SearchContainer from './search/SearchContainer';
import AlbumContainer from './album/AlbumContainer';

const Search = () => (
  <div>
    <SearchContainer />
    <AlbumContainer />
  </div>
);

Search.defaultProps = {};
Search.propTypes = {};

export default Search;
