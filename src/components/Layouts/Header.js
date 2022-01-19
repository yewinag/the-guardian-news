import React from 'react';
import { SearchInput } from '../Common';
import '../../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav app-container">
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
