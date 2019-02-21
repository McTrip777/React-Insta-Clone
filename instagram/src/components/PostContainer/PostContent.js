import React from 'react'
import Post from './Post'


const PostContent = props => {
    return (
      <div>
        {props.post.map((data) => (
          <Post key={data.imageUrl} post={data} />
        ))}
      </div>
    )
}



export default PostContent
