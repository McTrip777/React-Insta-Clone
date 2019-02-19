import React, { Component } from 'react'
import CommentContent from '../CommentSection/CommentContent';
import CommentHead from '../CommentSection/CommentHead';
import './Post.css'
import PropTypes from 'prop-types';


class Post extends Component {
    constructor(props){
        super(props);
        this.setState = {
         likes: props.allData.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
      };

render(){
    return (
      <div className='imgUser'>
        <div className='postTitle'>
        <img 
            className="postThumb"
            src={this.props.allData.thumbnailUrl}
            alt="post thumbnail"
        />
        <h2>{ this.props.allData.username }</h2>
        </div>
        <div>
            <img className="postPic" src={this.props.allData.imageUrl} alt="post picture" /> 
        </div>
        <div className='commentContent'>
            <CommentHead incrementLike={this.incrementLike} 
            likes={this.props.allData.likes} />
            <CommentContent comments={this.props.allData.comments} />
        </div>
      </div>
    )
    }
}

Post.propTypes = {
    allData: PropTypes.shape({
      likes:PropTypes.number,
      imageUrl:PropTypes.string,
      thumbnailUrl:PropTypes.string,
      username: PropTypes.string
    })
  };

export default Post
