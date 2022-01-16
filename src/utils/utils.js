import { API_URL, API_KEY } from './config';

export const fetchData = async (path) => {
  const res = await fetch(`${API_URL}${path}&api-key=${API_KEY}`)
    .then((data) => data.json())
    .then((json) => json)
    .catch((error) => error);
  if (res.response.status !== 'ok') {
    return new Error(`An error occurred while fetching the data.`);
  }
  return res.response;
};
