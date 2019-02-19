import React from 'react'
import CommentContent from '../CommentSection/CommentContent';
import CommentHead from '../CommentSection/CommentHead';
import './Post.css'

const Post = props => {
    return (
      <div className='imgUser'>
        <div className='postTitle'>
        <img 
            className="postThumb"
            src={props.allData.thumbnailUrl}
            alt="post thumbnail"
        />
        <h2>{ props.allData.username }</h2>
        </div>
        <div>
            <img className="postPic" src={props.allData.imageUrl} alt="post picture" /> 
        </div>
        <div className='commentContent'>
            <CommentHead likes={props.allData.likes} toggle={props.toggle} />
            <CommentContent comments={props.allData.comments} />
        </div>
      </div>
    )
}

export default Post
