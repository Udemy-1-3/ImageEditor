'use client';

import { useState } from 'react';

import styled from 'styled-components';
import LayoutModal from '@/compoenets/LayoutModal/LayoutModal';
import Card from '@/compoenets/Cards/Card';
const LayoutAndButton = styled.div<{ $isEmpty: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 160px;
  background: ${(props) => (props.$isEmpty ? 'gray' : '')};
  color: #989898;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${(props) => (props.$isEmpty ? 'pointer' : 'default')};
`;

// type Shapes = 'rectNormal' | 'rectBig' | 'rectSmall' | 'round';

let sectionData: {
  sectionKey: number;
  layoutValues: string[];
}[] = [{ sectionKey: 1, layoutValues: [] }];

export default function Home() {
  const [modal, setModal] = useState(false);
  const [sectionKey, setSectionKey] = useState(1);

  const addLayout = (blockDesignType: string) => {
    const sectionIndex = sectionData.findIndex((section) => section.sectionKey === sectionKey);

    sectionData[sectionIndex].layoutValues.push(blockDesignType);

    setModal(false);
  };

  const handleClick = (sectionKey: number) => {
    setModal(true);
    setSectionKey(sectionKey);
  };
  return (
    <>
      <section>
        {sectionData.map((section, key) => (
          <LayoutAndButton
            $isEmpty={section.layoutValues.length === 0}
            onClick={
              section.layoutValues.length === 0 ? () => handleClick(section.sectionKey) : () => {}
            }
            key={key}
          >
            {section.layoutValues.length === 0 && '디자인을 선택해주세요'}
            {section.layoutValues &&
              section.layoutValues.map((layout, idx) => {
                return <Card key={idx} titleStyle={{ text: '임시' }} type={layout} describe={section.someProperty}></Card>;

              })}
          </LayoutAndButton>
        ))}
      </section>

      <LayoutModal addLayout={addLayout} onClose={setModal} isOpen={modal}></LayoutModal>
    </>
  );

}

}

const MockInput = styled.input``;

