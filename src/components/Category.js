import React from 'react'
import './category.css'
import Input from './Input'
import { useState } from 'react'

function Cateogory({handleChange}) {
  // const [display,setdisplay] = useState({
  //   display:"none"
  // })
  const showItem =()=>{
    // setdisplay({
    //   display:"flex"
    // })
    const ele = document.getElementsByClassName("sortItem")[0]
    ele.classList.toggle("active")
  }
  


  return (
  
  <>
  <div className='sorting'>
<div className='sortCat' onClick={showItem}>
  <input type="text" className='input' placeholder='Sort By Category' />
    
  <i class="fa-solid fa-caret-down" ></i>
</div>

  

 
 <div className='sortItem'
  // style={display}
  >
  <label htmlFor="">
    <input type="radio" onChange={handleChange} value="" name='test1' />
    <span className='checkmark'></span>All
  </label>
 <Input handleChange={handleChange} value="top" title="Top" name="test"/>
    <Input handleChange={handleChange} value="middy" title="Middy" name="test"/>
    <Input handleChange={handleChange} value="tshirt" title="tshirt" name="test"/>
   
   
    <Input handleChange={handleChange} value="shirt" title="Shirt" name="test"/>
 </div>
   </div>
  </>
  )
}

export default Cateogory
