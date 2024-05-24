import React, { useState, useCallback } from 'react';
import './Form.css';
import Form from "./component/Form";
import ReturnContainer from "./component/ReturnContainer";

function App() {
  const [itemList, setItemList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target.itemList.value;
    if (newItem) {

      const itemId = new Date().getTime();
      setItemList(prev => [...prev, { id: itemId, text: newItem, checked: false }]);
      event.target.itemList.value = "";
    }
  };

  const handleCheck = useCallback((id) => {
    setItemList(prev => prev.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  }, []);

  const handleDelete = (id) => {
    setItemList(allItems => allItems.filter(item => item.id !== id));
  };

  const handleDeleteChecked = () => {
    setItemList(allItems => allItems.filter(item => !item.checked));
  };
  return (
    <>
      <div className='formContainer'>
        <Form 
        handleSubmit={handleSubmit} 
        />
        <ReturnContainer 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
        itemList={itemList} 
        handleDeleteChecked={handleDeleteChecked} 
        />
      </div >
    </>
  );
}
export default App;