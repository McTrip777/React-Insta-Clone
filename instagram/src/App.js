import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import NavBar from './components/SearchBar/NavBar';
import PostContent from './components/PostContainer/PostContent';


class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData:[],
      on: false,
    }
  }
  componentDidMount(){
    this.setState({ dummyData: dummyData });
  }

  toggle = () => {
    this.setState({
      on:!this.state.on
    })
}

  render() {
    console.log(this.state.dummyData)
    return (
      <div className='App'>
        <NavBar />
        <PostContent toggle={this.toggle} allData={this.state.dummyData} />  
      </div>
    );
  }
}

export default App;
