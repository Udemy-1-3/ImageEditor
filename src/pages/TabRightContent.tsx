import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckBox from '@/compoenets/CheckBox';
import Chip from '@/compoenets/Chip';

const TabRightContentContainer = styled.div`
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  margin-top: 30px;
  width: 225px;
  height: 40px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  letter-spacing: -2%;
  border: 1px solid #E6E6E6;
  border-radius: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  width: 215.5px;
  height: 68px;
  font-size: 16px;
  font-weight: 700;
  background-color: #F3F3F3;
  border-bottom: 1px solid #B3B3B3;
`;

const CheckBoxHeader = styled(TableHeader)`
  width: 50px; 
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
  padding: 10px;
  border-left: none; 
  border-right: none; 
  border-top: none;
  border-bottom: 1px solid #ccc; 
  height: 68px;
  text-align: center;
  color: #333333;
  font-weight: 500;
  font-size: 16px;
`;

const CheckBoxCell = styled(TableCell)`
  width: 50px;
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const TabRightContent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const allItems = [
        { name: "내게 맞는 북클럽 찾기", path: "/page/voucher-inno", menu: "웅진북클럽", update: "2022-09-23 16.35.09", manage: "Edit" },
        { name: "웅진북클럽 전집", path: "/page/voucher-inno", menu: "웅진북클럽", update: "2022-09-23 16.35.09", manage: "Edit" },
        { name: "웅진북클럽 화상관리", path: "/page/voucher-inno", menu: "웅진스마트올", update: "2022-09-23 16.35.09", manage: "Edit" },
        { name: "웅진북클럽 곰돌이", path: "/page/voucher-inno", menu: "출판/e러닝", update: "2022-09-23 16.35.09", manage: "Edit" },
        { name: "베베북클럽", path: "/page/voucher-inno", menu: "웅진스마트올", update: "2022-09-23 16.35.09", manage: "Edit" },
        { name: "웅진북클럽 AI 독서케어", path: "/page/voucher-inno", menu: "출판/e러닝", update: "2022-09-23 16.35.09", manage: "Edit" },
        { name: "슈퍼팟잉글리시", path: "/page/voucher-inno", menu: "웅진북클럽", update: "2022-09-23 16.35.09", manage: "Edit" },
        { name: "북큐레이터 소개", path: "/page/voucher-inno", menu: "웅진스마트올", update: "2022-09-23 16.35.09", manage: "Edit" },
    ];

    
    const filteredItems = allItems.filter(item => {
        
        return item.name.includes(searchTerm) || item.path.includes(searchTerm) || item.menu.includes(searchTerm);
    });

    return (
        <TabRightContentContainer>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="페이지명"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </SearchContainer>
            <Table>
                <thead>
                    <TableRow>
                        <CheckBoxHeader />
                        <TableHeader>페이지명</TableHeader>
                        <TableHeader>페이지 경로</TableHeader>
                        <TableHeader>메뉴</TableHeader>
                        <TableHeader>업데이트 일시</TableHeader>
                        <TableHeader>관리</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {filteredItems.map(item => (
                        <TableRow key={item.name}>
                            <CheckBoxCell><CheckBox /></CheckBoxCell> 
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.path}</TableCell>
                            <TableCell>
                                <ChipContainer>
                                <Chip text={item.menu} href={`/menu/${item.menu}`} color="#FFFFFF" />
                                </ChipContainer>
                            </TableCell>
                            <TableCell>{item.update}</TableCell>
                            <TableCell>{item.manage}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </TabRightContentContainer>
    );
};

export default TabRightContent;