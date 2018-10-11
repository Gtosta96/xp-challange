import React from 'react';

import SearchContainer from '../search/SearchContainer';
import AlbumContainer from '../album/AlbumContainer';

import styles from './Home.css';

const Home = () => (
  <div className={styles.home}>
    <SearchContainer />
    <AlbumContainer />
  </div>
);

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
