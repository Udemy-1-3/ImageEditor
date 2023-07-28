'use client';
import Image from 'next/image';
import styled from 'styled-components';

const COMMONPATH = `images/icons`;

interface IconWrapperProps {
  width?: number;
  height?: number;
}

const ICONPATHS: { [key: string]: string } = {
  arrow: `${COMMONPATH}/arrow.svg`,
  close: `${COMMONPATH}/close.svg`,
  desktop: `${COMMONPATH}/desktop.svg`,
  mobile: `${COMMONPATH}/mobile.svg`,
  setting: `${COMMONPATH}/setting.svg`,
  tablet: `${COMMONPATH}/tablet.svg`,
};

const Icon = ({ icon, width, height }: { icon: string; width?: number; height?: number }) => {
  return (
    <ICONWRAPPER width={width} height={height}>
      <Image
        alt="icon"
        width={width ? width : 45}
        height={height ? height : 45}
        src={ICONPATHS[icon]}
      ></Image>
    </ICONWRAPPER>
  );
};

export default Icon;

const ICONWRAPPER = styled.div<IconWrapperProps>`
  width: ${(props) => (props.width ? props.width + 'px' : '45px')};
  height: ${(props) => (props.height ? props.height + 'px' : '45px')};
  img {
    width: 100%;
    height: 100%;
  }
`;
