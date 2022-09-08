import React from 'react'
import './UpdateProfile.css'
const UpdateProfile = () => {
  return (
  <div className='update__container'>
    <div className='update__right'>
        <h2>update yor profile</h2>
        <h3>profile picture</h3>
        <div className="profile__wrapper">
            <img src="" alt="" />
            <button></button>
        </div>
        <form action="">
            <label htmlFor="Username"></label>
            <input type="text" />
            <label htmlFor="Email"></label>
            <input type="text" />
            <label htmlFor="Password"></label>
            <input type="text" />
        </form>
    </div>
  </div>
  )
}

export default UpdateProfile