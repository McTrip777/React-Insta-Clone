import React from 'react'
import './Comment.css'
import PropTypes from 'prop-types';


const Comments = props => {
    return (
      <div className="text">
          <span><strong>{props.comment.username}:</strong> </span>
          <span>{props.comment.text}</span>
      </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };

export default Comments