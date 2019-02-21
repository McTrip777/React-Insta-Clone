import React, { Component } from 'react'
import './LogIn.css'

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = ({
            
        })
    }


  render() {
    return (
        <div className="loginPage">
        <h2 className="logTitle">Welcome! Please Log In</h2>
        <form className="form">
            <input 
            className ='logInput user' 
            onChange={this.props.handleChanges}
            type='text' 
            value={this.props.inputText}
            placeholder='Username' 
            />

            <input 
            className ='logInput pass' 
            type='text' 
            placeholder='Password' 
            />
        </form>
         <button onClick={this.props.logIn}>Log in</button>
       </div>
    )
  }
}

export default LogIn

