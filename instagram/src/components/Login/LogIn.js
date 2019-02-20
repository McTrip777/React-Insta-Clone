import React, { Component } from 'react'
import './LogIn.css'

class LogIn extends Component {
  render() {
    return (
        <div className="loginPage">
        <h2>Welcome! Please Log In</h2>
        <form className="form">
            <input className ='input user' type='text' placeholder='Username' />
            <input className ='input pass' type='text' placeholder='Password' />
        </form>
         <button>Log in</button>
       </div>
    )
  }
}

export default LogIn

