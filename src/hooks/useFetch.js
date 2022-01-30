import { useEffect, useState } from 'react';
import { fetchData } from '../utils';

// fetch by category, will give category news name & element for media & sort by order
export const useFetchSearchCategory = (
  category,
  order = 'relevance',
  element = 'all'
) => {
  const url = `/search?section=${category}&show-elements=${element}&order-by=${order}`;
  const [news, setNews] = useState([]);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetchData(url)
      .then((res) => setNews([...news, ...res.results]))
      .finally(() => setFetching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return [news, fetching];
};
// fetch by query, need to give query from input, page + loadmore,
export const useFetchSearchQuery = (
  query = '',
  page = 1,
  order = 'relevance',
  fields = 'all',
  elements = 'all'
) => {
  const url = `/search?q=${query}&page=${page}&show-fields=${fields}&show-elements=${elements}&order-by=${order}`;
  const [news, setNews] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [meta, setmeta] = useState({});
  useEffect(() => {
    setFetching(true);
    fetchData(url)
      .then((res) => {
        page === 1 ? setNews(res.results) : setNews([...news, ...res.results]);
        delete res.results;
        setmeta(res);
      })
      .finally(() => setFetching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return [news, meta, fetching];
};
// fetch detail news
export const useFetchDetail = (query, fields = 'all', elements = 'all') => {
  const url = `/${query}?show-fields=${fields}&show-elements=${elements}`;
  const [info, setInfo] = useState({});
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetchData(url)
      .then((res) => setInfo(res))
      .finally(() => setFetching(false));
  }, [url]);
  return [info, fetching];
};
