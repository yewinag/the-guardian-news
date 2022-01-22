import React from 'react';
import { Dropdown } from '../Common';
import '../../styles/common.css';
import '../../styles/article-header.css';
import { ReactComponent as BookMarkIcon } from '../../assets/bookmark.svg';

function ArticleHeader({ title }) {
  return (
    <header className="article-header app-container">
      <h2>{title}</h2>
      <div className="article-header-action">
        {title !== 'All Bookmarks' ? (
          <a className="btn" href="/bookmarks">
            <BookMarkIcon width="32px" />
            View Bookmark
          </a>
        ) : null}
        <Dropdown />
      </div>
    </header>
  );
}

export default ArticleHeader;
