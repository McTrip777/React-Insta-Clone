import React from 'react'
import CommentInput from './CommentInput';
import Comments from './Comments';
import styled from 'styled-components';

const CommentStyle = styled.div`
  border-bottom:1px solid grey
  margin: 0 .5rem;
`;

class CommentContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      comments: props.comments,
      comment: ''
    });
  }

  commentInput = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newComment = { 
      username: localStorage.getItem('user'), 
      text: this.state.comment 
    };
    const comments = this.state.comments;
    this.setState({ 
      comments:[...comments, newComment],
      comment:'',
    });
  };

  render() {
    return (
      <div>
        <CommentStyle>
      {this.state.comments.map((comment, index) => 
        <Comments  key={index} comment={comment} />
      )}        
        </CommentStyle>
        <CommentInput 
        comment={this.state.comment}
        submitComment={this.handleSubmit}
        commentInput={this.commentInput}/>
      </div>
    );
  }
}

export default CommentContent