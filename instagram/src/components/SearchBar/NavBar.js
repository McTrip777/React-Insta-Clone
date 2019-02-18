import React from 'react'
import './NavBar.css'


const NavBar = () => {
    return (
      <div className='bar'>
       <div className='title'> 
       <i className="fab fa-instagram fa-2x" />
       <h1>Instagram</h1>
       </div>
       <div>
        <input type="text" placeholder="Search" />
       </div>
       <div className='icons'>
        <i className="far fa-compass fa-2x" />   
        <i className="far fa-heart fa-2x" /> 
        <i className="far fa-user fa-2x" /> 
       </div>
      </div>
    );
}

export default NavBar


