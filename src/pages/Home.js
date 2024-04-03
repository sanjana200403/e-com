import React from 'react'
import Featureproduct from '../components/Featureproduct'
import Feature from '../components/Feature'
import Arrivalproduct from '../components/Arrivalproduct'

function Home({addToFav}) {
  return (
    <>
  {/* hero section */}
    <section id="hero">

    <h4>Trade-in-offer</h4>
    <h2>Super Value Deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off </p>
    <button>Shop Now</button>
</section>


    {/* // hero section */}
{/* fearture */}
<Feature/>

{/* fearture */}
    {/* productss */}
    <section id="product" className="section-p1">
    <h2>Featurd Product</h2>
    <p>Summer Collection New Modern Design</p>
   <Featureproduct/>
   
    </section>
    

    {/* products */}
    {/* small banner */}
    <section id="banner" className="section-m1">
<h4>
    Repair Services
</h4>
<h2>UP to 
    <span>70% off</span>- All t-shirt & Accessories</h2>
    <button>Explore more</button>
</section>

  {/* small banner */}

  {/* new arrival */}
  <section id="product" className="section-p1">
    <h2>New Arrivals</h2>
    <p>Summer Collection New Modern Design</p>
   <Arrivalproduct/>
   
    </section>
    {/* new arrival */}
{/* sm-banner */}
<section id="sm-banner" className="section-p1">


    <div className="banner-box">
        <h4>Crazy Deals</h4>
        <h2>Buy 1 get 1</h2>
        <span>The best classic dress is on sale at coras</span>
        <button>Learn more</button>
    </div>
    {/* <!--  2--> */}
    <div className="banner-box bb-2">
        <h4>Spring/Summer</h4>
        <h2>Upcoming season</h2>
        <span>The best classic dress is on sale at coras</span>
        <button>Collection</button>
    </div>

    
   
    
   
    
</section>
    {/*sm-banner  */}
    {/*sale cardssss */}
    <section id="banner3">
    <div className="banner-box b3-1">
        <h2>Seasonal sale</h2>
        <h3>Wedding Collection :2023</h3>
    </div>
  
    <div className="banner-box b3-2">
        <h2>Seasonal sale</h2>
        <h3>Winter Collection -50% OFF</h3>
    </div>
    
    <div className="banner-box b3-3">
        <h2>Seasonal sale</h2>
        <h3>Summer Collection -50% OFF</h3>
    </div>
</section>


{/*sale cardssss */}
    </>
  )
}

export default Home
