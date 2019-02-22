import React, { Component } from 'react';
import dummyData from '../dummy-data';
import NavBar from '../SearchBar/NavBar';
import PostContent from './PostContent';


class InstaPostPage extends Component {
  constructor(props){
    super(props);
    this.state =({
      dummyData:[],
      search:''
    })
  }
  componentDidMount(){
    this.setState({ dummyData: dummyData });
  }

  selectUser = e => {
    this.setState({ search: e.target.value });
  }

  SearchMethod = e =>{
    e.preventDefault();
  if (this.state.search === ""){
    this.setState ({ 
      dummyData,
    })
  }
  else{
    let filteredPost = this.state.dummyData.filter(item => {
      return item.username.includes(this.state.search);
    }
    );
    this.setState({
      dummyData: filteredPost,
    })
  }
}

  render() {
    return (
      <div>
        <NavBar search={this.state.search} 
        post={this.state.dummyData} 
        selectUser={this.selectUser}
        SearchMethod={this.SearchMethod}
        />
        <PostContent 
          post={this.state.dummyData}   
          key={dummyData.username}/>
        
      </div> 
    )
  }
}

export default InstaPostPage;
