'use client';

import styled from 'styled-components';
import ModalBackground from '../ModalBackground';
import Icon from '../icons/Icon';
import LayoutModalMenus from './LayoutModalMenus';
import LayoutItemContainer from './LayoutItemContainer';
import { useState } from 'react';

export interface BlockDesingI {
  blockDesignType: string;
  value?: number;
  title?: { text: string; color?: string; bold?: boolean };
  describe?: string;
}

const LAYOUT_MENUS_INFO: { [key: string]: BlockDesingI[] } = {
  이미지: [{ blockDesignType: 'rectNormal', value: 1 }],
  구분선: [{ blockDesignType: 'rectNormal', value: 1 }],
  목록: [
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
      describe: '주1회/과목당 10분 <br/> 학습관리 및 상담',
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
  ],
  텍스트: [{ blockDesignType: 'rectNormal' }],
  표: [{ blockDesignType: 'rectNormal' }],
  레이아웃: [{ blockDesignType: 'rectNormal' }],
};
const LAYOUT_MENUS = Object.keys(LAYOUT_MENUS_INFO);

const LayoutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: Function }) => {
  const [selecttedMenu, setSelectedMenu] = useState(LAYOUT_MENUS[0]);

  const handleMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <ModalBackground isOpen={isOpen}>
      <ModalWrapper>
        <ModalHead>
          <h1>블록 디자인 추가</h1>
          <div onClick={() => onClose(false)}>
            <Icon color="#FFFFFF" width={26} height={26} icon="close"></Icon>
          </div>
        </ModalHead>

        <ModalMain>
          <ModalMenusWrapper>
            <LayoutModalMenus
              onClickMenu={handleMenu}
              menus={LAYOUT_MENUS}
              selectedMenu={selecttedMenu}
            ></LayoutModalMenus>
          </ModalMenusWrapper>
          <LayoutItemContainerWrapper>
            {LAYOUT_MENUS_INFO[selecttedMenu].map((layoutItem, idx) => {
              return <LayoutItemContainer layoutItem={layoutItem} key={idx}></LayoutItemContainer>;
            })}
          </LayoutItemContainerWrapper>
        </ModalMain>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default LayoutModal;

const ModalHead = styled.div`
  box-sizing: border-box;
  padding: 0 63px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.colors.primary100};

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28.64px;
    letter-spacing: 0.48px;
    color: #ffffff;
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1220px;
  height: 673px;
`;

const ModalMain = styled.div`
  box-sizing: border-box;
  padding: 50px 0 0 63px;
  display: flex;
  height: 593px;
  border-radius: 0 0 20px 20px;
  box-shadow: 4px 4px 21px 0px #0000004d;

  background-color: ${({ theme }) => theme.colors.grayscale5};
`;

const ModalMenusWrapper = styled.div`
  margin-right: 82px;
`;

const LayoutItemContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 152px 152px auto;
  grid-column-gap: 15px;
  grid-gap: 20px;
`;
