import React from 'react';
import styled from 'styled-components';

interface TabProps {
  activeTab: boolean;
  onClick: () => void;
}

const TabContainer = styled.div`
  display: flex;
`;

const TabItem = styled.div`
  width: 620px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const Tab1 = styled(TabItem)<TabProps>`
  background: ${props => props.activeTab ? '#EE7D00' : '#FFFFFF'};
  border: solid 1px ${props => props.activeTab ? '#EE7D00' : '#CCCCCC'};
  border-radius: 10px 0 0 10px;
`;

const Tab2 = styled(TabItem)<TabProps>`
  background: ${props => props.activeTab ? '#EE7D00' : '#FFFFFF'};
  border: solid 1px ${props => props.activeTab ? '#EE7D00' : '#CCCCCC'};
  border-radius: 0 10px 10px 0px;
`;

const MenuText = styled.span<{ active?: boolean }>`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${props => props.active ? '#FFFFFF' : '#000000'};
`;

const Tab: React.FC<TabProps> = ({ activeTab, onClick }) => {
  return (
    <TabContainer>
      <Tab1 activeTab={activeTab} onClick={onClick}>
        <MenuText active={activeTab}>메뉴 관리</MenuText>
      </Tab1>
      <Tab2 activeTab={!activeTab} onClick={onClick}>
        <MenuText active={!activeTab}>페이지 관리</MenuText>
      </Tab2>
    </TabContainer>
  );
};

export default Tab;
