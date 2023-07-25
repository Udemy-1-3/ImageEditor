'use client';


import styled from 'styled-components';
import CheckBox from "./components/CheckBox";
import Chip from './components/Chip';
import React, { useState } from 'react';
import Tab from './components/Tab';


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

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
`;





export default function Home() {

  return (
    <>
      <StyledButton>테스트</StyledButton>
    </>
  );
}