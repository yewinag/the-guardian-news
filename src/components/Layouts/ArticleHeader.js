import React from 'react';
import '../../styles/common.css';
import '../../styles/article-header.css';

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
        <select>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </header>
  );
}

export default ArticleHeader;
