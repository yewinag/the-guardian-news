import React, { useEffect, useState } from 'react';
import { Spinner } from '../../components/Common';
import Card from '../../components/Common/Card';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import { getAllItems } from '../../utils/localStorage';
import '../../styles/bookmark.css';

function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setBookmarks(getAllItems());
    setloading(false);
  }, []);
  return (
    <article className="article">
      <ArticleHeader title="All Bookmarks" />
      <div className="bookmark-articles app-container">
        {loading ? (
          <Spinner />
        ) : (
          bookmarks.map((item) => (
            <Card
              name="item-1"
              item={item.content}
              key={item.content.id}
              imageClass="thumb"
            />
          ))
        )}
      </div>
    </article>
  );
}

export default BookMark;
