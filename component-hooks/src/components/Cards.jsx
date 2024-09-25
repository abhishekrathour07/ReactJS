import React from 'react'
import { useState } from 'react'

const Cards = () => {
  const [count,setcount] = useState(2);
  
  const changevalue = ()=>{
    setcount(count*2)
  }
  
  return (

   <>
    <p>the value of count is {count}</p> 
    <button onClick={changevalue}>count++</button>
   </>
  )
}

export default Cards
