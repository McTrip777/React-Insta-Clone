import React from 'react'
import Post from './Post'
import './Post.css'


const PostContent = props => {
    return (
      <div className='post'>
        {props.allData.map((data) => (
          <Post key={data.imageUrl} allData={data} toggle={props.toggle}/>
        ))}
      </div>
    )
}



export default PostContent
