import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/common.css';
import '../../styles/article-header.css';
import { Dropdown } from '../Common';

function ArticleHeader() {
  const navigate = useNavigate();
  return (
    <header className="article-header app-container">
      <h2>Top Stories</h2>
      <div className="article-header-action">
        <button
          className="btn"
          type="button"
          onClick={() => navigate(`/bookmarks`)}
        >
          View Bookmark
        </button>
        <Dropdown />
      </div>
    </header>
  );
}

export default ArticleHeader;
