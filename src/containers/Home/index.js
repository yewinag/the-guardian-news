import React from 'react';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import '../../styles/common.css';
import '../../styles/article-listing.css';
import '../../styles/sport-article.css';
import Card from '../../components/Common/Card';

const img = require('../../assets/peak-default.png');

function Home() {
  return (
    <article className="article">
      <ArticleHeader />
      <article className="news-article app-container">
        <section className="item">
          <div className="thumb" style={{ backgroundImage: `url(${img})` }} />
          <article className="desc">
            <h4>Australia news live update: 50 Covid deaths</h4>
            <p>
              Australia news live update: 50 Covid deaths and 4,100 in hospital
              nationally; NSW cases expected to ‘plateau’ next week; Djokovic
              visa decision looms
            </p>
          </article>
        </section>
        <Card name="item-1" />
        <Card name="item-1" />
        <section name="item-1">
          <article className="desc">
            <h4>Second Logical Part (e.g. Practice)</h4>
            <p>Paragraph 1 in second section</p>
          </article>
        </section>
        <section name="item-1">
          <article className="desc">
            <h4>Second Logical Part (e.g. Practice)</h4>
            <p>Paragraph 1 in second section</p>
          </article>
        </section>
        <Card name="item-1" />
        <Card name="item-1" />
        <Card name="item-1" />
      </article>

      <article className="app-container">
        <header className="sport-article-header">
          <h2>Sports</h2>
        </header>
        <article className="article-sport">
          <section className="item-2">
            <div
              className="item-card"
              style={{ backgroundImage: `url(${img})` }}
            />
            <article className="desc">
              <h4>Second Logical Part (e.g. Practice)</h4>
              <p>
                Repelician senator on capital Hill have expressed their dismay
                at Donel Trump
              </p>
            </article>
          </section>
          <section className="item-2">
            <div
              className="item-card"
              style={{ backgroundImage: `url(${img})` }}
            />
            <article className="desc">
              <h4>Second Logical Part (e.g. Practice)</h4>
              <p>Paragraph 1 in second section</p>
            </article>
          </section>
          <section className="item-2">
            <div
              className="item-card"
              style={{ backgroundImage: `url(${img})` }}
            />
            <article className="desc">
              <h4>Second Logical Part (e.g. Practice)</h4>
              <p>Paragraph 1 in second section</p>
            </article>
          </section>
        </article>
      </article>
    </article>
  );
}

export default Home;
