import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import { nanoid } from 'nanoid'
import Items from './components/Items'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  
  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setLocalStorage(newItems);
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId) {
        const newItem = {...item, completed:!item.completed}
        return newItem
      }
      return item;
    })
    setItems(newItems)
    setLocalStorage(newItems);
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  )
}

export default App
