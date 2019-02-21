import React, { Component } from 'react'
import styled from 'styled-components';

const LogInPage = styled.div`
    display:flex
    flex-direction: column
    align-items: center
    padding:2rem 0
    background-color: rgb(116, 116, 145)
`;

const LogInTitle = styled.h2`
    color:white
    font-size: 2.5rem
    background-color: rgb(45, 45, 45)
    width:100%
    text-align: center
    padding:1rem
`;
const Form = styled.form`
    display:flex;
    flex-direction: column;
`;
const LogInInput = styled.input`
    width:15rem;
    height:3rem;
    font-size:1.8rem;
    padding:1rem;
    margin-bottom:1rem;
    border-radius:1rem;
    text-align: center;
    border: 2px solid black;
`;

const LogInButton = styled.button`
    color:black
    font-size: 1.5rem
    background-color: rgb(45, 45, 45)
    width:100%
    text-align: center
    border-radius:.5rem;
    border: 1px solid black;
`;

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = ({
            
        })
    }


  render() {
    return (
        <LogInPage>
        <LogInTitle>Welcome! Please Log In</LogInTitle>
        <Form onSubmit={this.props.logIn} >
            <LogInInput 
            onChange={this.props.handleChanges}
            type='text' 
            value={this.props.inputText}
            placeholder='Username' 
            name="inputText"
            />
        </Form>
        <Form onSubmit={this.props.logIn} className="form">
            <LogInInput 
            onChange={this.props.handleChanges}
            type='text' 
            value={this.props.password}
            placeholder='Password' 
            name='password'
            />
        </Form>
         <LogInButton onClick={this.props.logIn} type='submit'> Log in </LogInButton>
       </LogInPage>
    )
  }
}

export default LogIn

