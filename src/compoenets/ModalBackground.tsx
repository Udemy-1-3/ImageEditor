import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalBackground = ({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) => {
  if (!isOpen) return null;
  return createPortal(
    <ModalSection>{children}</ModalSection>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default ModalBackground;

const ModalSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
