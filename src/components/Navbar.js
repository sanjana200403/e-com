
import * as React from "react";
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ShopContext } from "./shopcontext";
import { useEffect } from "react";

function Navbar() {
    const location =  useLocation();
 const [style,setStyle] =useState({}) 
 const {getTotalCartProducts,cartItems} = useContext(ShopContext)
const  totalProducts =  getTotalCartProducts();
useEffect(()=>{
    window.scroll(0,0)

},[location])
    

const open = ()=>{
    console.log("kjd")
    setStyle({
        right:0,
        transition:"0.5s"
    })
}
const close = ()=>{
    console.log("close")
    setStyle({
        right:"-100%" ,
        transition:"0.8s"
    })
}

  return (
  
  <>
  
  <section id="header">
        <a href="#"><img  width="100px" src="https://www.gartner.com/pi/vendorimages/cora-systems_project-portfolio-management-worldwide_1627042717398.png" className="logo" alt=""/></a>
        <div>
            <ul id="navbar" style={style} >
                <li><Link to="/" className={location.pathname=='/' ? 'active':""}>Home</Link></li> 
                <li><Link to="shop" className={location.pathname=='/shop' ? 'active':""}
                 >Shop</Link></li>
                <li><Link to="blog" className={location.pathname=='/blog' ? 'active':""}>blog</Link></li>
                <li><Link to="/about" className={location.pathname=='/about' ? 'active':""}>about</Link></li>
                <li><Link to="filter" className={location.pathname=='/filter' ? 'active':""}>Filter</Link></li>
                <li><Link to="contact" className={location.pathname=='/contact' ? 'active':""}>contact</Link></li>
                <li><Link to="wishlist" className={location.pathname=='/wishlist' ? 'active':""}>WhisList</Link></li>
            
                <li>
                <Link to="login" className={location.pathname=='/login' ? 'active':""}><i 
                className="fa-solid fa-user"></i></Link>
                </li>
                <li>
                   
                   
                    <Link to="cart" className={location.pathname=='/cart' ? 'active':""}>
                <i id="lg-bag"
                    className="fa-solid fa-cart-shopping" >
                         
                         
        
        
                    </i>{ totalProducts>0 &&

            
         
<span style={{fontSize:"20px"}}>
 {totalProducts}
</span>

}
                    
                    
                    </Link>
                   
                   
                    </li>
                    
                    
                    
                <i className="fas fa-times" 
                
                    id="close"   onClick={()=>close()}></i>
            </ul>
        </div>
        <div id="mobil">
            
            
       
       
           <Link to="cart" 
           >
           <i className="fa-solid fa-cart-shopping " id="bg">
           { totalProducts>0 &&

            
         
<span style={{fontSize:"20px"}}>
 {totalProducts}
</span>

}
  
  
            </i>
          
          
            </Link>
            <i id="bar"
             
             onClick={()=>open()}
         className="fas fa-outdent"></i>
        </div>
       
       
            </section>
  
  </>
  )
}

export default Navbar
