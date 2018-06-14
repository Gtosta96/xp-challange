import React from 'react';

import SearchContainer from '../search/SearchContainer';

const Home = (props) => (
  <div>
    <SearchContainer />
    <div>Home</div>
  </div>
);

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
