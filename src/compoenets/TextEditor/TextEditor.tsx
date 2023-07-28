import React, { useState } from "react";
import styled from "styled-components";

const TextArea = styled.textarea<{ editing: boolean }>`
  width: 100%;
  height: 100px;
  border: ${(props) =>
    props.editing ? "2px dotted rgba(0, 0, 0, 0.3)" : "2px solid transparent"};
  resize: none;
  padding: 10px;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Control = styled.div`
  margin-right: 15px;
`;

const EditButton = styled.button`
  display: ${(props) => (props.editing ? "block" : "none")};
  position: absolute;
  top: 10px;
  right: 10px;
`;

function TextEditor({ text, onTextChange }) {
  const [editing, setEditing] = useState(false);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#000");

  const handleTextAreaClick = () => {
    setEditing(true);
  };

  const handleEditButtonClick = () => {
    setEditing(false);
  };

  const handleFontWeightChange = (event) => {
    setFontWeight(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const handleTextChange = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div onClick={handleTextAreaClick}>
      <ControlsContainer>
        <Control>
          <label>Font weight:</label>
          <input
            type="number"
            value={fontWeight}
            onChange={handleFontWeightChange}
          />
        </Control>
        <Control>
          <label>Font size:</label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </Control>
        <Control>
          <label>Font color:</label>
          <input
            type="color"
            value={fontColor}
            onChange={handleFontColorChange}
          />
        </Control>
      </ControlsContainer>
      <TextArea
        value={text}
        onChange={handleTextChange}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
        editing={editing}
      />
      <EditButton onClick={handleEditButtonClick} editing={editing}>
        Save
      </EditButton>
    </div>
  );
}

export default TextEditor;
