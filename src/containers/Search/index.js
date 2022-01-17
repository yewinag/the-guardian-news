import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import Card from '../../components/Common/Card';
import { Spinner } from '../../components/Common';
import { fetchData } from '../../utils';
import '../../styles/search-listing.css';

function Search() {
  const { query } = useParams();
  const [results, setResults] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetchData(`/search?q=${query}`).then((json) => {
      setResults(json);
      setloading(false);
    });
  }, [query]);

  const resultsChunk =
    results.results !== undefined ? results.results.slice(0, 8) : [];
  return (
    <article className="article">
      <ArticleHeader />
      {loading && results.results === undefined ? (
        <Spinner />
      ) : (
        <article className="search-article app-container">
          {resultsChunk.map((item) => (
            <Card name="item-1" item={item} key={item.id} imageClass="thumb" />
          ))}
        </article>
      )}
    </article>
  );
}

export default Search;
