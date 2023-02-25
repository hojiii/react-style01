
const User = ({item,removeFuntion}) =>{
  return(
    <div key={item.id} className='component-style'>
    {item.age}-{item.name}
    <button onClick={() => removeFuntion(item.id)}>x</button>
  </div>
  )
}

export default User;