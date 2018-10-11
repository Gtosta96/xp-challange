import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.css';

const Search = (props) => (
  <div className={styles.search}>
    <span className={styles.hint}>{props.hint}</span>
    <input
      className={styles.input}
      type="text"
      placeholder={props.placeholder}
      defaultValue={props.query}
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
