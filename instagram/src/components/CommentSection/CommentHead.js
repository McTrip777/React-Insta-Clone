import React from 'react'

const CommentHead = props => {
    return (
      <div className="commentIcon">
        <div className="heartComment">
          <i onClick={props.toggle} className="far fa-heart fa-lg" />
          <i className="far fa-comment fa-flip-horizontal fa-lg" /> 
        </div>
        <div>
          <p><strong>{props.likes} Likes</strong></p>      
        </div>  
      </div>
    )
}

export default CommentHead
