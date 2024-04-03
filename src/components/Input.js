import React from 'react'
import './input.css'

function Input({handleChange,value,name,title,color}) {
  return (
    <>
    
<label style={{margin:"5px"}}>
    <input className='check' onChange={handleChange} 
  
  
    value={value} type="radio" name='test' />
     <span className='checkmark' style={{backgroundColor:color}} ></span>{title}


  </label>
  </>
  )
}

export default Input
