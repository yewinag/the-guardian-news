import React, { useState } from 'react';
import { chunkList, sortMenu } from '../../utils';
import { NewsContext } from '../../hooks';
import { useFetchSearchCategory } from '../../hooks/useFetch';
import {
  ArticleHeader,
  ListingLayout,
  SecondListingLayout,
} from '../../components/Layouts';
import '../../styles/common.css';
import '../../styles/article-listing.css';
import '../../styles/sport-article.css';

const defaultOrder = sortMenu[2].keyword;

function Home() {
  const [orderNews, setOrderNews] = useState(defaultOrder);
  const [news, fetching] = useFetchSearchCategory('news', orderNews); // fetch news category, so set default

  const value = React.useMemo(
    () => ({
      orderNews,
      setOrderNews,
    }),
    [orderNews, setOrderNews]
  );
  const firstSectionNews = news.length > 0 ? chunkList(news, 0, 5) : [];
  const secondSectionNews = news.length > 0 ? chunkList(news, 5, 8) : [];

  return (
    <article className="article">
      <NewsContext.Provider value={value}>
        <ArticleHeader title="Top Stories" />
      </NewsContext.Provider>
      <ListingLayout
        loading={fetching}
        firstSectionNews={firstSectionNews}
        secondSectionNews={secondSectionNews}
      />
      <article className="app-container">
        <header className="sport-article-header">
          <h2>Sports</h2>
        </header>
        <SecondListingLayout />
      </article>
    </article>
  );
}

export default Home;
