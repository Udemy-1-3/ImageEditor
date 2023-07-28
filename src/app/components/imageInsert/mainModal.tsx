import React, {useState} from 'react';
import styled from 'styled-components';
import NewModal from './newModal';
import ImageInsert from './ImageInsert';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1220px;
  height: 673px;
  background: #f0f0f0;
  padding: 50px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid #ccc;
  button {
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 457px);
  grid-template-rows: repeat(3, 152px);
  gap: 20px;
  margin-top: 20px;
  width: 934px;
`;

const GridCell = styled.div`
  width: 457px;
  height: 152px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
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

interface MainModalProps {
    isOpen: boolean;
    onClose: (confirmed?: boolean) => void;
    onSelect: (blockId: number) => void;
}

const MainModal: React.FC<MainModalProps> = ({ isOpen, onClose, onSelect }) => {
    if (!isOpen) return null;
    const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
    const [newModalOpen, setNewModalOpen] = useState(false);
    const handleNewModalToggle = () => {
        setNewModalOpen((prevState) => !prevState);
      };

      return (
        <>
          <Backdrop onClick={() => onClose()} />
          <Modal>
            <h2>Modal Title</h2>
            <Grid>
              {/* 각 블록을 누를 때 handleNewModalToggle 함수 호출 */}
              <GridCell onClick={() => { onSelect(1); handleNewModalToggle(); }}>1</GridCell>
              <GridCell onClick={() => { onSelect(2); handleNewModalToggle(); }}>2</GridCell>
              <GridCell onClick={() => { onSelect(3); handleNewModalToggle(); }}>3</GridCell>
              <GridCell onClick={() => { onSelect(4); handleNewModalToggle(); }}>4</GridCell>
              <GridCell onClick={() => { onSelect(5); handleNewModalToggle(); }}>5</GridCell>
              <GridCell onClick={() => { onSelect(6); handleNewModalToggle(); }}>6</GridCell>
            </Grid>
    
            
            <button onClick={() => onClose(true)}>확인</button>
            {/* 새로운 모달창에 블록 ID 출력 */}
            <NewModal newModalOpen={newModalOpen} toggleNewModal={handleNewModalToggle} selectedBlock={selectedBlock} />
          </Modal>
        </>
      );
    };
    
    export default MainModal; 