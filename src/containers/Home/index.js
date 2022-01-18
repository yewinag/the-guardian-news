import React, { useEffect, useState } from 'react';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import '../../styles/common.css';
import '../../styles/article-listing.css';
import '../../styles/sport-article.css';
import Card from '../../components/Common/Card';
import { fetchData } from '../../utils';
import NewsContext from '../../hooks/NewsContext';
import { Spinner } from '../../components/Common';

function Home() {
  const [news, setNews] = useState({});
  const [sports, setSports] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    handleFetchNews();
  }, []);

  useEffect(() => {
    setloading(true);
    fetchData(`/search?section=sport&`).then((res) => {
      setSports(res);
      setloading(false);
    });
  }, []);

  const handleFetchNews = (params = '') => {
    setloading(true);
    fetchData(`/search?section=news${params}`).then((res) => {
      setNews(res);
      setloading(false);
    });
  };
  const value = React.useMemo(
    () => ({
      loading,
      setloading,
      setNews,
    }),
    [loading]
  );
  const firstSectionNews =
    news.results !== undefined ? news.results.slice(0, 5) : [];
  const secondSectionNews =
    news.results !== undefined ? news.results.slice(5, 8) : [];
  const sportNews =
    sports.results !== undefined ? sports.results.slice(0, 3) : [];
  return (
    <article className="article">
      <NewsContext.Provider value={value}>
        <ArticleHeader />
      </NewsContext.Provider>
      <div className="app-container">
        {loading ? (
          <Spinner />
        ) : (
          <article className="news-article">
            {firstSectionNews.map((item) => (
              <Card
                name="item-1"
                item={item}
                key={item.id}
                imageClass="thumb"
              />
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
      <article className="app-container">
        <header className="sport-article-header">
          <h2>Sports</h2>
        </header>

        {loading ? (
          <Spinner />
        ) : (
          <article className="article-sport">
            {sportNews.map((item) => (
              <Card
                name="item-1"
                item={item}
                key={item.id}
                imageClass="thumb"
              />
            ))}
          </article>
        )}
      </article>
    </article>
  );
}

export default Home;
