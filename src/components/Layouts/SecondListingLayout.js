import React from 'react';
import { Spinner, Card } from '../Common';

function SecondListingLayout({ loadingSport, sportNews }) {
  return (
    <div>
      {loadingSport ? (
        <Spinner />
      ) : (
        <article className="article-sport">
          {sportNews.map((item) => (
            <Card name="item-1" item={item} key={item.id} imageClass="thumb" />
          ))}
        </article>
      )}
    </div>
  );
}

export default SecondListingLayout;
