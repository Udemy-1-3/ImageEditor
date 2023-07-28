'use client';

import styled from 'styled-components';

const StyledButton = styled.p`
  background-color: #007bff;
  color: ${(props) => props.theme.colors.primary100};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Home() {
  return (
    <>
      <StyledButton>테스트</StyledButton>
    </>
  );
}