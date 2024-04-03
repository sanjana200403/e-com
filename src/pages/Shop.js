import React from 'react'
import Shopitem from '../components/Shopitem'

function Shop({addToFav}) {
  
  return (
    
    <>
    {/* shop banner */}
    <section id="page-header">

   
    
    <h2>#StayHome</h2>
   
    
    <p>Save more with coupons & up to 70% off </p>
   
    
</section>
    
    {/* shop banner */}
    <section id="product" className="section-p1">

      <Shopitem addToFav={addToFav}/>
    </section>
    </>
  )
}

export default Shop
