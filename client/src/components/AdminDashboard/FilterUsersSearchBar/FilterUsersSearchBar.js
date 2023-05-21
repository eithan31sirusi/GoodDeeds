import React, { useState } from "react";

const FilterUsersSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search or filtering logic based on the searchTerm
    // Update the users list accordingly
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Users"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default FilterUsersSearchBar;
