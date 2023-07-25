import styled from 'styled-components';

type Shapes = 'rectNormal' | 'rectBig' | 'rectSmall' | 'round';

type TitleStyleType = {
  color?: string;
  text: string;
  bold?: boolean;
};

interface DefaultProps {
  type: Shapes;
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

const Card = ({ type, titleStyle, describe }: DefaultProps) => {
  const getShapeStyle = (type: Shapes) => {
    if (type === 'rectNormal') return { width: 192, height: 182 };
    if (type === 'rectBig') return { width: 360, height: 270 };
    if (type === 'rectSmall') return { width: 157, height: 157 };
    if (type === 'round') return { width: 157, height: 157, borderRadius: 100 };
    throw new Error(`유효하지 않은 type: ${type}`);
  };

  const shapeStyleValues = getShapeStyle(type);

  const splitedDescribe = describe
    ?.split('<br/>')
    .map((line, idx) => <DESCRIBE key={idx}>{line}</DESCRIBE>);

  console.log(splitedDescribe, 'hi');
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

export default Card;

const WRAPPER = styled.div<WrapperProps>`
  width: ${(props) => props.width + 'px'};
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const CARDSHAPE = styled.div<CardShapeEProps>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background-color: #f0f0f0;
  border-radius: ${(props) => props.borderRadius + '%'};
`;

const TITLE = styled.h1<TitleProps>`
  margin-bottom: 10px;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
`;

const DESCRIBEWRAPPER = styled.div``;

const DESCRIBE = styled.p`
  font-weight: 350;
  font-size: 15px;
  line-height: 24px;
  text-align: left;
`;
