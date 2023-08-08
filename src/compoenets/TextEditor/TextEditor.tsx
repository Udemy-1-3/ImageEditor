import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type TextEditorProps = {
  initialText: string;
  onTextChange: (text: string, fontWeight: number, fontSize: number, fontColor: string) => void;
  placeholder?: string;
};

const TextEditor: React.FC<TextEditorProps> = ({ initialText, onTextChange, placeholder }) => {
  const [text, setText] = useState(initialText);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#000000');
  const [editing, setEditing] = useState(false);
  
  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleEditButtonClick = () => {
    setEditing(false);
    onTextChange(text, fontWeight, fontSize, fontColor);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleFontWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontWeight(parseInt(event.target.value, 10));
  };

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(event.target.value, 10));
  };

  const handleFontColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(event.target.value);
  };

  return (
    <div>
      {editing ? (
        <>
          <button onClick={handleEditButtonClick}>Save</button>
          <TEXTAREA
            value={text}
            onChange={handleTextChange}
            style={{ fontWeight, fontSize, color: fontColor }}
            placeholder={placeholder}
          />
          <input type="number" value={fontWeight} onChange={handleFontWeightChange} placeholder="Font weight" />
          <input type="number" value={fontSize} onChange={handleFontSizeChange} placeholder="Font size" />
          <input type="color" value={fontColor} onChange={handleFontColorChange} />
        </>
      ) : (
        <div onClick={() => setEditing(true)}>{text || placeholder}</div>
      )}
    </div>
  );
};

export default TextEditor;

const TEXTAREA = styled.textarea`
  width: 100%;
  height: 100px;
`;
