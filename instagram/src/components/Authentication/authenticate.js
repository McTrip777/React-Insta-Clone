import React, { Component } from 'react';

const authenticate = App => 
  class  extends Component {
    render() {
      return (
        <div>
          <App />
        </div>    
    )}
  }


export default authenticate;
