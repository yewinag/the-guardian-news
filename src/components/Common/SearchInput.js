import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Search } from '../../assets/search.svg';

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
    <div className="search-input-layout">
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
      />
      <Search className="search-icon" />
    </div>
  );
}

export default SearchInput;
