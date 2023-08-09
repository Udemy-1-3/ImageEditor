import { styled } from 'styled-components';

import Icon from '../icons/Icon';
import LayoutItemContainer from './../LayoutModal/LayoutItemContainer';

const LAYOUT_MENUS_INFO = [
  {
    blockDesignType: 'round',
    title: {
      text: '초단기한글',
    },
  },
  {
    blockDesignType: 'rectNormal',
    title: {
      text: '[클래스]',
      bold: true,
    },
    describe:
      '친구들과 함께 모여 교과과정에 필요한 핵심 과목을 집중적으로 관리 받습니다.전문 선생님의 학습 관리로 자기주도 학습을 성장시킬 수 있습니다.',
  },
  {
    blockDesignType: 'rectSmall',
    title: {
      text: '1:1방문',
      bold: true,
      color: '#EE7D00',
    },
    describe: '주1회/과목당10 학습관리 및 상담',
  },
  {
    blockDesignType: 'rectBig',
    title: {
      text: '티칭 및 학습',
      bold: true,
    },
    describe:
      '북패드 디지털 콘텐츠를 활용하여 학생들의 지면 학습을 더욱 심도 깊고 쉽게 이해하여 기본 개념을 탄탄하게 합니다.',
  },
];

const SideMenu = ({
  isOpen,
  onClose,
  addSection,
  addLayout,
  isSelectedLayout,
  isSlectedLayoutItem,
  onHandleLayoutItemRemove,
  onDelete,
}: {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  isSlectedLayoutItem: boolean;
  addSection: () => void;
  addLayout: (value: string) => void;
  isSelectedLayout: boolean;
  onDelete: () => void;
  onHandleLayoutItemRemove: () => void;
}) => {
  const isItemSelected = isSelectedLayout && isSlectedLayoutItem;
  const onlySelectedLayout = !isSlectedLayoutItem && isSelectedLayout;
  const nonSelected = !isSelectedLayout && !isSlectedLayoutItem;
  if (isOpen)
    return (
      <Wrapper>
        <TopWrapper>
          <SectionControlBtn onClick={() => addSection()}>섹션 추가하기</SectionControlBtn>
          {isSelectedLayout && (
            <SectionControlBtn
              onClick={() => {
                onDelete();
                console.log(isSlectedLayoutItem);
              }}
            >
              섹션 삭제하기
            </SectionControlBtn>
          )}

          <span onClick={() => onClose(false)}>
            <Icon color="#000000" width={26} height={26} icon="close"></Icon>
          </span>
        </TopWrapper>
        <MenuWrapper>
          {isItemSelected && (
            <div>
              아이템 핸들메뉴
              <p onClick={onHandleLayoutItemRemove}>삭제</p>
              <p></p>
            </div>
          )}
          {onlySelectedLayout && <Paragraph> 아이템은 총 6개까지 추가 할 수 있습니다.</Paragraph>}
          {onlySelectedLayout &&
            LAYOUT_MENUS_INFO.map((layoutItem, idx) => {
              return (
                <LayoutItemContainer
                  onClick={addLayout}
                  layoutItem={layoutItem}
                  key={idx}
                ></LayoutItemContainer>
              );
            })}
          {nonSelected && '섹션을 추가하거나 선택해주세요'}
        </MenuWrapper>
      </Wrapper>
    );
};

export default SideMenu;

const Wrapper = styled.div`
  position: fixed;
  top: 63px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 333px;
  min-width: 333px;
  height: 100vh;
  background-color: #f7f7f7;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SectionControlBtn = styled.button`
  border: none;
  background: none;
  font-family: inherit;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 12px;
  color: #007bff;
`;
