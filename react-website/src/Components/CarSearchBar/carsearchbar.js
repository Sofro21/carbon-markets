import React, { useState } from "react";
import data from "./car_data.json";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getSuggestions = () => {
    if (searchTerm.trim() === "") {
      return [];
    }
    return data
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.emmision.localeCompare(b.emmision))
      .slice(0, 5)
      .map((item) => item.name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {getSuggestions().map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
