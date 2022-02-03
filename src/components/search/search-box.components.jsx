import React from 'react';
import "./search-box.styles.css";

const SearchBox = ({placeholder,props}) => {
  return (<div className='searchs'>
      <input 
      type='search' 
      placeholder={placeholder} 
      onChange={props}></input>
  </div>);
};

export default SearchBox;
