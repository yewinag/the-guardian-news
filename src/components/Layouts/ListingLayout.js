import React from 'react';
import { Spinner, Card } from '../Common';

function ListingLayout({ loading, firstSectionNews, secondSectionNews }) {
  return (
    <div className="app-container">
      {loading ? (
        <Spinner />
      ) : (
        <article className="news-article">
          {firstSectionNews.map((item) => (
            <Card name="item-1" item={item} key={item.id} imageClass="thumb" />
          ))}
        </article>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <article className="article-row-items">
          {secondSectionNews.map((item) => (
            <Card
              name="item-1"
              item={item}
              key={item.id}
              imageClass="second-row-card"
            />
          ))}
        </article>
      )}
    </div>
  );
}

export default ListingLayout;
