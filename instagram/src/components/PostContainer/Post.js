import React, { Component } from 'react'
import CommentContent from '../CommentSection/CommentContent';
import CommentHead from '../CommentSection/CommentHead';
import './Post.css'

class Post extends Component {
    constructor(props){
        super(props);
        this.setState = {
            likes:props.allData.likes
        }
    }

    // toggle = () => {
        
    // }
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
            <CommentHead likes={this.props.allData.likes} toggle={this.props.toggle} />
            <CommentContent comments={this.props.allData.comments} />
        </div>
      </div>
    )
}
}

export default Post
