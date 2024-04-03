import React from 'react'
import { useState } from 'react'
import { PRODUCTS } from '../components/products'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Produc from '../components/Produc'
import Sidebar from '../components/Sidebar'


function Filter({ addToFav }) {
    const [selectedCategory , setSelectedCategory] = useState(null)
    const [query,setQuery] = useState("")

    // input filter
    
    
  
     const  handleInputChange  = (e)=>{
  setQuery(e.target.value)
     }
     const filterItems = PRODUCTS.filter(product=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1)
    //  radio filter
    const handleChange =  event =>{
      setSelectedCategory(event.target.value)
        
  
    } 
    // button filters
    const handleClick = event =>{
      setSelectedCategory(event.target.value)
    }
    function filterData(product,selected,query){
      let filterProducts =  product
      if(query){
  filterProducts = filterItems
  
      }
      if(selected){
        filterProducts = filterProducts.filter(({category,color,company,newPrice,title})=>category === selected ||color ===selected ||company=== selected|| newPrice === selected || selected === title)
  
      }
      return filterProducts.map((product,i)=>(
        <Card
       key={i}
       data= {product}
       addToFav ={addToFav}
  
        />
      ))
  
    }
    const result = filterData(PRODUCTS,selectedCategory,query)
  return (
    
    <>
   <div>
     <Nav query={query} handleInputChange={handleInputChange}/>
     <Sidebar handleChange={handleChange} />
     <div className="container">
      
     {/* <Recommended handleClick={handleClick}/> */}
     <Produc result={result}  />
     </div>
    
     
    </div>
 
 
    </>
  )
}

export default Filter
