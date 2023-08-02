import React, { useState } from 'react';
import styled from 'styled-components';
import TextEditor from '../TextEditor/TextEditor';

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
}

type WrapperProps = Pick<CardShapeEProps, 'width'>;
type TitleProps = Pick<TitleStyleType, 'bold' | 'color'>;

const Card = ({ type, titleStyle, describe }: DefaultProps) => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [title, setTitle] = useState(titleStyle?.text || '');
  const [titleFontWeight, setTitleFontWeight] = useState(400);
  const [titleFontSize, setTitleFontSize] = useState(16);
  const [titleFontColor, setTitleFontColor] = useState('#000000');

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(describe || '');
  const [fontWeight, setFontWeight] = useState(400);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#000000');

  const handleTitleChange = (newTitle: string, newFontWeight: number, newFontSize: number, newFontColor: string) => {
    setTitle(newTitle);
    setTitleFontWeight(newFontWeight);
    setTitleFontSize(newFontSize);
    setTitleFontColor(newFontColor);
  };

  const handleTextChange = (newText: string, newFontWeight: number, newFontSize: number, newFontColor: string) => {
    setText(newText);
    setFontWeight(newFontWeight);
    setFontSize(newFontSize);
    setFontColor(newFontColor);
  };

  const handleSave = () => {
    setIsTitleEditing(false);
    setIsEditing(false);
  };

  const getShapeStyle = (type: string) => {
    if (type === 'rectNormal') return { width: 192, height: 182 };
    if (type === 'rectBig') return { width: 360, height: 270 };
    if (type === 'rectSmall') return { width: 157, height: 157 };
    if (type === 'round') return { width: 157, height: 157, borderRadius: 100 };
    throw new Error(`유효하지 않은 type: ${type}`);
  };
  
  const shapeStyleValues = getShapeStyle(type);

  const splitedDescribe = isEditing
    ? <TextEditor initialText={text} onTextChange={handleTextChange} placeholder="임시" />
    : (text ? <DESCRIBE key={text} fontWeight={fontWeight} fontSize={fontSize} fontColor={fontColor}>{text}</DESCRIBE> : null);

 const titleElement = isTitleEditing
    ? <TextEditor initialText={title} onTextChange={handleTitleChange} placeholder="임시" />
    : <TITLE color={titleFontColor} bold={titleFontWeight === 700} fontWeight={titleFontWeight} fontSize={titleFontSize} fontColor={titleFontColor}>{title}</TITLE>;

  return (
    <WRAPPER width={shapeStyleValues.width}>
      <CARDSHAPE
        borderRadius={shapeStyleValues.borderRadius}
        width={shapeStyleValues?.width}
        height={shapeStyleValues?.height}
      ></CARDSHAPE>

      {titleElement}
      <button className="editButton" onClick={isTitleEditing ? handleSave : () => setIsTitleEditing(true)}>{isTitleEditing ? "Save Title" : "Edit Title"}</button>
      <DESCRIBEWRAPPER>{splitedDescribe}</DESCRIBEWRAPPER>
      <button className="editButton" onClick={isEditing ? handleSave : () => setIsEditing(true)}>{isEditing ? "Save Description" : "Edit Description"}</button>
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

  .editButton {
    visibility: hidden;
  }

  &:hover .editButton {
    visibility: visible;
  }

  
`;

const CARDSHAPE = styled.div<CardShapeEProps>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background-color: #f0f0f0;
  border-radius: ${(props) => props.borderRadius + '%'};
`;

const TITLE = styled.h1<TitleProps & StyleProps>`
  margin-bottom: 10px;
  color: ${(props) => props.fontColor || (props.color ? props.color : 'black')};
  font-weight: ${(props) => props.fontWeight || (props.bold ? 'bold' : 400)};
  font-size: ${(props) => props.fontSize}px;
`;

const DESCRIBEWRAPPER = styled.div`

`;

const DESCRIBE = styled.p<StyleProps>`
  font-weight: ${(props) => {
    console.log("DESCRIBE fontWeight:", props.fontWeight);
    return props.fontWeight;
  }}px;
  font-size: ${(props) => {
    console.log("DESCRIBE fontSize:", props.fontSize);  // Add console.log here
    return props.fontSize;
  }}px;
  color: ${(props) => {
    console.log("DESCRIBE fontColor:", props.fontColor);  // Add console.log here
    return props.fontColor;
  }};
  line-height: 24px;
  text-align: left;
`;