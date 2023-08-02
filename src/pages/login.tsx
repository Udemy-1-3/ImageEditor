import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F8F9FA;
    margin: 0;
    padding: 0;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  width: 394px;
  height: 410px;
`;

const Input = styled.input`
  background-color: #F3F3F3;
  border: solid 1px #F3F3F3;
  padding: 0px;
  width: 394px;
  height: 60px;
  border-radius: 10px;
`;

const Button = styled.button`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-align: center;
  padding: 17px, 177px;
  background-color: #EE7D00;
  color: white;
  border: none;
  width: 394px;
  height: 57px;
  border-radius: 10px;
  cursor: pointer;
  
`;

const FlexDiv = styled.div`
font-size: 12px;
font-weight: 550;
line-height: 14.32px;
letter-spacing: -0.02em;
text-align: center;
color: #666666;
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 55.55px;
`;

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <img src="/images/logo.png" alt="logo" width={162.28} height={87.44} />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <FlexDiv>
            <div>계정 만들기</div>
            <div>비밀번호를 잊어버리셨나요?</div>
          </FlexDiv>
          <Button type="submit">로그인</Button>
        </LoginForm>
      </LoginContainer>
    </>
  );
}
