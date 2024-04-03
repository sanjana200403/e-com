import React,{useContext, useEffect} from 'react'
import { ShopContext } from './shopcontext';
import { PRODUCTS,PRODUCTS1 } from './products';
import Card from './Card';
import Featureproduct from './Featureproduct';

function Productdetail() {
    // set selected product to 0
    // const {id,image,price,brand,title} = props.data
const changeImage = ()=>{
    var  mainImg = document.getElementById("mainImg")
    var smallimg = document.getElementsByClassName('small-img')
    smallimg[0].onclick = function(){
    mainImg.src =smallimg[0].src
    }
    smallimg[1].onclick = function(){
    mainImg.src =smallimg[1].src
    }
    smallimg[2].onclick = function(){
    mainImg.src =smallimg[2].src
    }
    smallimg[3].onclick = function(){
    mainImg.src =smallimg[3].src
    }
}
useEffect(()=>{
changeImage()
},[])



    const {addToCart,viewProductDetails,cartItems, closeProductDetails,selectedProduct,removeToCart,updateCartItemCount} = useContext(ShopContext)
    
    
    const productId = selectedProduct || 0;
    const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);
     const cartItemCount = cartItems[product.id]
  
    
  return (
    
    <>
    <section id="prodetails" className="section-p1 pa">
    <div className="single-pro-image">
        <img src={product.image} width="100%" style={{objectFit:"contain",height:"400px"}} id="mainImg" alt=""/>
  
        
    <div className="small-img-group" onClick={()=>changeImage()}>
        <div className="small-img-col">
            <img src={product.image} width="100%" className="small-img" alt=""
            />
        </div>
     
        
        
        <div className="small-img-col">
            <img src={product.url1} width="100%" className="small-img" alt=""/>
        </div>
        
        <div className="small-img-col">
            <img src={product.url2} width="100%" className="small-img" alt=""/>
        </div>
    
        <div className="small-img-col">
            <img src={product.url3} width="100%" className="small-img" alt=""/>
        </div>

    </div>
</div>
<div className="single-pro-details">
    <h6> Home / T-shirt</h6>
    <h4>{product.title}</h4>
    <strike>{product.prevPrice}</strike>
    <span style={{marginLeft:"10px",fontSize:"30px",fontWeight:500}}>${product.price}</span>
    <select style={{marginTop:"20px"}}>
        <option>Select Size</option>
        <option value="">XL</option>
        <option value="">XXL</option>
        <option value="">Small</option>
        <option value="">Large</option>
    </select>
    <div>
    <button 
    
      onClick={()=>{
        removeToCart(product.id)
      }}
      
      >
        -
      </button>

      <input type="text" 
       value={cartItems[product.id]} onChange={(e)=>updateCartItemCount} />
      <button 
      
      onClick={()=>{
        addToCart(product.id)
      }}
      
      >
        +
      </button>
    </div>
    
    
 
 
    <button 
     onClick={()=>addToCart(product.id)}
    >Add to cart 
    {
cartItemCount>0 &&
`(${cartItemCount})`


}
    </button>
    <h4>Product Details</h4>
    <span>{product.details1}</span>
    <div>{product.details2}</div>
</div>

</section>
{/*  */}

<section id="product" className="section-p1">
    <h2>Suggested Products</h2>
    <p>Summer Collection New Modern Design</p>
   <Featureproduct/>
   
    </section>
    </>
  )
}

export default Productdetail
