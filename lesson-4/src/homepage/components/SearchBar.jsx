import React from "react";

const SearchBar = (searcTerm, setSearchTerm) => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 ">
        <h3>Search</h3>
        <input
          type="text"
          value={searcTerm}
          className="border border-zinc-400 p-2"
          onChange={(e) => {
            setSearchTerm = e.target.value;
          }}
          placeholder="Search for items"
        />
      </div>
    </>
  );
};

export default SearchBar;
