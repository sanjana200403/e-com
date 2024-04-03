import React from 'react'
import {PRODUCTS} from './products'
import Card from './Card'

function Featureproduct() {
  return (
   
   
    <div className="pro-container" id="newArrival">
      {PRODUCTS.slice(0,8).map((product,i)=>(
        
        //  <div key={product.id} className="pro">
        //     <a href="sproduct9.html">
        //         <img src={product.image} className="img" alt=""/></a>
        //     <div className="des">
        //         <span>{product.brand}</span>
        //         <h5 className="sTitle">
        //             {product.title}
        //         </h5>
        //         <div className="star">
        //             <i className="fas fa-star"></i>
        //             <i className="fas fa-star"></i>
        //             <i className="fas fa-star"></i>
        //             <i className="fas fa-star"></i>
        //             <i className="fas fa-star"></i>
        //         </div>
        //         <h4 className="sPrice">${product.price}
        //         </h4>
        //     </div>
        //     <i id="cart" className="fa-solid fa-cart-shopping add-cart"></i>
        // </div>
        <Card key={i} data={product}/>
      
      ))


      } 
       
      
      
   
   
        
    
    </div>
   
   
  )
}

export default Featureproduct
