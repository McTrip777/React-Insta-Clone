import React, { Component } from 'react';

const authenticate = App => LogIn =>
  class  extends Component {
    constructor(){
      super();
      this.state=({
        inputText:'',
      })
    }

    handleChanges = e => this.setState ({ inputText: e.target.value });

    logIn = e => {
      e.preventDefault();
      window.localStorage.setItem('user', this.state.inputText);
      window.location.reload();
    }

    render() {
        if (localStorage.getItem('user')){
     return <App />;
    }
     return <LogIn 
     inputText={this.state.inputText} 
     handleChanges={this.handleChanges} 
     logIn={this.logIn}
     />;
    }
  }


export default authenticate;
