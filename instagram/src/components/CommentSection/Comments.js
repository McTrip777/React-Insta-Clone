import React from 'react'
import './Comment.css'

const Comments = props => {
    return (
      <div className="text">
          <span><strong>{props.comment.username}:</strong> </span>
          <span>{props.comment.text}</span>
      </div>
    )
}

export default Comments