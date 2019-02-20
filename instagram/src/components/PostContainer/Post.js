import React, { Component } from 'react'
import CommentContent from '../CommentSection/CommentContent';
import CommentHead from '../CommentSection/CommentHead';
import './Post.css'
import PropTypes from 'prop-types';


class Post extends Component {
    constructor(props){
        super(props);
        this.setState = {
         likes: props.post.likes
        };
    }
    
    incrementLike = () => {
        const like = this.state.likes + 1;
        this.setState({ like });
      };

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
            <CommentHead incrementLike={this.incrementLike} 
            likes={this.props.post.likes} />
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

export default Post
