import React from 'react';
import styled from 'styled-components';


interface ChipProps {
  text: string;
  href: string;
  style?: React.CSSProperties;
  color?: string;
}

const ChipContainer = styled.a<{ visited: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #B3B3B3;
  background-color: #B3B3B3;
  cursor: pointer;
  width: 84px; 
  height: 27px; 
  border-radius: 50px; 
  text-decoration: none; 
  color: ${(props) => (props.visited ? 'inherit' : 'black')}; 
`;

const ChipText = styled.span`
  margin-right: 0px;
  color: ${(props) => props.color || 'black'};
`;

const Chip: React.FC<ChipProps> = ({ text, href, style, color }) => { 
  const chipTextStyles: React.CSSProperties = {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '17px',
    letterSpacing: '-0.02em',
    ...style, 
  };

  return (
    <ChipContainer href={href} visited={false}>
      <ChipText style={chipTextStyles} color={color}>{text}</ChipText>
    </ChipContainer>
  );
};

export default Chip;