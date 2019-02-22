import React from 'react'
import styled from 'styled-components';


const CommentForm = styled.form`
  width:39rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;
const CommentForm_Input = styled.input`
  height:3rem;
  width:36.2rem;
  border: 3px solid pink;
  font-size: .9rem;
  `;

const CommentInput = (props) => {
  return (
     <CommentForm onSubmit={props.submitComment}>
        <CommentForm_Input 
        type="text" 
        placeholder="  Add a comment..." 
        value={props.comment}
        onChange={props.commentInput}
        />
        <i className="fas fa-ellipsis-h"></i>
      </CommentForm>
    )
}


export default CommentInput