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
  const [fontStyle, setFontStyle] = useState<'normal' | 'italic'>('normal');
  const [textDecoration, setTextDecoration] = useState<'none' | 'underline'>('none');
  const [editing, setEditing] = useState(false);
  
  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleBold = () => {
    setFontWeight(fontWeight === 400 ? 700 : 400);
  };

  const handleUnderline = () => {
    setTextDecoration(textDecoration === 'none' ? 'underline' : 'none');
  };

  const handleItalic = () => {
    setFontStyle(fontStyle === 'normal' ? 'italic' : 'normal');
  };

  const handleSave = () => {
    setEditing(false);
    onTextChange(text, fontWeight, fontSize, fontColor);
  };

  return (
    <EditorContainer editing={editing}>
      {editing ? (
        <>
          <StyledButton 
            style={{fontWeight: fontWeight === 700 ? "bold" : "normal"}} 
            onClick={handleBold}
          >
            Bold
          </StyledButton>
          <StyledButton 
            style={{fontStyle: fontStyle}} 
            onClick={handleItalic}
          >
            Italic
          </StyledButton>
          <TEXTAREA
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ fontWeight, fontSize, color: fontColor, textDecoration, fontStyle }}
            placeholder={placeholder}
          />
          <SelectContainer>
            <select value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value, 10))}>
              <option value="10">10px</option>
              <option value="13">13px</option>
              <option value="18">18px</option>
              <option value="24">24px</option>
              <option value="32">32px</option>
            </select>
            <ColorPicker type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
            <SaveButton onClick={handleSave}>Save Title</SaveButton>
          </SelectContainer>
        </>
      ) : (
        <PreviewText onClick={() => setEditing(true)} style={{ fontWeight, fontSize, color: fontColor, textDecoration, fontStyle }}>
            {text || placeholder}
        </PreviewText>
      )}
    </EditorContainer>
  );
};

const EditorContainer = styled.div<{ editing: boolean }>`
  border: 1px solid ${props => props.editing ? "#ccc" : "transparent"};
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
`;

const TEXTAREA = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ColorPicker = styled.input`
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`;

const SaveButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const PreviewText = styled.div`
  cursor: pointer;
`;
export default TextEditor;
