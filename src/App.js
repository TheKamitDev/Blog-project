import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import Write from './Write/Write.jsx'
import Logout from './Logout/Logout.jsx'
import Home from './Home/Home.jsx'
import SinlePost from './SinglePost/SinglePost.jsx'
import './App.css'
import SinglePost from './SinglePost/SinglePost.jsx';
import UpdateProfile from './Updateprofile/UpdateProfile.jsx';
const App = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />        
          <Route exact path="/contact" element={<Contact />} />        
          <Route exact path="/write" element={<Write />} />        
          <Route exact path="/logout" element={<Logout />} />        
          <Route exact path="/singlepost" element={<SinglePost />} />            
       </Routes>
    </Router>
    </>
  )
}

export default App