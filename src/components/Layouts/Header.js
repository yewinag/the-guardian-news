import React from 'react';
import SearchInput from '../Common/SearchInput';

function Header() {
  return (
    <header className="header">
      <nav className=" app-container header-nav">
        <a href="/">
          <h2 className="title">
            <small>The</small>
            <span>Peaks</span>
          </h2>
        </a>
        <div className="search">
          <SearchInput />
        </div>
      </nav>
    </header>
  );
}

export default Header;
