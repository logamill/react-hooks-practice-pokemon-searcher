import React from "react";

function Search({ handleSearch, searchedPoke }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          onChange={handleSearch} 
          value={searchedPoke}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
