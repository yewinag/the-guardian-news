import React, { useEffect, useState } from 'react';
import '../../styles/dropdown.css';

function Dropdown() {
  const [value, setValue] = useState('Newest First');
  const [isActive, setIsActive] = useState(false);
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

  return (
    <div className="dropdown">
      <button type="button" onClick={() => setIsActive(!isActive)}>
        {value}
      </button>
      <ul className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <li onClick={() => setValue('Newest First')} role="presentation">
          Newest First
        </li>
        <li onClick={() => setValue('Oldest First')} role="presentation">
          Oldest First
        </li>
        <li onClick={() => setValue('Most Popular')} role="presentation">
          Most Popular
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
