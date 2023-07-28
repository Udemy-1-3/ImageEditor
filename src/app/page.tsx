"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import MainModal from './components/imageInsert/mainModal';
import NewModal from './components/imageInsert/newModal';

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

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #f0f0f0;
  border: 1px solid #000;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 24px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
`;

export default function Home() {
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [selectedImageData, setSelectedImageData] = useState<string | null>(null);

  const handleNewModalToggle = () => {
    setNewModalOpen((prevState) => !prevState);
  };

  const handleNewModalClose = () => {
    setNewModalOpen(false);
  };

  const handleNewModalConfirm = (blockId: number, imageData: string) => {
    setSelectedBlock(blockId);
    setSelectedImageData(imageData);
    handleNewModalClose();
  };

  return (
    <>
      <StyledButton onClick={handleNewModalToggle}>테스트</StyledButton>
      <Block>
        <AddButton onClick={handleNewModalToggle}>+</AddButton>
        {selectedBlock !== null && selectedImageData !== null && (
          <ImagePreview src={selectedImageData} alt={`Block ${selectedBlock}`} />
        )}
      </Block>
      <NewModal
        newModalOpen={newModalOpen}
        toggleNewModal={handleNewModalToggle}
        selectedBlock={selectedBlock}
        onConfirm={handleNewModalConfirm}
      />
    </>
  );
}