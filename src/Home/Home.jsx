import React from 'react'
import desktopImage from '../images/desktop-image-hero-1.jpg'
import profileImage from '../images/profile-img.jpg'
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Home.css'
import Sidebar from '../Sidebar/Sidebar.jsx'
const Home = () => {
  return (
    <div className='home__container'>
    <main className='home'>
      <div className="home__left">
        <div className="blog">
          <img src={desktopImage} alt="" className='post__img' />
          <h3>the best furniture</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
          </p>
        </div>
        <div className="blog">
          <img src={desktopImage} alt="" className='post__img' />
          <h3>the best furniture</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
          </p>
        </div>
        <div className="blog">
          <img src={desktopImage} alt="" className='post__img' />
          <h3>the best furniture</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
          </p>
        </div>
        <div className="blog">
          <img src={desktopImage} alt="" className='post__img' />
          <h3>the best furniture</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur.
          </p>
        </div>
        
      </div>
      <Sidebar />
    </main>
  </div>
  )
}

export default Home