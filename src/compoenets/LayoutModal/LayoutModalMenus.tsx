import styled from 'styled-components';

const LayoutModalMenus = ({
  menus,
  selectedMenu,
  onClickMenu,
}: {
  menus: string[];
  selectedMenu: string;
  onClickMenu: (menu: string) => void;
}) => {
  return (
    <Menus>
      {menus.map((menu, idx) => (
        <Menu onClick={() => onClickMenu(menu)} $isSelectedMenu={menu === selectedMenu} key={idx}>
          {menu}
        </Menu>
      ))}
    </Menus>
  );
};

export default LayoutModalMenus;

const Menus = styled.div`
  cursor: pointer;
`;

const Menu = styled.p<{ $isSelectedMenu: boolean }>`
  font-weight: 500;
  color: ${(props) => (props.$isSelectedMenu ? props.theme.colors.primary100 : 'black')};
  font-size: 18px;

  line-height: 21.48px;

  letter-spacing: 0.36px;

  margin-bottom: 22px;
`;
