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
        <form onSubmit={this.props.logIn} className="form">
            <input 
            className ='logInput user' 
            onChange={this.props.handleChanges}
            type='text' 
            value={this.props.inputText}
            placeholder='Username' 
            name="inputText"
            />
        </form>
        <form onSubmit={this.props.logIn} className="form">
            <input 
            className ='logInput pass' 
            onChange={this.props.handleChanges}
            type='text' 
            value={this.props.password}
            placeholder='Password' 
            name='password'
            />
        </form>
         <button onClick={this.props.logIn} type='submit'>Log in</button>
       </div>
    )
  }
}

export default LogIn

