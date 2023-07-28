import { styled } from 'styled-components';
import { BlockDesingI } from './LayoutModal';
import MockCard from '../Cards/MockCard';

const LayoutItemContainer = ({
  layoutItem,
  onClick,
}: {
  layoutItem: BlockDesingI;
  onClick: Function;
}) => {
  const { title, describe, blockDesignType } = layoutItem;

  return (
    <Wrapper>
      <div onClick={() => onClick(blockDesignType)}>
        <MockCard
          titleStyle={{
            color: title?.color,
            text: title?.text,
            bold: title?.bold,
          }}
          type={blockDesignType}
          describe={describe}
        ></MockCard>
      </div>
    </Wrapper>
  );
};

export default LayoutItemContainer;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 457px;
  height: 152px;
  border-radius: 10px;
  background-color: #ffffff;
`;
