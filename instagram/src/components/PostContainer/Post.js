import React from 'react'
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
            <img
                className="postPic"
                src={props.allData.imageUrl}
                alt="post picture"
            /> 
        </div>
      </div>
    )
}

export default Post
