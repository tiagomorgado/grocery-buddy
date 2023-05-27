import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [items, setItems] = useState([])

  return (
    <Form />
  )
}

export default App
