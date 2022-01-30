import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsContext from '../../hooks/NewsContext';
import { useFetchSearchQuery } from '../../hooks';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import Card from '../../components/Common/Card';
import { Spinner } from '../../components/Common';
import LoadMore from '../../components/Common/LoadMore';
import { chunkList, sortMenu } from '../../utils';
import '../../styles/search-listing.css';

const defaultOrder = sortMenu[2].keyword;
const defaultPage = 1;

function Search() {
  const { query } = useParams();
  const [order, setOrder] = useState(defaultOrder);
  const [page, setPage] = useState(defaultPage);
  const [news, meta, fetching] = useFetchSearchQuery(query, page, order);

  const handleLoadMore = () => setPage(meta.currentPage + 1); // current page + 1, click load more actions

  const handleSort = (params) => {
    setOrder(params);
    setPage(1); // set default page back
  };
  const value = React.useMemo(
    () => ({
      order,
      setOrderNews: handleSort,
    }),
    [order]
  );
  const chunkNum = news.length - news.length * 0.2;
  const resultsChunk = news.length > 0 ? chunkList(news, 0, chunkNum) : [];
  return (
    <article className="article">
      <NewsContext.Provider value={value}>
        <ArticleHeader title="Search Results" />
      </NewsContext.Provider>
      <div className="app-container">
        {fetching && (news.length === 0 || news.length === 10) ? (
          <Spinner />
        ) : null}
      </div>
      <article className="search-article app-container">
        {resultsChunk.length > 0 &&
          resultsChunk.map((item) => (
            <Card name="item-1" item={item} key={item.id} imageClass="thumb" />
          ))}

        {news.length > 0 ? (
          <LoadMore handleLoadMore={handleLoadMore} meta={meta} />
        ) : null}
        <div className="loading-more-layout">
          {fetching && news.length > 0 ? <Spinner /> : null}
        </div>
      </article>
    </article>
  );
}

export default Search;
