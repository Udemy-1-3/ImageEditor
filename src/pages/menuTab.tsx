import React from 'react';
import styled from 'styled-components';
import Tab from '../compoenets/Tab';
import Tab1Content from './Tab1Content';
import Tab2Content from './Tab2Content';

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 0px;
  margin: 0px;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const LogoImage = styled.img`
  width: 162.28px;
  height: 87.44px;
`;

const TabWrap = styled.div`
  margin-bottom: 10px;
`;

const MenuTab = () => {
  const [activeTab, setActiveTab] = React.useState(true);

  const handleTabChange = () => {
    setActiveTab((prevActive) => !prevActive);
  };

  return (
    <AllContainer>
      <HeaderWrap>
        <ListWrap>
          <LogoImage src='./images/logo.png' />
          <p>마이페이지</p>
        </ListWrap>
        <TabWrap>
          <Tab activeTab={activeTab} onClick={handleTabChange} />
          {activeTab ? <Tab1Content /> : <Tab2Content />}
        </TabWrap>
      </HeaderWrap>
      
    </AllContainer>
  );
};

export default MenuTab;