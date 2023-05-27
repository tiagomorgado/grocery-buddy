import { useState } from "react"

const Form = () => {
    const [newItemName, setNewItemName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.target.value === '') {
          console.log('empty input')
          return
        }
        console.log(newItemName);
      }

  return (
    <section className='section-center'>
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
    </section>
  )
}
export default Form

