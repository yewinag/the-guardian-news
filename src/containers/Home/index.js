import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils';
import { ArticleHeader } from '../../components/Layouts';
import { NewsContext } from '../../hooks';
import '../../styles/common.css';
import '../../styles/article-listing.css';
import '../../styles/sport-article.css';
import ListingLayout from '../../components/Layouts/ListingLayout';
import SecondListingLayout from '../../components/Layouts/SecondListingLayout';

function Home() {
  const [news, setNews] = useState({});
  const [loading, setloading] = useState(false);
  const [sports, setSports] = useState({});
  const [loadingSport, setloadingSport] = useState(false);
  useEffect(() => {
    handleFetchNews();
    handleSportNews();
  }, []);

  const handleSportNews = () => {
    setloadingSport(true);
    fetchData(`/search?section=sport&`).then((res) => {
      setSports(res);
      setloadingSport(false);
    });
  };
  const handleFetchNews = (params = '') => {
    setloading(true);
    fetchData(`/search?section=news${params}`).then((res) => {
      setNews(res.results);
      setloading(false);
    });
  };
  const url = `/search?section=news&order-by=`;
  const value = React.useMemo(
    () => ({
      loading,
      setloading,
      setNews,
      url,
    }),
    [loading, url]
  );
  const firstSectionNews = news.length > 0 ? news.slice(0, 5) : [];
  const secondSectionNews = news.length > 0 ? news.slice(5, 8) : [];
  const sportNews =
    sports.results !== undefined ? sports.results.slice(0, 3) : [];

  return (
    <article className="article">
      <NewsContext.Provider value={value}>
        <ArticleHeader title="Top Stories" />
      </NewsContext.Provider>
      <ListingLayout
        loading={loading}
        firstSectionNews={firstSectionNews}
        secondSectionNews={secondSectionNews}
      />
      <article className="app-container">
        <header className="sport-article-header">
          <h2>Sports</h2>
        </header>
        <SecondListingLayout
          loadingSport={loadingSport}
          sportNews={sportNews}
        />
      </article>
    </article>
  );
}

export default Home;
