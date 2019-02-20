import React, { Component } from 'react';
import dummyData from '../dummy-data';
import NavBar from '../SearchBar/NavBar';
import PostContent from './PostContent';


class InstaPostPage extends Component {
  constructor(props){
    super(props);
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

export default InstaPostPage;
