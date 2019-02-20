import React, { Component } from 'react';
import CommentContent from '../CommentSection/CommentContent';
import LikeSection from './LikeSection';
import './Post.css';
import PropTypes from 'prop-types';


class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
         likes: props.post.likes,
        };
    }


    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes });
    }


render(){
    return (
      <div className='imgUser'>
        <div className='postTitle'>
        <img 
            className="postThumb"
            src={this.props.post.thumbnailUrl}
            alt="post thumbnail"
        />
        <h2>{ this.props.post.username }</h2>
        </div>
        <div>
            <img className="postPic" 
            src={this.props.post.imageUrl} alt="post picture" /> 
        </div>
        <div className='commentContent'>
            <LikeSection incrementLike={this.incrementLike}
            likes={this.state.likes} />
            <CommentContent comments={this.props.post.comments} />
        </div>
      </div>
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
