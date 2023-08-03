import styled from 'styled-components';
import React, { ChangeEvent, useState } from 'react';

// type Shapes = 'rectNormal' | 'rectBig' | 'rectSmall' | 'round';

type TitleStyleType = {
  color?: string;
  text: string;
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
  isImg :boolean;
}
type WrapperProps = Pick<CardShapeEProps, 'width'>;

type TitleProps = Pick<TitleStyleType, 'bold' | 'color'>;

const Card = ({ type, titleStyle, describe }: DefaultProps) => {

  const [selectedImageData, setSelectedImageData] = useState<string | null>(null);
  const getShapeStyle = (type: Shapes) => {

    if (type === 'rectNormal') return { width: 192, height: 182 };
    if (type === 'rectBig') return { width: 360, height: 270 };
    if (type === 'rectSmall') return { width: 157, height: 157 };
    if (type === 'round') return { width: 157, height: 157, borderRadius: 100 };
    throw new Error(`유효하지 않은 type: ${type}`);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];

    const url = URL.createObjectURL(file)

    setSelectedImageData(url)
  };

  const shapeStyleValues = getShapeStyle(type);

  const splitedDescribe = describe
    ?.split('<br/>')
    .map((line, idx) => <DESCRIBE key={idx}>{line}</DESCRIBE>);

  

return (
    <WRAPPER width={shapeStyleValues.width}>

      <CardInput onChange={handleImageChange} id="card" type='file'></CardInput>
      <CARDSHAPE
      isImg={!!selectedImageData}
      htmlFor='card' 
        borderRadius={shapeStyleValues.borderRadius}
        width={shapeStyleValues?.width}
        height={shapeStyleValues?.height}
      >
        <img src={selectedImageData?selectedImageData:''} alt='selectedImg'/>
      </CARDSHAPE>


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


const CardInput = styled.input`
  display: none;
`

const CARDSHAPE = styled.label<CardShapeEProps>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background-color: #f0f0f0;
  border-radius: ${(props) => props.borderRadius + '%'};

  img{
    object-fit: cover;
    display: ${(props)=>props.isImg ? 'block':'none'};
    width: 100%;
    height: 100%;
  border-radius: ${(props) => props.borderRadius + '%'};

  }
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


