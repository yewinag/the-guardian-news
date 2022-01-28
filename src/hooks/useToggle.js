import { useEffect, useState } from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const onClick = () => {
      setValue(!value);
    };
    if (value) {
      window.addEventListener('click', onClick);
    }
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [value]);
  return [
    value,
    {
      toggle: () => setValue(!value),
    },
  ];
};
export default useToggle;
