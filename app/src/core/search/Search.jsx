import React from 'react';

import styles from './Search.css';

const Search = (props) => {
  return (
    <div className={props.className}>
      <span>{props.hint}</span>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Search;
