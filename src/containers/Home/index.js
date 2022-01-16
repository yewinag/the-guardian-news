import React, { useEffect, useState } from 'react';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import '../../styles/common.css';
import '../../styles/article-listing.css';
import '../../styles/sport-article.css';
import Card from '../../components/Common/Card';
import { fetchData } from '../../utils';

// const img = require('../../assets/peak-default.png');

function Home() {
  const [news, setNews] = useState({});
  const [sports, setSports] = useState({});
  useEffect(() => {
    fetchData(`/search?section=news`).then((res) => setNews(res));
  }, []);
  useEffect(() => {
    fetchData(`/search?section=sport`).then((res) => setSports(res));
  }, []);
  return (
    <article className="article">
      <ArticleHeader />
      <article className="news-article app-container">
        {news.results.map((item) => (
          <Card name="item-1" item={item} key={item.id} />
        ))}        
      </article>
      <article className="app-container">
        <header className="sport-article-header">
          <h2>Sports</h2>
        </header>
        <article className="article-sport">
          {sports.results.map((item) => (
            <Card name="item-1" item={item} key={item.id} />
          ))}          
        </article>
      </article>
    </article>
  );
}

export default Home;
