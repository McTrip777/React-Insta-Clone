import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import NavBar from './components/SearchBar/NavBar';
import PostContent from './components/PostContainer/PostContent';
import CommentContent from './components/CommentSection/CommentContent';


class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData,
    }
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <PostContent allData={this.state.dummyData} />
        <CommentContent allData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
