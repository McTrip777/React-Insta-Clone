import React from 'react'
import CommentHead from './CommentHead';
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
      <div className="commentContent">
        <CommentHead />
      {this.state.comments.map((comment, index) => 
        <Comments key={index} comment={comment} />
      )}        
        <CommentInput />
      </div>
    );
  }
}

export default CommentContent