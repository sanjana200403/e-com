import React from 'react'

function Footer() {
  return (
   
   <>
   <footer className="section-p1">
    <div className="col">
        <img src="https://www.gartner.com/pi/vendorimages/cora-systems_project-portfolio-management-worldwide_1627042717398.png" className="logo" width="100px" alt=""/>
        <h4>Contact</h4>
        <p><strong>Address:</strong>5462 Wellington Bood Street 32 Son Francico</p>
        <p><strong>Phone:</strong>91-844964776/91-96656567</p>
        <p><strong>Hours:</strong>10:00 - 19:00 ,Mon- Sat</p>
        <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-youtube"></i>
                

            </div>
        </div>
    </div>


    <div className="col">
        <h4>About</h4>

<a href="">About us</a>
<a href="">Privacy Policy</a>
<a href="">Term & Condition</a>
<a href="">Delivery Information</a>
<a href="">Contact</a>
    </div>
    
    <div className="col">
        <h4>My Accounts</h4>
        <a href="">Sign In</a>
        <a href="">View Cart</a>
        <a href="">My WishList</a>
        <a href="">Track My Order</a>
        <a href="">Help</a>
    </div>
    <div className="col install">
        <h4>Install App </h4>
        <p>From Aop stores or Google Play</p>
    <div className="row">

    <img src="img2/apple.png" width="150px" alt=""/>
    <img src="img2/google.png" width="150px" alt=""/>
    
    </div>
<p>Secured Payment Gateways</p>


    </div>

    
    

</footer>
<div className="copyright">
    <p>2023.tech etc - HTML CSS Ecommerce Template</p>
</div>
   </>
  )
}

export default Footer
