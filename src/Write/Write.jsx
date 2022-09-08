import React from 'react'
import imageProfile from '../images/profile-img.jpg'
import {FaPlus} from "react-icons/fa";
import './Write.css'
const write = () => {
  return (
    <div className='main__write'>
      <img src={imageProfile} alt=""  className='single__img'/>
      <div className="write__items">
        <FaPlus className='plus__btn' type='file'/>
         <input type="text"  className='writeInput__title'  placeholder='title....' autoFocus/ >
          <button className='btn'>Publish</button>
      </div>
      <input type="text" className='input__infos' placeholder='write.....' autoFocus />
    </div>
  )
}

export default write