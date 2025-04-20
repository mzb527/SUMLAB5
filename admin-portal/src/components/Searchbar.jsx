import React from 'react';
import './SearchBar.css'; // Optional: Add styles for the search bar

const SearchBar = ({ query, setQuery }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a product..."
      />
    </div>
  );
};

export default SearchBar;