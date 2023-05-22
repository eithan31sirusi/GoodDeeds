import React, { useState } from "react";

const FilterUsersSearchBar = (filteredUsers) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    // Perform search or filtering logic here
    // For example, you can filter the list of users based on the search term
    filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Update the filtered users list or trigger any other actions based on the search term
    // ...
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
