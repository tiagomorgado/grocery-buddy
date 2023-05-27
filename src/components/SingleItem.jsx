/* eslint-disable react/prop-types */
import { useState } from "react"

const SingleItem = ({item, removeItem}) => {
    const [isChecked, setIsChecked] = useState(item.completed)

  return (
    <div className='single-item'>
        <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
        <p style={{textTransform:'capitalize', textDecoration:isChecked && 'line-through'}}>{item.name}</p>
        <button type='button' 
        onClick={() => removeItem(item.id)}
        className='btn remove-btn'>Delete</button>
    </div>
  )
}
export default SingleItem