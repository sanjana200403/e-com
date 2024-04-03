import React from 'react'
import Feature from '../components/Feature'



function About() {
  return (

<>
<section id="page-header" class="about-header" >

   
    
    <h2>#About Us</h2>
   
    
    <p>Save more with coupons & up to 70% off </p>
   
    
</section>
{/* <!-- about head --> */}

<section id="about-head" class="section-p1">

<img src="https://as2.ftcdn.net/v2/jpg/06/43/51/87/1000_F_643518724_o6VK26yWgTaLEmxi3MqMLa6pgsu2QKIZ.jpg" alt=""/>
<div>
    <h2>Who we  are ?</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad architecto reiciendis accusamus velit non alias. Vero cumque officia recusandae, incidunt soluta nesciunt fugiat corporis, voluptatem iusto molestiae amet aspernatur animi? Impedit animi ipsum provident, saepe doloremque possimus libero inventore atque eos accusamus nam aspernatur quasi asperiores, dolorem reprehenderit necessitatibus illum fugit architecto. Eligendi eius alias sint rem quas, ex, ipsa incidunt laborum distinctio animi asperiores voluptatem?</p>
    <abbr title="">Creating stunning images with much or as little control as you like to a choise of basic and creative modes</abbr>
    <br/>
    <marquee bgcolor="#ccc" scrollamount="5" loop="-1" width="100%">Creating stunning images with much or as little control as you like to a choise of basic and creative modes</marquee>
</div>
</section>
{/* <!-- about head --> */}
<section id="about-app">


    <h1>DOWNLOAD OUR <a href="">APP</a></h1>
    <div class="video">
        {/* <video autoplay muted loop src="img/vi.mp4"></video> */}
        <iframe id='video'
        //  width="70%" height="366"
         src="https://www.youtube.com/embed/YdHK9JOf_K0" title="Company Presentation Video Template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </div>
</section>

<Feature/>

</>
  )
}

export default About
