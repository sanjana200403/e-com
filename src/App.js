import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Whishlist from './pages/Whishlist';
import Login from './pages/Login';
import Newsletter from './components/Newsletter';
import ShopContext from './components/shopcontext'
import Detaile from './pages/Detaile';
import { useEffect, useState } from 'react';
import Filter from './pages/Filter';

function App() {


   const saveToLocalStorage = (item)=>{
    console.log(item)
    let storedNames = JSON.parse(localStorage.getItem("productdetails"));
    if(storedNames!==null){
        storedNames.push(item)
    }
    else{
        storedNames = []
        storedNames.push(item)
    }


   localStorage.setItem("productdetails",JSON.stringify(storedNames))
  
    // setFavorite(storedNames)
 
    



   }  
   const removeFavouriteMovie = (id)=>{
    console.log(id)
    var storedNames = JSON.parse(localStorage.getItem("productdetails"));
    const newArr = storedNames.filter((e)=>e.id !=id)
    // console.log(object)
    localStorage.setItem("productdetails",JSON.stringify(newArr))
    // setFavorite(newArr)

   }
  //  useEffect(()=>{

  //  },[favourites])
      
 
  
  return (
    <>
  <ShopContext>
      
    <Navbar/>


    <Switch>
                <Route path="/" exact >
              <Home  />
                </Route>
                
                
                <Route exact path="/shop">
                  <Shop addToFav = {saveToLocalStorage} />
                  </Route>
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/wishlist">
                  <Whishlist
                  //  fav={favourites}  
                  
      removeFavouriteMovie={ removeFavouriteMovie}
                  />
                </Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/details" component={Detaile} />
                <Route exact path="/filter" addToFav = {saveToLocalStorage}>
                  <Filter/>
                </Route>
               
               
            </Switch>
<Newsletter/>
<Footer/>
</ShopContext>

    </>
  );
}

export default App;
