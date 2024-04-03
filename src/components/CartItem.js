import React,{useContext} from 'react'
import { ShopContext } from './shopcontext'

function CartItem(props) {
    const {id,image,price,brand,title} = props.data
    const {addToCart,viewProductDetails,updateCartItemCount,cartItems,removeToCart} = useContext(ShopContext)
  return (
  
  <>
   {/* <section key={id} className='section-p1'>
    <div>
      
    <table>
      
      
        <tbody>
            <tr>
               <td>
                <img src={image} width="100px" alt="" />
                </td> 
            <td>
              <p>{brand}</p>
              <p>{title}</p>
            <p>${price}</p>

            </td>
            <td>
              <button style={{padding:"8px 20px",backgroundColor:"#088178",color:"white",fontSize:"20px"}}
      onClick={()=>{
        removeToCart(id)
      }}
      
      >
        -
      </button>

      <input type="text" value={cartItems[id]} onChange={(e)=>updateCartItemCount} />
      <button style={{padding:"8px 20px",backgroundColor:"#088178",color:"white",fontSize:"20px"}}
      onClick={()=>{
        addToCart(id)
      }}
      
      >
        +
      </button>
            </td>
            </tr>
        </tbody>
    </table>
    </div>
  </section>  */}
   <tbody>






<tr>
  <td><img src={image} alt=""/></td>

 <td>
  <div style={{whiteSpace:'pre-wrap'}}>{title}</div>
<div><strong>Price</strong>: <span style={{fontWeight:"900"}}>{price}</span> 
 </div>
  </td>
 
 
 <td>
 <button style={{padding:"10px 10px",backgroundColor:"#088178",color:"white",fontSize:"15px"}}
      onClick={()=>{
        removeToCart(id)
      }}
      
      >
        -
      </button>

      <input style={{width:"30px",padding:"10px 0", textAlign:"center",fontSize:"15px"}} type="text" value={cartItems[id]} onChange={(e)=>updateCartItemCount} />


      <button style={{padding:"10px 10px",backgroundColor:"#088178",color:"white",fontSize:"15px"}}
      onClick={()=>{
        addToCart(id)
      }}
      
      >
        +
      </button>

</td>
 



</tr> 



</tbody>
 
 
  </>
  )
}

export default CartItem
