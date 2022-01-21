import React, { useEffect, useState, useContext } from 'react';
import { fetchData, sortMenu } from '../../utils';
import NewsContext from '../../hooks/NewsContext';
import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg';

const InitialValue = { name: 'Newest First' };

function Dropdown() {
  const [value, setValue] = useState(InitialValue);
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
    fetchData(`${news.url}${params.keyword}`).then((json) => {
      news.setloading(false);
      news.setNews(json.results);
    });
  };

  return (
    <div className="dropdown">
      <button type="button" onClick={() => setIsActive(!isActive)}>
        <span>{value.name}</span>
        <DropdownIcon className="dropdown-icon" />
      </button>
      <ul className={`menu ${isActive ? 'active' : 'inactive'}`}>
        {sortMenu.map((item) => (
          <li
            onClick={() => handleSort(item)}
            role="presentation"
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
