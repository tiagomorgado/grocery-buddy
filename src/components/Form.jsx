/* eslint-disable react/prop-types */
import { useState } from "react"

const Form = ({addItem}) => {
    const [newItemName, setNewItemName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!newItemName) return
        addItem(newItemName)
        setNewItemName('')
      }

  return (
      <form onSubmit={handleSubmit}>
        <h4>Grocery Buddy</h4>
        <div className='form-control'>
            <input type='text' 
            className='form-input' 
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)} />
        </div>
       
        <button type='submit' className='btn'>Add Item</button>
      </form>
  )
}
export default Form
