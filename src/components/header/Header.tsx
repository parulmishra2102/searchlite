import React from 'react'
import pic from "../../images/logo1.png"
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <img src={pic} alt="error" className='img' />
    </div>
  )
}

export default Header