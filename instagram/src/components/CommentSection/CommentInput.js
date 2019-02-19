import React, { Component } from 'react'

class CommentInput extends Component{
  constructor(props){
    super(props);
      this.setState =({

      })
  }

  
render(){
    return (
      <div className="commentInput">
        <input 
        className='input'
        type="text" 
        placeholder="Add a comment..." 
        />
        <i className="fas fa-ellipsis-h"></i>
      </div>
    )
}
}

export default CommentInput