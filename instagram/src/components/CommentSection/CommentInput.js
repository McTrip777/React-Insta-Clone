import React from 'react'

const CommentInput = () => {
    return (
      <div className="commentInput">
        <input type="text" placeholder="Add a comment..." />
        <i className="fas fa-ellipsis-h"></i>
      </div>
    )
}

export default CommentInput