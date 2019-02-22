import React, { Component } from 'react';

const authenticate = App => LogIn =>
  class  extends Component {
    constructor(){
      super();
      this.state=({
        inputText:'',
        password:'',
      })
    }

    handleChanges = e => this.setState ({[e.target.name]: e.target.value });

    logIn = e => {
      e.preventDefault();
      window.localStorage.setItem('user', this.state.inputText);
      window.localStorage.setItem('code', this.state.password);
      window.location.reload();
    }

    render() {
        if (localStorage.getItem('user') && localStorage.getItem('code')){
     return <App />;
    }
     return <LogIn 
     inputText={this.state.inputText} 
     password={this.state.password}
     handleChanges={this.handleChanges} 
     logIn={this.logIn}
     name={this.state.name}
     />;
    }
  }


export default authenticate;
