import React from 'react'
import './NavBar.css'


const NavBar = () => {
  const logo = "https://files.slack.com/files-pri/T4JUEB3ME-FGA77UXLL/logo.png"
    return (
      <div className='bar'>
       <div className='title'> 
       <i className="fab fa-instagram fa-2x" />
       <img src={logo}/>
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


