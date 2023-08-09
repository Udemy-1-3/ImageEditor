import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import TextEditor from '../TextEditor/TextEditor';
import Image from 'next/image';

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
  itemKey: string;
  onChangeItemKey: (value: string) => void;
  isSelectedItem: string;
  onHandleLayoutItemRemove: () => void;
}

interface CardShapeEProps {
  width: number;
  height: number;
  borderRadius?: number;
  isImg: boolean;
}

type StyleProps = {
  fontWeight?: number;
  fontSize?: number;
  fontColor?: string;
};

type WrapperProps = Pick<CardShapeEProps, 'width'> & { isSelected: boolean };
type TitleProps = Pick<TitleStyleType, 'bold' | 'color'>;

const Card = ({
  type,
  titleStyle,
  describe,
  itemKey,
  onChangeItemKey,
  onHandleLayoutItemRemove,
  isSelectedItem,
}: DefaultProps) => {
  const [selectedImageData, setSelectedImageData] = useState<string | null>(null);

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

  const handleTitleChange = (
    newTitle: string,
    newFontWeight: number,
    newFontSize: number,
    newFontColor: string,
  ) => {
    setTitle(newTitle);
    setTitleFontWeight(newFontWeight);
    setTitleFontSize(newFontSize);
    setTitleFontColor(newFontColor);
  };

  const handleTextChange = (
    newText: string,
    newFontWeight: number,
    newFontSize: number,
    newFontColor: string,
  ) => {
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const isBackground = (e.target as HTMLElement).classList.contains('bg');
    if (isBackground) {
      console.log('삭제', itemKey);
      onChangeItemKey(itemKey);
      return;
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];

    if (file) {
      setSelectedImageData(URL.createObjectURL(file));
    } else {
      return;
    }
  };

  const shapeStyleValues = getShapeStyle(type);

  const splitedDescribe = isEditing ? (
    <TextEditor initialText={text} onTextChange={handleTextChange} placeholder="임시" />
  ) : text ? (
    <DESCRIBE key={text} fontWeight={fontWeight} fontSize={fontSize} fontColor={fontColor}>
      {text}
    </DESCRIBE>
  ) : null;

  const titleElement = isTitleEditing ? (
    <TextEditor initialText={title} onTextChange={handleTitleChange} placeholder="임시" />
  ) : (
    <TITLE
      color={titleFontColor}
      bold={titleFontWeight === 700}
      fontWeight={titleFontWeight}
      fontSize={titleFontSize}
      fontColor={titleFontColor}
    >
      {title}
    </TITLE>
  );

  return (
    <WRAPPER
      onClick={handleClick}
      className="bg"
      isSelected={isSelectedItem === itemKey}
      width={shapeStyleValues.width}
    >
      {isSelectedItem === itemKey && (
        <DeleteLayoutItemBtn onClick={onHandleLayoutItemRemove}>삭제</DeleteLayoutItemBtn>
      )}
      <CardInput onChange={handleImageChange} id={itemKey} type="file" accept="image/*"></CardInput>
      <CARDSHAPE
        isImg={!!selectedImageData}
        htmlFor={itemKey}
        borderRadius={shapeStyleValues.borderRadius}
        width={shapeStyleValues?.width}
        height={shapeStyleValues?.height}
      >
        <Image
          width={shapeStyleValues.width}
          height={shapeStyleValues.height}
          src={selectedImageData ? selectedImageData : ''}
          alt="selectedImg"
        />
      </CARDSHAPE>

      {titleElement}
      <button
        className="editButton"
        onClick={isTitleEditing ? handleSave : () => setIsTitleEditing(true)}
      >
        {isTitleEditing ? 'Save Title' : 'Edit Title'}
      </button>
      <DESCRIBEWRAPPER>{splitedDescribe}</DESCRIBEWRAPPER>
      <button className="editButton" onClick={isEditing ? handleSave : () => setIsEditing(true)}>
        {isEditing ? 'Save Description' : 'Edit Description'}
      </button>
    </WRAPPER>
  );
};

export default Card;

const WRAPPER = styled.div<WrapperProps>`
  padding: 20px;
  width: ${(props) => props.width + 'px'};
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  border: ${(props) => (props.isSelected ? '4px solid  #FFFF00' : '4px solid transparent')};

  .editButton {
    visibility: hidden;
  }

  &:hover .editButton {
    visibility: visible;
  }

  &:hover {
    border: ${(props) => (props.isSelected ? '4px solid #FFFF00' : '4px solid #007bff')};
  }

  transition: border 0.4s;
`;

const CardInput = styled.input`
  display: none;
`;

const CARDSHAPE = styled.label<CardShapeEProps>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background-color: ${(props) => (props.isImg ? 'none' : '#f0f0f0;')};
  border-radius: ${(props) => props.borderRadius + '%'};

  img {
    object-fit: cover;
    display: ${(props) => (props.isImg ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.borderRadius + '%'};
  }

  &:hover {
    cursor: pointer;
  }
`;

const TITLE = styled.h1<TitleProps & StyleProps>`
  margin-bottom: 10px;
  color: ${(props) => props.fontColor || (props.color ? props.color : 'black')};
  font-weight: ${(props) => props.fontWeight || (props.bold ? 'bold' : 400)};
  font-size: ${(props) => props.fontSize}px;
`;

const DESCRIBEWRAPPER = styled.div``;

const DESCRIBE = styled.p<StyleProps>`
  font-weight: ${(props) => {
    console.log('DESCRIBE fontWeight:', props.fontWeight);
    return props.fontWeight;
  }}px;
  font-size: ${(props) => {
    console.log('DESCRIBE fontSize:', props.fontSize); // Add console.log here
    return props.fontSize;
  }}px;
  color: ${(props) => {
    console.log('DESCRIBE fontColor:', props.fontColor); // Add console.log here
    return props.fontColor;
  }};
  line-height: 24px;
  text-align: left;
`;

const DeleteLayoutItemBtn = styled.div`
  font-size: 16px;
  color: black;
  cursor: pointer;
  width: 40px;
  margin-left: auto;
`;
