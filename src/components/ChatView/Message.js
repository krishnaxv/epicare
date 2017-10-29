import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`display: flex;`;

const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const Message = props => {
  const { message, id, author } = props.m;
  console.log(props);
  if (props.params.contactId === author.id) {
    return (
      <FlexDiv>
        <Avatar src={author.img} />
        <p>{message}</p>
      </FlexDiv>
    );
  } else {
    return (
      <FlexDiv>
        <p>{message}</p>
        <Avatar src={author.img} />
      </FlexDiv>
    );
  }
};

export default Message;
