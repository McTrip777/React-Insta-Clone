import React from 'react'
import Post from './Post'
import './Post.css'


const PostContent = props => {
    return (
      <div className='post'>
        {props.post.map((data) => (
          <Post key={data.imageUrl} post={data} />
        ))}
      </div>
    )
}



export default PostContent
