import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHeader from '../../components/Layouts/ArticleHeader';
import Card from '../../components/Common/Card';
import { Spinner } from '../../components/Common';
import { fetchData } from '../../utils';
import '../../styles/search-listing.css';
import LoadMore from '../../components/Common/LoadMore';

function Search() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [meta, setmeta] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetchData(`/search?q=${query}`).then((json) => {
      setResults(json.results);
      setmeta(json);
      setloading(false);
    });
  }, [query]);

  const handleLoadMore = () => {
    setloading(true);
    fetchData(`/search?q=${query}&page=${meta.currentPage + 1}`).then(
      (json) => {
        setResults([...results, ...json.results]);
        setmeta(json);
        setloading(false);
      }
    );
  };
  const chunkNum = results.length - results.length * 0.2;
  const resultsChunk = results !== undefined ? results.slice(0, chunkNum) : [];
  return (
    <article className="article">
      <ArticleHeader />
      <article className="search-article app-container">
        {resultsChunk.length > 0 &&
          resultsChunk.map((item) => (
            <Card name="item-1" item={item} key={item.id} imageClass="thumb" />
          ))}
        {loading && results.length > 0 ? <Spinner /> : null}
        {results.length > 0 ? (
          <LoadMore handleLoadMore={handleLoadMore} meta={meta} />
        ) : null}
      </article>
    </article>
  );
}

export default Search;
