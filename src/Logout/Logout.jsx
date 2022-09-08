import React from 'react'
import './Logout.css'
const Logout = () => {
  return (
    <div className='register__container'>
       <label htmlFor="register">Username</label>
       <input type="text" />
       <label htmlFor="register">Email</label>
       <input type="text" />
       <label htmlFor="register">Password</label>
       <input type="text" />
        <button className='btn__input'>Register</button>
    </div>
  )
}

export default Logout