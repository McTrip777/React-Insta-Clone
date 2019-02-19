import React from 'react'
import CommentInput from './CommentInput';
import Comments from './Comments';

class CommentContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>
        <div className="comment">
      {this.state.comments.map((comment, index) => 
        <Comments key={index} comment={comment} />
      )}        
        </div>
        <CommentInput />
      </div>
    );
  }
}

export default CommentContent