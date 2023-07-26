import styled from 'styled-components';
import CopyDetailModalBtn from './CopyDetailModalBtn';
import CopyDetailModalInput from './CopyDetailModalInput';
import ModalBackground from '../ModalBackground';

const CopyDetailModal = ({
  isOpen,
  onModalBtnClose,
  type,
  url,
}: {
  isOpen: boolean;
  type: 'copy' | 'detail';
  url: string;
  onModalBtnClose: () => void;
}) => {
  return (
    <ModalBackground isOpen={isOpen}>
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
          <CopyDetailModalBtn onClose={onModalBtnClose} type="close"></CopyDetailModalBtn>
          <CopyDetailModalBtn onClose={onModalBtnClose} type="confirm"></CopyDetailModalBtn>
        </BtnWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default CopyDetailModal;

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
