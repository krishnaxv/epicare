import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 50px;
  padding: 8px 4px;
  width: 100%;
`;

const Input = styled.input`
  width 85%;
  height: 32px;
  border-radius: 8px;
`;

const Icon = styled.i`font-size: 3rem;`;

const MessageInput = () => {
  return (
    <FlexDiv>
      <Input type="text" />
      <Icon className="material-icons">send</Icon>
    </FlexDiv>
  );
};

export default MessageInput;
