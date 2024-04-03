import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Whishlist({}) {
  // console.log(fav,"fav")
  const [localFav,setLocalFav] = useState([])

  const removeFavouriteMovie = (id)=>{
    console.log(id)
    var storedNames = JSON.parse(localStorage.getItem("productdetails"));
    const newArr = storedNames.filter((e)=>e.id !=id)
    // console.log(object)
    localStorage.setItem("productdetails",JSON.stringify(newArr))
    setLocalFav(newArr)

   }

  useEffect(()=>{
    
    let items = JSON.parse(localStorage.getItem("productdetails"))
    setLocalFav(items)

  },[])
  if(localFav <=0){
    return(
      <>
      <div className='d-flex justify-content-center align-items-center' style={{height: "500px",display:"flex",width:"95%",justifyContent:"center", alignItems:"center" ,flexDirection:"column" }}>

      <div style={{fontSize:"30px"}}>
      Whishlist is empty
        </div>
        
      <p><Link to="/shop">CLICK HERE TO Add to Fav</Link></p>
      </div>
      </>
    )

  }

  
  return (
    <>
    <section id="product" className="section-p1">
      
     <div className="pro-container" id="newArrival">
      {localFav.map(product=>(
        
         <div key={product.id} className="pro">
            <a href="sproduct9.html">
                <img src={product.image} className="img" alt=""/></a>
            <div className="des">
                <span>{product.brand}</span>
                <h5 className="sTitle">
                    {product.title}
                </h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4 className="sPrice">${product.price}
                </h4>
            </div>
            <button 
            style={{padding:"5px 20px",background:'#088178',color:'white',cursor:'pointer'}}
            onClick={()=>{
             removeFavouriteMovie(product.id)
            }}>Remove From Favorite</button>
          
          
        </div>
        
      ))


      } 
       
      
      
   
   
        
    
    </div>
    </section>
    </>
    
  )
}

export default Whishlist
