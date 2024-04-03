import React, { useContext } from 'react'
import { ShopContext } from './shopcontext'
import {Link} from 'react-router-dom'

function Prod(props) {
  
  
    const {id,image,price,brand,title,url1,url2} = props.data
    const {addToCart,viewProductDetails,cartItems} = useContext(ShopContext)
    const cartItemCount = cartItems[id]
  return (
    
    <>
    <div key={id} className="pro">
     
     
        <img src={image} id="product1" className="img" alt=""/>
        <div className="des">
            <span>{brand}</span>
            <h5 className="sTitle">
                {title}
            </h5>
            <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h4 className="sPrice">${price}</h4>
         
         
        </div> <Link to="/details">
          <span  id='p-detail'
          
          onClick={()=>viewProductDetails(id)}
          
          >view details</span>  
          </Link>
<span  id="cart"
          
        onClick={()=>addToCart(id)}
        ><i  className="fa-solid fa-cart-shopping add-cart">
             &nbsp; 
        { cartItemCount>0 &&

            `${cartItemCount}`


        }
        </i> 
        
      
      
        
        </span>
        
        
        
         

         <span id='heart'
       
       
         onClick={()=>{
           props.addToFav(props.data)
          }}>
            
          <i  class="fa-solid fa-heart"></i>
          </span>
    </div>
    </>
  )
}

export default Prod
