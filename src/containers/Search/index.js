import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import Card from '../../components/Common/Card';
import { Spinner } from '../../components/Common';
import { fetchData } from '../../utils';
// import '../../styles/search-listing.css';
import LoadMore from '../../components/Common/LoadMore';
import NewsContext from '../../hooks/NewsContext';

function Search() {
  const { query } = useParams();
  const [news, setNews] = useState([]);
  const [meta, setmeta] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetchData(`/search?q=${query}`).then((json) => {
      setNews(json.results);
      setmeta(json);
      setloading(false);
    });
  }, [query]);

  const handleLoadMore = () => {
    setloading(true);
    fetchData(`/search?q=${query}&page=${meta.currentPage + 1}`).then(
      (json) => {
        setNews([...news, ...json.results]);
        setmeta(json);
        setloading(false);
      }
    );
  };
  const url = `/search?q=${query}&order-by=`;
  const value = React.useMemo(
    () => ({
      loading,
      setloading,
      setNews,
      setmeta,
      url,
    }),
    [loading, url]
  );
  const chunkNum = news.length - news.length * 0.2;
  const resultsChunk = news.length > 0 ? news.slice(0, chunkNum) : [];
  return (
    <article className="article">
      <NewsContext.Provider value={value}>
        <ArticleHeader title="Search Results" />
      </NewsContext.Provider>
      <article className="search-article app-container">
        {resultsChunk.length > 0 &&
          resultsChunk.map((item) => (
            <Card name="item-1" item={item} key={item.id} imageClass="thumb" />
          ))}

        {news.length > 0 ? (
          <LoadMore handleLoadMore={handleLoadMore} meta={meta} />
        ) : null}
        <div className="loading-more-layout">
          {loading && news.length > 0 ? <Spinner /> : null}
        </div>
      </article>
    </article>
  );
}

export default Search;
