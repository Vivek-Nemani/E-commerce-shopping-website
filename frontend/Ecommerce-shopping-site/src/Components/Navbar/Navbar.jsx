import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useState } from 'react'

export const Navbar = () => {
  const [menu, setmenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPEEE</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=> {setmenu("shop")}}>SHOP{menu === "shop"? <hr/>:<></>}</li>
          <li onClick={()=> {setmenu("men")}}>MEN{menu === "men"? <hr/>:<></>}</li>
          <li onClick={()=> {setmenu("women")}}>WOMEN{menu === "women"? <hr/>:<></>}</li>
          <li onClick={()=> {setmenu("kids")}}>KIDS{menu === "kids"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
