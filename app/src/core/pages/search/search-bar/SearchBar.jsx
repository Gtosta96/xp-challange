import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.css';

const Search = (props) => (
  <div className={styles.search}>
    { props.hint && <span className={styles.hint}>{props.hint}</span> }

    <input
      type="text"
      className={styles.input}
      placeholder={props.placeholder}
      value={props.query}
      onChange={props.onChange}
    />
  </div>
);

Search.defaultProps = {
  hint: null,
  placeholder: null,
  query: null,
  onChange: null,
};

Search.propTypes = {
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  query: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;
