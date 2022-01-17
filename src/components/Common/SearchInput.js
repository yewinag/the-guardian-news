import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const [query, searchOnchange] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    searchOnchange(e.target.value);
    if (e.key === 'Enter') {
      navigate(`/search/${query}`);
    }
  };
  return (
    <input
      className="search-input"
      type="text"
      value={query}
      onChange={handleInputChange}
      onKeyDown={handleInputChange}
    />
  );
}

export default SearchInput;
