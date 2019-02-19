import React from 'react'
import CommentContent from '../CommentSection/CommentContent';

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
        <CommentContent allData={props.allData}/>
      </div>
    )
}

export default Post
