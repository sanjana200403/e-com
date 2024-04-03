import React from 'react'
import './color.css'

import Input from './Input'

function Color({handleChange}) {
  const showItem =()=>{
    // setdisplay({
    //   display:"flex"
    // })
    const ele = document.getElementsByClassName("sortItem2")[0]
    ele.classList.toggle("active")
  }
  return (
    <>
    <div className='sorting'>
    <div className='sortCat' onClick={showItem}>
      
  <input type="text" placeholder='Sort By Color' />
  <i class="fa-solid fa-caret-down" ></i>
</div>
    <div className='sortItem2'>
    <label htmlFor="">
    <input type="radio" onChange={handleChange} value="" name='test2' />
    <span className='checkmark'></span>All
  </label>
      
   
   <Input 
   handleChange={handleChange}
   value="black"
   title="Black"
   name="test1"
   color="black"
   />
     <Input 
   handleChange={handleChange}
   value="blue"
   title="Blue"
   name="test1"
   color="blue"
   />
     <Input 
   handleChange={handleChange}
   value="red"
   title="Red"
   name="test1"
   color="red"
   />
     <Input 
   handleChange={handleChange}
   value="pink"
   title="Pink"
   name="test1"
   color="green"
   />
     <Input 
   handleChange={handleChange}
   value="white"
   title="White"
   name="test1"
   color="white"
   />
    
    
    
  
  
    
    
    
    
    </div>
   </div>
    </>
  )
}

export default Color
