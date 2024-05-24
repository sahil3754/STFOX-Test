
import React, { useState } from 'react'
import { MyContext } from './MyContext'

function MyState({ children }) {
  const  [myEdit,setMyEdit] = useState([]);
  const [emp, setEmp] = useState([]);
  const [edit, setEdit] = useState(false);

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };



  return <MyContext.Provider value={{
    emp, setEmp,
    edit, setEdit,
    items, addItem, updateItem, deleteItem,
    myEdit,setMyEdit
  }}>
    {children}
  </MyContext.Provider>
}

export default MyState