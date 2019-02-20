import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import NavBar from './components/SearchBar/NavBar';
import PostContent from './components/PostContainer/PostContent';


class App extends Component {
  constructor(){
    super();
    this.state =({
      dummyData:[],
    })
  }
  componentDidMount(){
    this.setState({ dummyData: dummyData });
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <PostContent 
        post={this.state.dummyData} />  
      </div>
    )
  }
}

export default App;
