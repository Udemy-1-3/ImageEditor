import styled from 'styled-components';

type TitleStyleType = {
  color?: string;
  text?: string;
  bold?: boolean;
};

interface DefaultProps {
  type: string;
  titleStyle?: TitleStyleType;
  describe?: string;
}

interface CardShapeEProps {
  width: number;
  height: number;
  borderRadius?: number;
}
type WrapperProps = Pick<CardShapeEProps, 'width'>;

type TitleProps = Pick<TitleStyleType, 'bold' | 'color'>;

const MockCard = ({ type, titleStyle, describe }: DefaultProps) => {
  const getShapeStyle = (type: string) => {
    if (type === 'rectSmall') return { width: 72, height: 68 };
    if (type === 'rectBig') return { width: 124, height: 66 };
    if (type === 'rectNormal') return { width: 157, height: 58 };
    if (type === 'round') return { width: 85, height: 85, borderRadius: 100 };
    throw new Error(`유효하지 않은 type: ${type}`);
  };

  const shapeStyleValues = getShapeStyle(type);

  const splitedDescribe = describe
    ?.split('<br/>')
    .map((line, idx) => <DESCRIBE key={idx}>{line}</DESCRIBE>);

  return (
    <WRAPPER width={shapeStyleValues.width}>
      <CARDSHAPE
        borderRadius={shapeStyleValues.borderRadius}
        width={shapeStyleValues?.width}
        height={shapeStyleValues?.height}
      ></CARDSHAPE>

      <TITLE color={titleStyle?.color} bold={titleStyle?.bold}>
        {titleStyle?.text}
      </TITLE>
      <DESCRIBEWRAPPER>{describe && splitedDescribe}</DESCRIBEWRAPPER>
    </WRAPPER>
  );
};

export default MockCard;

const WRAPPER = styled.div<WrapperProps>`
  width: ${(props) => props.width + 'px'};
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
`;

const CARDSHAPE = styled.div<CardShapeEProps>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background-color: #f3f3f3;
  border-radius: ${(props) => props.borderRadius + '%'};
`;

const TITLE = styled.h1<TitleProps>`
  margin-bottom: 5px;
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
`;

const DESCRIBEWRAPPER = styled.div``;

const DESCRIBE = styled.p`
  font-weight: 350;
  font-size: 6px;
  line-height: 10.14px;
  text-align: center;
`;
