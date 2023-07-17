import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 162.28px;
  height: 87.44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 70%;
  height: 70%;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  margin: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/images/logo.png" alt="Logo" />
      </LogoContainer>
      <Navigation>
        <Link href="#">마이페이지</Link>
        <span>|</span>
        <Link href="#">로그아웃</Link>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
