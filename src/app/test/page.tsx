'use client';

import { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import styled from 'styled-components';
// import LayoutModal from '@/compoenets/LayoutModal/LayoutModal';
import Card from '@/compoenets/Cards/Card';
import SideMenu from '@/compoenets/SideMenu/SideMenu';
import Icon from './../../compoenets/icons/Icon';

const SectionLayout = styled.div<{
  $isEmpty: boolean;
  isSelected: boolean;
  isSideOpen: boolean;
  isResponsive: boolean;
}>`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.isSideOpen ? 'calc(100% - 413px)' : '100%')};
  width: ${(props) => (props.isResponsive ? '100%' : '')};

  min-width: 300px;
  height: ${(props) => (props.isResponsive ? '100%' : '380px')};
  flex-direction: ${(props) => (props.isResponsive ? 'column' : '')};

  min-height: ${(props) => (props.isResponsive ? '1080px' : '380px')};

  /* min-height 정상작동에 대한 문제가 좀 있음  */

  background: ${(props) => (props.$isEmpty ? 'gray' : 'white')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  overflow: hidden;
  border: ${(props) => (props.isSelected ? '4px solid #39ff14' : '4px solid transparent')};
  transition: all 0.4s;

  cursor: ${(props) => (props.$isEmpty ? 'pointer' : 'default')};

  &:hover {
    border: ${(props) => (props.isSelected ? '4px solid #39ff14' : '4px solid #007bff')};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: 100%;
  }
`;

const CallToActionSection = styled.div<{ isSideOpen: boolean; isResponsive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.isSideOpen ? 'calc(100% - 413px)' : '100%')};
  width: ${(props) => (props.isResponsive ? '100%' : '')};
  min-width: 383px;
  height: 160px;
  background: ${(props) => props.theme.colors.grayscale30};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

// type Shapes = 'rectNormal' | 'rectBig' | 'rectSmall' | 'round';

type ResponsiveCondition = 'mobile' | 'desktop' | 'tablet';

interface LayoutValues {
  id: string;
  layoutName: string;
  imgValue?: string;
  titleValue?: string;
  descriptionValue?: string;
}

interface SectionI {
  sectionKey: string;
  layoutValues: LayoutValues[];
}

interface ResponsiveState {
  width: string;
  isReponsive: boolean;
  state: ResponsiveCondition;
}

let initialSectionData: SectionI[] = [];

