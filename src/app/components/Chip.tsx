import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface ChipProps {
  text: string;
  href: string;
  style?: React.CSSProperties;
}

const ChipContainer = styled.a<{ visited: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #EFEFEF;
  background-color: #EFEFEF;
  cursor: pointer;
  width: 64px; /* 추가: 너비 설정 */
  height: 27px; /* 추가: 높이 설정 */
  border-radius: 50px; /* 추가: border-radius 설정 */
  text-decoration: none; /* 밑줄 제거 */
  color: ${(props) => (props.visited ? 'inherit' : 'black')}; /* 방문한 링크일 때 색상을 기본 색상으로 유지 */
`;

const ChipText = styled.span`
  margin-right: 4px;
`;

const Chip: React.FC<ChipProps> = ({ text, href, style }) => {
  const chipTextStyles: React.CSSProperties = {
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '17px',
    letterSpacing: '-0.02em',
    ...style, // 기존 스타일과 전달된 스타일을 병합
  };

  return (
    <ChipContainer href={href} visited={false}>
      <ChipText style={chipTextStyles}>{text}</ChipText>
    </ChipContainer>
  );
};

export default Chip;
