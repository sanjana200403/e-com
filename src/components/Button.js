import React from 'react'

function Button({onClickHandler,value,title}) {
  return (
    
    
    <button className='btn'onClick={onClickHandler} value={value} >{title}</button>
  )
}

export default Button
