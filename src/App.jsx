import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [items, setItems] = useState([])

  return (
    <section className='section-center'>
      <Form />
    </section>
  )
}

export default App
