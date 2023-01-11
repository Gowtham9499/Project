import React from 'react';
import {Link} from 'react-router-dom';
import './App.css'

const Navbar = () => {
  return (
    <div>
   
   <Link to='/'><div className='navlinks'><p>Home</p></div></Link>

   <Link to='/about'><div className='navlinks'><p>About</p></div></Link>
   
   <Link to ='/contact'><div className='navlinks'><p>Contact</p></div></Link>
    
   <Link to='/services'><div className='navlinks'><p>Services</p></div></Link>
          
   <Link to='/usedetails'><div className='navlinks'><p>Enter your Details</p></div></Link>
        
    </div>
  )
}

export default Navbar