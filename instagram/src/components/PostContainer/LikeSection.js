import React from 'react'
import styled from 'styled-components';

const CommentIcon = styled.div`
  text-align: left
  margin: 0 .5rem 
`;
const HeartComment = styled.div`
  text-align: start
`;
const Likes = styled.p`
  margin: .5rem 0
`;
const Icon = styled.i`
  padding:.7rem .4rem 0 0;
  height:1.5rem;
  cursor: pointer;
`;


const LikeSection = props => {
    return (
      <CommentIcon>
        <HeartComment>
          <Icon onClick={props.incrementLike} className="far fa-heart fa-lg" />
          <Icon className="far fa-comment fa-flip-horizontal fa-lg" /> 
        </HeartComment>
        <div>
          <Likes><strong>{props.likes} Likes</strong></Likes>      
        </div>  
      </CommentIcon>
    )
}
export default LikeSection
