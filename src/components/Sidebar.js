import React from 'react'
import Cateogory from './Category'
import Color from './Color'
import Price from './Price'



function Sidebar({handleChange}) {
  console.log(handleChange)
  return (
    <section id="product" className="section-p1">
    <div style={{display:"flex" ,flexWrap:"wrap", justifyContent:"center",gap:"10px"}}>
        <Cateogory handleChange={handleChange}/>
        <Color handleChange={handleChange} />
        <Price handleChange={handleChange} />
        
      
    </div>
    </section>
  )
}

export default Sidebar
