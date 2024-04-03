import React from 'react'

function Newsletter() {
  return (
    
    <>
    <section id="newsLetter" className="section-m1 section-p1">
    <div className="newsText">
        <h4>Sign Up For NewsLetters</h4>
        <p>Get E-mail updates about our latest shop and <span>
             special offers
            </span></p>
    </div>
    <div className="form">
        <input type="text" placeholder="your email address"/>
        <button>Sign Up</button>
    </div>
</section>
    </>
  )
}

export default Newsletter
