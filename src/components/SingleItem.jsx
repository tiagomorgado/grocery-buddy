/* eslint-disable react/prop-types */
import { useState } from "react"

const SingleItem = ({item, removeItem, editItem}) => {
    /* const [isChecked, setIsChecked] = useState(item.completed) */

  return (
    <div className='single-item'>
        <input type='checkbox' checked={item.completed} onChange={() => editItem(item.id)}/>
        <p style={{textTransform:'capitalize', textDecoration:item.completed && 'line-through'}}>{item.name}</p>
        <button type='button' 
        onClick={() => removeItem(item.id)}
        className='btn remove-btn'>Delete</button>
    </div>
  )
}
export default SingleItem