import React from 'react'

const CommentInput = (props) => {
  return (
     <form className="commentInput" onSubmit={props.submitComment}>
        <input 
        className='input'
        type="text" 
        placeholder="Add a comment..." 
        value={props.comment}
        onChange={props.commentInput}
        />
        <i className="fas fa-ellipsis-h"></i>
      </form>
    )
}


export default CommentInput