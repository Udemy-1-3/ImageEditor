import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LayoutBox = styled.div`
  width: 457px;
  height: 152px;
  margin: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TextLayout({ onLayoutSelect }) {
  const layouts = [
    "Lorem ipsum 1",
    "Lorem ipsum 2",
    "Lorem ipsum 3",
    "Lorem ipsum 4",
    "Lorem ipsum 5",
    "Lorem ipsum 6",
  ];

  const handleLayoutClick = (layout) => {
    onLayoutSelect(layout);
  };

  return (
    <LayoutContainer>
      {layouts.map((layout, index) => (
        <LayoutBox key={index} onClick={() => handleLayoutClick(layout)}>
          {layout}
        </LayoutBox>
      ))}
    </LayoutContainer>
  );
}

export default TextLayout;
