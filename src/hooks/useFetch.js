import { useEffect, useState } from 'react';
import { fetchData } from '../utils';

export const useFetch = (url) => {
  const [news, setNews] = useState([]);
  const [fetching, setFetchin] = useState(false);
  useEffect(() => {
    setFetchin(true);
    fetchData(url)
      .then((res) => setNews(res.results))
      .finally(() => setFetchin(false));
  }, [url]);

  return [news, fetching];
};

export const useFetchCategory = (url) => {
  const [catNews, setCatNews] = useState([]);
  const [catFetching, setCatFetching] = useState(false);
  useEffect(() => {
    setCatFetching(true);
    fetchData(url)
      .then((res) => setCatNews(res.results))
      .finally(() => setCatFetching(false));
  }, [url]);

  return [catNews, catFetching];
};
