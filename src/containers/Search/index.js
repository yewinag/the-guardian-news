import React from 'react';
import Card from '../../components/Common/Card';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import '../../styles/search-listing.css';

function Search() {
  return (
    <article className="article">
      <ArticleHeader />
      <article className="search-article app-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </article>
  );
}

export default Search;
