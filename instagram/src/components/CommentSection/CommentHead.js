import React from 'react'

const CommentHead = () => {
    return (
      <div className="commentIcon">
        <i className="far fa-heart fa-lg" /> 
        <i className="far fa-comment fa-flip-horizontal fa-lg" /> 
        <div>
          <p>Likes: 200</p>      
        </div>  
      </div>
    )
}

export default CommentHead
