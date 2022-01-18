import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../Common';
import '../../styles/common.css';
import '../../styles/article-header.css';
import { ReactComponent as BookMarkIcon } from '../../assets/bookmark.svg';

function ArticleHeader({ title }) {
  const navigate = useNavigate();
  return (
    <header className="article-header app-container">
      <h2>{title}</h2>
      <div className="article-header-action">
        <button
          className="btn"
          type="button"
          onClick={() => navigate(`/bookmarks`)}
        >
          <BookMarkIcon width="32px" />
          View Bookmark
        </button>
        <Dropdown />
      </div>
    </header>
  );
}

export default ArticleHeader;
