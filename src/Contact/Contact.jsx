import React from 'react'
import './Contact.css'
import contactImg from '../images/contact-img.jpg'
const Contact = () => {
  return (
    <div className='contact__container'>
        <div className="contact__left">
            <img src={contactImg} alt="" className='contact__img' />
        </div>
        <div className="contact__right">
            <h3>let level up your  brand, together</h3>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Phone</label>
            <input type="text" />
            <label htmlFor="">how can we help you</label>
            <input type="text"  id='input__msg'/>
            <button className='contact__btn'>Get Started</button>
        </div>
    </div>
  )
}

export default Contact