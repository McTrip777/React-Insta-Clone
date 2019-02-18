import React from 'react'
import CommentHead from './CommentHead';
import CommentInput from './CommentInput';
import Comments from './Comments';


const CommentContent = () => {
    return (
      <div className="comments">
        <CommentHead />
        <Comments />
        <CommentInput />
      </div>
    )
}

export default CommentContent