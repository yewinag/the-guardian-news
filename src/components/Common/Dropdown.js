import React, { useState, useContext } from 'react';
import '../../styles/dropdown.css';
import { sortMenu } from '../../utils';
import { NewsContext, useToggle } from '../../hooks';
import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg';

const InitialValue = { name: 'Newest First' };

function Dropdown() {
  const [value, setValue] = useState(InitialValue);
  const [isActive, setActive] = useToggle(false);
  const news = useContext(NewsContext);

  const handleSort = (params) => {
    setValue(params);
    news.setOrderNews(params.keyword);
  };

  return (
    <div className="dropdown">
      <button type="button" onClick={() => setActive.toggle(!isActive)}>
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
