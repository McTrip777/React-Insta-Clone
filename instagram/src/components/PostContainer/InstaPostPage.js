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
    this.setState({ search: e.target.value.substr(0,20) });
  }

  render() {
    let filteredPost = this.state.dummyData.filter(item => {
      return item.username.indexOf(this.state.search) !== -1;
    }
    );
    return (
      <div>
        <NavBar search={this.state.search} post={this.props.dummyData} selectUser={this.selectUser}/>
        {filteredPost.map(item => {
          return <PostContent 
          item={item}
          post={this.state.dummyData}   
          key={item.username}/>
        })}
      </div> 
    )
  }
}

export default InstaPostPage;
