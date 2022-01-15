import React from 'react';
import '../../styles/common.css';
import '../../styles/article-header.css';
import { Dropdown } from '../Common';

function ArticleHeader() {
  return (
    <header className="article-header app-container">
      <h2>Top Stories</h2>
      <div className="article-header-action">
        <a href="/search">
          <button className="btn" type="button">
            View Bookmark
          </button>
        </a>
        <Dropdown />
      </div>
    </header>
  );
}

export default ArticleHeader;
