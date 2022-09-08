import React from 'react'
import imageProfile from '../images/profile-img.jpg'
import Sidebar from '../Sidebar/Sidebar'
import './SinglePost.css'
const SinglePost = () => {
  return (
   <div className='singlepost'>
    <div className='main__singlepost'>
        <div className="singlepost__img">
           <img src={imageProfile} alt=""  className='single__img'/>
        </div>
         
        <h3>the best tour</h3>
        <span>1 hours ago </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat 
            distinctio in aut beatae culpa hic quasi, veritatis fuga dolor alias
             quia molestiae non, ipsam omnis necessitatibus quod quam quibusdam 
             repellendus a qui minima voluptate odio incidunt! Temporibus aliquam pariatur 
            obcaecati molestiae provident soluta. Laboriosam sit tempore mollitia
             minima saepe? <br />
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat 
            distinctio in aut beatae culpa hic quasi, veritatis fuga dolor alias
             quia molestiae non, ipsam omnis necessitatibus quod quam quibusdam 
             repellendus a qui minima voluptate odio incidunt! Temporibus aliquam pariatur 
            obcaecati molestiae provident soluta. Laboriosam sit tempore mollitia
             minima saepe? 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat 
            distinctio in aut beatae culpa hic quasi, veritatis fuga dolor alias
             quia molestiae non, ipsam omnis necessitatibus quod quam quibusdam 
             repellendus a qui minima voluptate odio incidunt! Temporibus aliquam pariatur 
            obcaecati molestiae provident soluta. Laboriosam sit tempore mollitia
             minima saepe? 

         </p>

    </div>
    <Sidebar />
    </div>
  )
}

export default SinglePost