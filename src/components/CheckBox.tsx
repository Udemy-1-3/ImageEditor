import styled from 'styled-components';

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 25px;
  height: 25px;
  appearance: none;
  border: 1px solid #b3b3b3;
  position: relative;
  outline: none;

  &:checked {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 13.5px;
      height: 8px;
      border: 3px solid #b3b3b3;
      border-width: 0 0 3px 3px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

export default CheckBox;

