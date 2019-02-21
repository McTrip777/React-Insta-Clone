import React from 'react';
import './NavBar.css'
import styled from 'styled-components';

const Bar = styled.div`
display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rem solid black;
`;

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      post: this.props.post,
    })
  }
  logo = "https://files.slack.com/files-pri/T4JUEB3ME-FGA77UXLL/logo.png";
  
  logOut = e => {
    e.preventDefault();
    window.localStorage.removeItem('user');
    window.location.reload();
  }

  selectUser = e => {
    this.setState({ username: e.target.value });
  }

  searchUser = search => {
    this.setState({
      post: this.state.post.filter(item => {
        if (search === item.username){
        return {
          item,
        }
       }
       else{
        return item;
       }
      })
    })
  };

  render(){
    return (
      <Bar>
       <div className='title'> 
       <i onClick={this.logOut} className="fab fa-instagram fa-2x" />
       <img src={this.logo}/>
       </div>
       <div>
      <form onSubmit={this.props.submitComment}>   
        <input 
          type="text" 
          placeholder="Search" 
          onClick={() => this.searchUser(this.props.post.username)} 
        />
      </form>
       </div>
       <div className='icons'>
        <i className="far fa-compass fa-2x" />   
        <i className="far fa-heart fa-2x" /> 
        <i className="far fa-user fa-2x" /> 
       </div>
      </Bar>
    );
}
}

export default NavBar


