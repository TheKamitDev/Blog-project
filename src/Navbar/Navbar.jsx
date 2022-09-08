import React from 'react'
import './Navbar.css'
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="social__links">
         <FaFacebook className='social__icon'/>
         <FaInstagram className='social__icon'/>
         <FaTwitter className='social__icon'/>
         <FaLinkedin className='social__icon'/>
       </div>
       <ul>
        <li><a href=""> <Link to="/">Home</Link> </a></li>
        <li><a href=""> <Link to="/about">about</Link> </a></li>
        <li><a href=""> <Link to="/contact">contact</Link> </a></li>
        <li><a href=""> <Link to="/write">Write</Link> </a></li>
        <li><a href=""> <Link to="/logout">logout</Link> </a></li>
        
       </ul>
       <div className="profile">
        <img src="../images/avatar-ali.png" alt="" />
        <FaSearch/>
       </div>
    </div>
  )
}


export default Navbar