export default function Home() {
  const [sectionData, setSectionData] = useState(initialSectionData);
  const [sidebar, setSidebar] = useState(false);
  const [sectionKey, setSectionKey] = useState<null | string>(null);
  const [selectedItemKey, setSelectedItemKey] = useState('');

  const [mainContainerStyle, setMainContainerStyle] = useState({ gap: '20px' });
  const [cardItemStyle, setCardItemStyle] = useState({ gap: '20px' });

  const [responsiveStyle, setResponsiveStyle] = useState<ResponsiveState>({
    width: '100vw',
    isReponsive: false,
    state: 'desktop',
  });

  const [sectionDataLength, setSectionDataLength] = useState(0); //이건 useRef 정상동작을 위해만듦...없애는거고려

  const sectionLayoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionLayoutRef.current) {
      sectionLayoutRef.current.focus();
    }
  }, [sectionDataLength]);

  const addLayoutItem = (blockDesignType: string) => {
    const sectionIndex = sectionData.findIndex((section) => section.sectionKey === sectionKey);
    const newLayouValues = {
      id: v4(),
      layoutName: blockDesignType,
    };

    if (sectionData[sectionIndex].layoutValues.length === 6) {
      alert('6개이상 추가할 수 없습니다');
      return;
    }

    setSectionData((prev) =>
      prev.map((section) => {
        if (section.sectionKey === sectionKey) {
          return {
            ...section,
            layoutValues: [...section.layoutValues, newLayouValues],
          };
        }
        return section;
      }),
    );
  };

  const addSection = () => {
    const newSection = { sectionKey: v4(), layoutValues: [] };

    setSectionKey(newSection.sectionKey);
    setSectionData((prev) => [...prev, newSection]);
    setSectionDataLength((prev) => prev + 1);
  };

  const addFirstSection = () => {
    addSection();
    setSidebar(true);
  };

  const deleteSection = () => {
    setSectionData((prev) => prev.filter((section) => section.sectionKey !== sectionKey));
    setSectionKey(null);
  };
  const delelteLayoutItem = () => {
    setSectionData((prev) =>
      prev.map((section) => {
        if (section.sectionKey === sectionKey) {
          return {
            ...section,
            layoutValues: section.layoutValues.filter((values) => values.id !== selectedItemKey),
          };
        }
        return section;
      }),
    );
    setSelectedItemKey('');
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, sectionKey: string) => {
    const isLayout = (e.target as HTMLElement).classList.contains('layout');
    if (isLayout) {
      setSectionKey(sectionKey);
      setSelectedItemKey('');
      return;
    }
    setSectionKey(sectionKey);
  };

  const handleResponsiveView = (condition: ResponsiveCondition) => {
    switch (condition) {
      case 'desktop':
        setResponsiveStyle({ width: '1980px', isReponsive: false, state: 'desktop' });
        break;
      case 'mobile':
        setResponsiveStyle({ width: '480px', isReponsive: true, state: 'mobile' });
        break;

      case 'tablet':
        setResponsiveStyle({ width: '768px', isReponsive: true, state: 'tablet' });
        break;
    }
  };
  return (
    <>
      <ResponsiveMenu>
        <div
          style={{
            padding: '5px',
            borderRadius: '10px',
            backgroundColor: responsiveStyle.state === 'desktop' ? 'black' : '',
          }}
          onClick={() => handleResponsiveView('desktop')}
        >
          <Icon width={42} height={42} icon="desktop"></Icon>
        </div>
        <div
          style={{
            padding: '5px',
            borderRadius: '10px',

            backgroundColor: responsiveStyle.state === 'tablet' ? 'black' : '',
          }}
          onClick={() => handleResponsiveView('tablet')}
        >
          <Icon width={42} height={42} icon="tablet"></Icon>
        </div>
        <div
          style={{
            padding: '5px',
            borderRadius: '10px',

            backgroundColor: responsiveStyle.state === 'mobile' ? 'black' : '',
          }}
          onClick={() => handleResponsiveView('mobile')}
        >
          <Icon width={42} height={42} icon="mobile"></Icon>
        </div>
      </ResponsiveMenu>
      {sidebar === false && (
        <ToggleSideMenuBtn onClick={() => setSidebar(true)}>{'<<'}</ToggleSideMenuBtn>
      )}

      <AllWrapper isResponsive={responsiveStyle.isReponsive}>
        <MainContainer width={responsiveStyle.width}>
          {sectionData.length === 0 && (
            <CallToActionSection
              isResponsive={responsiveStyle.isReponsive}
              isSideOpen={sidebar}
              onClick={() => addFirstSection()}
            >
              섹션 추가 하기
            </CallToActionSection>
          )}

          {sectionData.map((section, key) => (
            <SectionLayout
              isResponsive={responsiveStyle.isReponsive}
              ref={key === sectionData.length - 1 ? sectionLayoutRef : null}
              className="layout"
              $isEmpty={section.layoutValues.length === 0}
              isSideOpen={sidebar}
              tabIndex={0}
              isSelected={section.sectionKey === sectionKey}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e, section.sectionKey)}
              key={key}
            >
              {section.layoutValues.length === 0 && '아이템을 추가해주세요'}
              {section.layoutValues &&
                section.layoutValues.map((layout) => {
                  return (
                    <Card
                      onHandleLayoutItemRemove={delelteLayoutItem}
                      isSelectedItem={selectedItemKey}
                      onChangeItemKey={setSelectedItemKey}
                      itemKey={layout.id}
                      key={layout.id}
                      titleStyle={{ text: '임시' }}
                      type={layout.layoutName}
                    ></Card>
                  );
                })}
            </SectionLayout>
          ))}
        </MainContainer>
        <SideMenu
          onDelete={deleteSection}
          isSelectedLayout={!!sectionKey}
          isSlectedLayoutItem={!!selectedItemKey}
          onHandleLayoutItemRemove={delelteLayoutItem}
          addLayout={addLayoutItem}
          addSection={addSection}
          onClose={setSidebar}
          isOpen={sidebar}
        ></SideMenu>
      </AllWrapper>

      {/* <LayoutModal addLayout={addLayout} onClose={setModal} isOpen={modal}></LayoutModal> */}
    </>
  );
}
const ResponsiveMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 63px;
  width: 1980px;
  background-color: #535353;
  color: ${(props) => props.theme.colors.grayscale100};
  font-size: 18px;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const AllWrapper = styled.section<{ isResponsive: boolean }>`
  margin-top: 70px;
  /* 임시값 */

  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${(props) => (props.isResponsive ? '#d8d5d5' : '')};
  /* height: 100vh; */
  transition: all 0.2s;
`;
const MainContainer = styled.div<{ width: string }>`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: column;
  transition: all 0.2s;

  gap: 20px;
`;

const ToggleSideMenuBtn = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.grayscale100};
  font-size: 30px;
  position: fixed;
  top: 50%;
  right: 0%;
  z-index: 2;
  letter-spacing: -5px;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.colors.meaningfulColor};
    cursor: pointer;
  }
`;
