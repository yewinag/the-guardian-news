import React, { useEffect, useState, useContext } from 'react';
import '../../styles/dropdown.css';
import { fetchData } from '../../utils';
import NewsContext from '../../hooks/NewsContext';

function Dropdown() {
  const [value, setValue] = useState('Newest First');
  const [isActive, setIsActive] = useState(false);
  const news = useContext(NewsContext);

  useEffect(() => {
    const onClick = () => {
      setIsActive(!isActive);
    };
    if (isActive) {
      window.addEventListener('click', onClick);
    }
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive]);

  const handleSort = (params) => {
    news.setloading(true);
    setValue(params);
    fetchData(`/search?section=news&order-by=${params}`).then((json) => {
      news.setloading(false);
      news.setNews(json);
    });
  };

  return (
    <div className="dropdown">
      <button type="button" onClick={() => setIsActive(!isActive)}>
        {value}
      </button>
      <ul className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <li onClick={() => handleSort('newest')} role="presentation">
          Newest First
        </li>
        <li onClick={() => handleSort('oldest')} role="presentation">
          Oldest First
        </li>
        <li onClick={() => handleSort('relevance')} role="presentation">
          Most Popular
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
