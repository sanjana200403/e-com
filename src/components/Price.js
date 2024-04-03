import React from 'react'
import './price.css'
import Input from './Input'

function Price({handleChange}) {
  const showItem =()=>{
    // setdisplay({
    //   display:"flex"
    // })
    const ele = document.getElementsByClassName("sortItem3")[0]
    ele.classList.toggle("active")
  }
  return (
    
   
    <>
    <div className='sorting'>

   <div className='sortCat' onClick={showItem}>
  <input type="text" placeholder='Sort By Category' />
  <i class="fa-solid fa-caret-down"></i>
</div>
    <div className='sortItem3'>
    <label htmlFor="">
    <input type="radio" onChange={handleChange} value="" name='test2'/>
    <span className='checkmark'></span>All
  </label>
      
   
 
 <Input
  handleChange={handleChange}
  value={300}
  title="$200-$300"
  name="test2" 
  />
   <Input
  handleChange={handleChange}
  value={500}
  title="$300-$500"
  name="test2" 
  />
   <Input
  handleChange={handleChange}
  value={650}
  title="$500-$650"
  name="test2" 
  /><Input
  handleChange={handleChange}
  value={1000}
  title="$600-$1000"
  name="test2" 
  />
    </div>
  </div>
    </>
  )
}

export default Price
