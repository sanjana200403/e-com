import React from 'react'
import Prod from './Prod'
import { PRODUCTS,PRODUCTS1 } from './products'

function Shopitem({addToFav}) {
  return (
    
    <>
    <div className="pro-container">
{[...PRODUCTS,...PRODUCTS1].map((product,i)=>(
    
    <Prod key={i} data={product} addToFav={addToFav}/>
    
))

}

    </div>

    
    </>
  )
}

export default Shopitem
