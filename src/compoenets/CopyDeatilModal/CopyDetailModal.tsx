import styled from 'styled-components';
import CopyDetailModalBtn from './CopyDetailModalBtn';
import CopyDetailModalInput from './CopyDetailModalInput';
import { createPortal } from 'react-dom';

const CopyDetailModal = ({
  isOpen,
  onClose,
  type,
  url,
}: {
  type: 'copy' | 'detail';
  url: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalSection>
      <ModalWrapper>
        <ModalMain>
          <ModalTitle>{type === 'copy' ? '페이지 복제' : '페이지 상세'}</ModalTitle>
          <ModalInputWrapper>
            <CopyDetailModalInput value="내게 맞는 북클럽 찾기" type="name"></CopyDetailModalInput>
            <CopyDetailModalInput type="url"></CopyDetailModalInput>
          </ModalInputWrapper>
          <UrlParagraph>{url}</UrlParagraph>
        </ModalMain>

        <BtnWrapper>
          <CopyDetailModalBtn onClose={onClose} type="close"></CopyDetailModalBtn>
          <CopyDetailModalBtn onClose={onClose} type="confirm"></CopyDetailModalBtn>
        </BtnWrapper>
      </ModalWrapper>
    </ModalSection>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default CopyDetailModal;

const ModalSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 614px;
  height: 316px;
`;

const ModalMain = styled.div`
  box-sizing: border-box;
  padding: 40px 19px 89px 19px;
  width: 100%;
  height: calc(316px - 53px);
  box-shadow: 0px 4px 8px 0px #00000040;
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
`;

const ModalTitle = styled.p`
  letter-spacing: -1px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 19px;
`;

const ModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const UrlParagraph = styled.p`
  letter-spacing: -1px;
  margin-top: 18px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
`;

const BtnWrapper = styled.div`
  width: 614px;
`;
