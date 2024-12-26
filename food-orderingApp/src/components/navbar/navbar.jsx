import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className='navbar-menu'>
        <li className={menu === "Home" ? "active" : ""} onClick={() =>setMenu("Home")}>Home</li>
        <li className={menu === "Menu" ? "active" : ""} onClick={() =>setMenu("Menu")} >Menu</li>
        <li className={menu === "Mobile-App" ? "active" : ""} onClick={() =>setMenu("Mobile-App")}>Mobile-App</li>
        <li className={menu === "Contact Us" ? "active" : ""} onClick={() =>setMenu("Contact us")} >Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Basket" />
          <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;