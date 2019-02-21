import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = ({})
  }
  logo = "https://files.slack.com/files-pri/T4JUEB3ME-FGA77UXLL/logo.png";
  
  logOut = e => {
    e.preventDefault();
    window.localStorage.removeItem('user');
    window.location.reload();
  }

  render(){
    return (
      <div className='bar'>
       <div className='title'> 
       <i onClick={this.logOut} className="fab fa-instagram fa-2x" />
       <img src={this.logo}/>
       </div>
       <div>
        <input type="text" placeholder="Search" preventDefault />
       </div>
       <div className='icons'>
        <i className="far fa-compass fa-2x" />   
        <i className="far fa-heart fa-2x" /> 
        <i className="far fa-user fa-2x" /> 
       </div>
      </div>
    );
}
}

export default NavBar


