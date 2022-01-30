import React from 'react';
import { useFetchSearchCategory } from '../../hooks/useFetch';
import { chunkList } from '../../utils';
import { Spinner, Card } from '../Common';

function SecondListingLayout() {
  const [news, fetching] = useFetchSearchCategory('sport'); // fetch sport category, so set default

  const sportNews = news.length > 0 ? chunkList(news, 0, 3) : []; // chunk 3 items

  return (
    <div>
      {fetching ? (
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
