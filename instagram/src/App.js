import React, { Component } from 'react';
import './App.css';
import authenticate from './components/Authentication/authenticate'
import InstaPostPage from './components/PostContainer/InstaPostPage';
import LogIn from './components/Login/LogIn'

export class App extends Component {
    constructor(){
        super();
        this.state = ({
        });
    }
  render() {
    return (
      <div>
        <LogIn />
        <InstaPostPage />
      </div>
    )
  }
}

export default authenticate;
