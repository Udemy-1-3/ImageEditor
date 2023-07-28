import styled from 'styled-components';

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
// styled-components를 사용하여 input 요소를 스타일링하고 
// 체크박스 기능을 사용하려면 attrs를 사용하여 type: 'checkbox' 속성을 추가
  width: 25px;
  height: 25px;
  appearance: none;
// appearance 속성은 폼 요소 (예: input, button, select 등)의 스타일을 변경하는 데에 사용됩니다. 
// 예를 들어, appearance: none;을 설정하면 해당 요소가 브라우저의 기본 스타일을 적용하지 않고, 커스텀 스타일이 적용
  border: 1px solid #b3b3b3; /* border 색상 변경 */
  position: relative;
  outline: none;

  &:checked {
    /* 선택된 상태에서의 스타일 */
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 13.5px;
      height: 8px;
      border: 3px solid #b3b3b3; /* V자 모양 색상 변경 */
      border-width: 0 0 3px 3px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

export default CheckBox;

// import styled from 'styled-components';

// interface CheckBoxProps {
//   width?: string;
//   height?: string;
//   checkedColor?: string;
// }

// const CheckBox = styled.input.attrs({ type: 'checkbox' })<CheckBoxProps>`
//   width: ${(props) => props.width || '25px'};
//   height: ${(props) => props.height || '25px'};
//   appearance: none;
//   border: 1px solid #b3b3b3;
//   position: relative;
//   outline: none;

//   &:checked {
//     &::after {
//       content: '';
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       width: 13.5px;
//       height: 8px;
//       border: 3px solid ${(props) => props.checkedColor || '#b3b3b3'};
//       border-width: 0 0 3px 3px;
//       transform: translate(-50%, -50%) rotate(-45deg);
//     }
//   }
// `;

// export default CheckBox;


