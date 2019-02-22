import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
  text-align: left
  padding-bottom:.5rem
`;

const Comments = props => {
    return (
      <Text>
        <span><strong>{props.comment.username}:</strong> </span>
        <span>{props.comment.text}</span>
      </Text>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };

export default Comments