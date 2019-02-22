import React, { Component } from 'react';
import authenticate from './components/Authentication/authenticate'
import InstaPostPage from './components/PostContainer/InstaPostPage';
import LogIn from './components/Login/LogIn'
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center
`;

export class App extends Component {
    constructor(){
        super();
        this.state = ({
        });
    }
  render() {
    return (
      <AppContainer>
        <InstaPostPage />
      </AppContainer>
    )
  }
}

export default authenticate(App)(LogIn);
