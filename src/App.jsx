import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import { nanoid } from 'nanoid'
import Items from './components/Items'

function App() {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed:false,
      id: nanoid(),
    };
    setItems([...items, newItem])
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem}/>
    </section>
  )
}

export default App
