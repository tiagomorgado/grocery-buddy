import SingleItem from "./SingleItem"

/* eslint-disable react/prop-types */
const Items = ({items, removeItem}) => {
  return (
    <div className='items'>
        {items.map((item) => {
            return(
                <SingleItem key={item.id} item={item} removeItem={removeItem}/>
            )
        })}
    </div>
  )
}
export default Items