import React, { Component } from 'react';
import CommentContent from '../CommentSection/CommentContent';
import LikeSection from './LikeSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostTab = styled.div`
    display:flex;
    flex-direction: column;
    width:40rem;
    margin:2rem auto;
    border:1px solid grey;

`;
const PostTitle = styled.div`
    display: flex;
    align-items: center;

`;

const PostTitleH2 = styled.h2`
    margin-left:.5rem
`;

const PostTitleImg = styled.img`
    margin-left:.5rem
    border-radius:50%;
    height:3rem;
    width:3rem;
    padding:.5rem;
`;


class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
         likes: props.post.likes,
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    }
render(){
    return (
      <PostTab>
        <PostTitle>
        <PostTitleImg
            src={this.props.post.thumbnailUrl}
            alt="post thumbnail"
        /> 
        <PostTitleH2>{ this.props.post.username }</PostTitleH2>
        </PostTitle>
        <div>
            <img 
            src={this.props.post.imageUrl} alt="post picture" /> 
        </div>
        <div>
            <LikeSection incrementLike={this.incrementLike}
            likes={this.state.likes} />
            <CommentContent comments={this.props.post.comments} />
        </div>
      </PostTab>
    )
    }
}

Post.propTypes = {
    post: PropTypes.shape({
      likes:PropTypes.number,
      imageUrl:PropTypes.string,
      thumbnailUrl:PropTypes.string,
      username: PropTypes.string
    })
  };

export default Post;
