import React, { useState } from "react";

const FilterGoodDeedsSearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Pass the search query to the parent component
    onSearch(searchQuery);

    // Reset the search query
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Good Deeds"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FilterGoodDeedsSearchBar;
