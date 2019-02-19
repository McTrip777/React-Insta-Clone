import React from 'react'
import CommentHead from './CommentHead';
import CommentInput from './CommentInput';
import Comments from './Comments';


class CommentContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: props.allData

    };
  }
  render() {
    return (
      <div className="commentContent">
        <CommentHead />
        <Comments allData={this.state.allData}/>
        <CommentInput />
      </div>
    );
  }
}

export default CommentContent