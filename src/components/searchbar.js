import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
//import axios here 

export default function SearchBarWithDropdown() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSearch = () => {
    const searchResult = `Searching for ${selectedOption} - ${searchQuery}`;
    console.log(searchResult);
    setSearchQuery('');
    setSelectedOption('');
  };

  return (
    <div className='searchbar'>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className={`searchbar-input ${isActive ? '' : 'default'}`}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}>
      </input>
      <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
        <option value="">All Categories</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}><FaSearch style={{ fontSize: '20px', opacity:'80%' }} /></button>
    </div>
  );
}
