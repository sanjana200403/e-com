import React from 'react'
// import './produc.css'
// import { AiFillStar } from 'react-icons/ai'
// import {BsFillBagHeartFill} from 'react-icons/bs';
import Card from '../components/Card';



function Produc({result}) {
  return (
   
   <>
  <section id="product" className="section-p1">
    <h2>New Products</h2>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container" id="newArrival">
  
  
   {result}
   </div>
   
    </section>
    
    


      


      
      
   
   
        
    


   
  
  
   
   </>
  )
}

export default Produc
