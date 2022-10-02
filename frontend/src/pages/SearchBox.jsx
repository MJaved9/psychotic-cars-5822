import React from 'react';
import styled from './serchbox.module.css';
const SearchBox = () => {
    return  <div>
    <input className={styled.search_Box} type="text" name="search" placeholder="Search"/>
  </div>
}


export default SearchBox;