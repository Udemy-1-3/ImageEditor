import React, { useState } from 'react';
import styled from 'styled-components';
import ImageInsert from './ImageInsert';

const NewModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 600px;
  background: #f0f0f0;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  p {
    margin-bottom: 20px;
  }

  button {
    margin-top: 10px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

interface NewModalProps {
    newModalOpen: boolean;
    toggleNewModal: () => void;
    selectedBlock: number | null;
    onConfirm: (blockId: number, imageData: string) => void;
  }
  
  const NewModal: React.FC<NewModalProps> = ({ newModalOpen, toggleNewModal, selectedBlock, onConfirm }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
    const handleImageChange = (imageData: string) => {
      setSelectedImage(imageData);
    };
  
    const handleConfirm = () => {
        if (selectedBlock && selectedImage) {
          onConfirm(selectedBlock, selectedImage); // 선택한 블록의 ID와 이미지 데이터 전달
          toggleNewModal();
        }
      };

    console.log(selectedImage, "확인");
  
    return (
      newModalOpen && (
        <>
          <Backdrop onClick={toggleNewModal} />
          <NewModalContainer>
            <ImageInsert onImageChange={handleImageChange} />
            <button onClick={handleConfirm}>확인</button>
            <button onClick={toggleNewModal}>닫기</button>
          </NewModalContainer>
        </>
      )
    );
  };
  
  export default NewModal;