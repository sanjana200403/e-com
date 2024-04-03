import React,{useContext} from 'react'
import { PRODUCTS,PRODUCTS1 } from '../components/products'
import CartItem from '../components/CartItem'
import { ShopContext } from '../components/shopcontext'
import {Link} from 'react-router-dom'

function Cart() {
  const {addToCart,viewProductDetails,cartItems,getTotalCartAmount,clearCart} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  if(totalAmount==0){
    return(
      <>
      <div className='d-flex justify-content-center align-items-center' style={{height: "500px",display:"flex",width:"95%",justifyContent:"center", alignItems:"center" ,flexDirection:"column" }}>

      <div style={{fontSize:"30px"}}>
      cart is empty
        </div>
        
      <p><Link to="/shop">CLICK HERE TO SHOP</Link></p>
      </div>
      </>
    )
  }
  return (
   
   <>

<section id="cartt" class="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>
                                Image
                            </td>
                            <td>Product</td>
                           
                           
                            <td>Quantity</td>
                            
                            
                        </tr>

                    </thead>
                    
  
    {[...PRODUCTS,...PRODUCTS1].map((product)=>{
      
      if((cartItems[product.id])!==0){
        return(
          <CartItem key={product.id} data={product} />
        )
      }
      
      
    })}
    </table>
    </section>
 
   <hr />


   <div style={{display:"flex",justifyContent:'space-around',padding:"10px 10px"}}>
  <button style={{padding:"10px 10px",backgroundColor:"#088178",color:"white",fontSize:"15px"}}>shop Now</button>
  
  <button 
  style={{padding:"10px 10px",backgroundColor:"#088178",color:"white",fontSize:"15px",marginLeft:"10px"}}
  onClick={()=>{
    clearCart()
  }}
  >clear</button>
   </div>
      <section id="cart-add" class="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter your coupon"/>
                        <button class="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Total</h3>
                    <table>
                        <tr>
                            <td>
                                <strong>

                                    Total
                                </strong>
                            
                            </td>
                            <td>
                                <strong>

                                {totalAmount}
                                </strong>
                            </td>
                        </tr>
                    </table>
                    <Link to="login">
                    <button class="normal">Proceed to Checkout</button></Link>
                   
                   
                </div>

            </section>
    
   
   
   </>
  )
}

export default Cart
