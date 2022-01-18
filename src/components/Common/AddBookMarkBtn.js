import React, { useEffect, useState } from 'react';
import {
  getAllItems,
  removeItemById,
  saveItem,
} from '../../utils/localStorage';
import '../../styles/button.css';

function AddBookMarkBtn({ item }) {
  const [message, setmessage] = useState('');
  const [storageData, setStorageData] = useState([]);
  const allitemlength = getAllItems().length;
  useEffect(() => {
    if (storageData.length !== allitemlength) {
      setStorageData(getAllItems());
    }
  }, [storageData, allitemlength]);

  const updatedData = storageData.filter(
    (storeItem) => storeItem.content.id === item.content.id
  );

  const addBookMark = () => {
    if (item.content === undefined) {
      setmessage(`detail info not found`);
    }

    if (updatedData.length > 0) {
      removeItemById(item);
      setStorageData(getAllItems());
    } else {
      saveItem(item);
      setStorageData(getAllItems());
    }
  };

  return (
    <div className="button">
      <button className="btn" type="button" onClick={() => addBookMark()}>
        {updatedData.length > 0 ? 'Remove Bookmark' : 'Add Bookmark'}
      </button>
      <p>{message}</p>
    </div>
  );
}

export default AddBookMarkBtn;
