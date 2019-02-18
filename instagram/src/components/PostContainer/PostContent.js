import React from 'react'
import Post from './Post'

const PostContent = props => {
    return (
      <div className='post'>
        {props.allData.map(data => (
          <Post key={data.imageUrl} allData={data}/>
        ))}
      </div>
    )
}

export default PostContent
