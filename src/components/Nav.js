import React from 'react'
import './nav.css'
function Nav({handleInputChange,query}) {
  return (
<>
<nav>
   <div className="nav-container">
    <div className='input'>

   <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search Product"
          />
<i class="fa-solid fa-magnifying-glass"></i>
          </div>
    </div>
   
   
</nav>
</>
  )
}

export default Nav
