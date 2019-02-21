import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rem solid black;
`;
const NavBarTitle = styled.div`
  display: flex;
  align-items: center;
`;
const NavBarTitleI = styled.i`
  margin:1rem;
`;
const NavBarTitleImg = styled.img`
  border-left: 1px solid grey;
  height:4rem;
  padding-left:1rem;
`;
const NavBarInput = styled.input`
  width:15rem;
  height: 1.5rem;
  border-radius: 1rem;
`;
const NavBarIcons = styled.div`
  display: flex;
`;
const NavBarIcons_Icon = styled.i`
  padding-right:1rem;
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

  render(){
    return (
      <Bar>
       <NavBarTitle> 
       <NavBarTitleI onClick={this.logOut} className="fab fa-instagram fa-2x" />
       <NavBarTitleImg src={this.logo}/>
       </NavBarTitle>
       <div>


      <form>   
        <NavBarInput 
          type="text" 
          placeholder="Search" 
          onChange={this.props.selectUser} 
          value={this.props.search}
          name='search'
        />
      </form>


       </div>
       <NavBarIcons>
        <NavBarIcons_Icon className="far fa-compass fa-2x" />   
        <NavBarIcons_Icon className="far fa-heart fa-2x" /> 
        <NavBarIcons_Icon className="far fa-user fa-2x" /> 
       </NavBarIcons>
      </Bar>
    );
}
}

export default NavBar


