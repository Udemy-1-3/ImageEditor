import styled from 'styled-components';

import Arrow from '../../../public/images/icons/arrow.svg';
import Close from '../../../public/images/icons/close.svg';
import Desktop from '../../../public/images/icons/desktop.svg';
import Mobile from '../../../public/images/icons/mobile.svg';
import Setting from '../../../public/images/icons/setting.svg';
import Tablet from '../../../public/images/icons/tablet.svg';

const ICONS: { [key: string]: any } = {
  arrow: Arrow,
  close: Close,
  desktop: Desktop,
  mobile: Mobile,
  setting: Setting,
  tablet: Tablet,
};

const Icon = ({
  icon,
  width,
  height,
  color,
}: {
  icon: string;
  width: number;
  height: number;
  color?: string;
}) => {
  const SelectedIcon = ICONS[icon];

  return (
    <Wrapper>
      <SelectedIcon width={width} hegiht={height} fill={color ? color : 'black'}></SelectedIcon>
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div`
  cursor: pointer;
`;
