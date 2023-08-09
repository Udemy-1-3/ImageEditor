import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '@/compoenets/icons/Icon';

const TabLeftContentContainer = styled.div`
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`;

const TitleContainer = styled.div`
`;

const Title = styled.h3`
`;

const Subtitle = styled.h5`
`;

const MenuAddButton = styled.button`
    width: 146px;
    height: 41px;
    padding: 11px, 27px, 11px, 27px;
    background-color: #FFEBD6;
    color: #EE7D00;
    border: 1px solid #EE7D00;
    border-radius: 7px;
    cursor: pointer;
    font-size: 16px;
`;

const MenuListContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F3F3F3;
    border: 1px solid #CCCCCC;
    border-radius: 26px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItemWrapperMain = styled.div`
  margin-top: 50px;
  display: flex;
`;

const MenuItemWrapperSub = styled.div`
  margin-top: 10px;
  display: flex;
`;

const MenuItemIconArrow = styled.div`
  width: 70px;
  height: 70px;
  background-color: #FFFFFF;
  border: 0.5px solid #B3B3B3;
  border-radius: 10px 0px 0px 10px;
  margin-left: 30px;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const MenuItemIconSetting = styled.div`
  width: 70px;
  height: 70px;
  background-color: #FFFFFF;
  border: 0.5px solid #B3B3B3;
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const MenuItemIconClose = styled.div`
  width: 70px;
  height: 70px;
  background-color: #FFFFFF;
  border: 0.5px solid #B3B3B3;
  border-radius: 0px 10px 10px 0px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const MenuItemMain = styled.li`
    display: flex;
    align-items: center;
    width: 947px;
    height: 70px;;
    background-color: #FFFFFF;
    border: 0.5px solid #B3B3B3 ;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.48px;
    letter-spacing: -2%;
    color: #666666;
    padding-left: 30px; 
`;

const MenuItemSub = styled.li`
    display: flex;
    align-items: center;
    width: 947px;
    height: 70px;;
    background-color: #FFFFFF;
    border: 0.5px solid #B3B3B3 ;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.48px;
    letter-spacing: -2%;
    color: #666666;
    padding-left: 30px; 
    margin-left: 102px;
`;

const TabLeftContent = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(true);
    const [subMenuItems, setSubMenuItems] = useState([
        "웅진북클럽 소개",
        "내게 맞는 북클럽 찾기",
        "웅진북클럽 전집",
        "웅진북클럽 화상관리",
        "웅진북클럽 곰돌이",
    ]);

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    const addMenuItem = () => {
        const newItemText = prompt("메뉴 항목 추가할 내용을 적어주세요.");
        if (newItemText) {
            setSubMenuItems([...subMenuItems, newItemText]);
        }
    };

    const removeMenuItem = (index) => {
        const newSubMenuItems = subMenuItems.filter((_, itemIndex) => itemIndex !== index);
        setSubMenuItems(newSubMenuItems);
    };

    return (
        <TabLeftContentContainer>
            <ContentWrapper>
                <TitleContainer>
                    <Title>메뉴 설정</Title>
                    <Subtitle>메뉴 항목과 구조를 설정해주세요.</Subtitle>
                </TitleContainer>
                <MenuAddButton onClick={addMenuItem}>메뉴 항목 추가</MenuAddButton>
            </ContentWrapper>
            <MenuListContainer>

                <MenuList>
                    <MenuItemWrapperMain>
                        <MenuItemIconArrow onClick={toggleSubMenu}>
                            <Icon icon="arrow" width={42} height={42} color="#B3B3B3" />
                        </MenuItemIconArrow>
                        <MenuItemMain>웅진 북클럽</MenuItemMain>
                        <MenuItemIconSetting>
                            <Icon icon="setting" width={42} height={42} color="#B3B3B3" />
                        </MenuItemIconSetting>
                        <MenuItemIconClose>
                            <Icon icon="close" width={42} height={42} color="#B3B3B3" />
                        </MenuItemIconClose>
                    </MenuItemWrapperMain>

                    {isSubMenuOpen && subMenuItems.map((itemText, index) => (
                        <MenuItemWrapperSub key={index}>
                            <MenuItemSub>{itemText}</MenuItemSub>
                            <MenuItemIconSetting>
                                <Icon icon="setting" width={42} height={42} color="#B3B3B3" />
                            </MenuItemIconSetting>
                            <MenuItemIconClose onClick={() => removeMenuItem(index)}>
                                <Icon icon="close" width={42} height={42} color="#B3B3B3" />
                            </MenuItemIconClose>
                        </MenuItemWrapperSub>
                    ))}
                </MenuList>
            </MenuListContainer>
        </TabLeftContentContainer>
    );
};

export default TabLeftContent;
