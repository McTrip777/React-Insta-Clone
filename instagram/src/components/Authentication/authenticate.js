import React, { Component } from 'react';

const authenticate = App => LogIn =>
  class  extends Component {
    constructor(){
      super();
      this.state=({
        loggedIn:false,
      })
    }

    toggleLogIn = () => this.setState ({ loggedIn: !this.state.loggedIn });

    render() {
        if (this.state.loggedIn){
     return <App />;
    }
     return <LogIn toggleLogIn={this.toggleLogIn}/>;
    }
  }


export default authenticate;
