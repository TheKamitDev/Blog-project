import React from 'react'
import profileImage from '../images/profile-img.jpg'
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="home__right">
    <h2> About me </h2>
    <img src={profileImage} className='home__profile'/>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
    </p>
    <h2 className='border__line'>categorie</h2>
     <div className='categorie'>
       <ul>
           <li>life</li>
           <li>sport</li>
           <li>news</li>
       </ul>
       <ul>
           <li>life</li>
           <li>life</li>
           <li>lion</li>
       </ul>
     </div>
     <h2 className='border__line'>follow us</h2>
     <div className="social__links">
          <FaFacebook className='social__icon'/>
          <FaInstagram className='social__icon'/>
          <FaTwitter className='social__icon'/>
          <FaLinkedin className='social__icon'/>
     </div>
</div>
  )
}

export default Sidebar
