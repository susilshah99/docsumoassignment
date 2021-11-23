import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f7f8ff;
  overflow: auto;
`;

export const Container = styled.div`
  padding: 60px 40px 24px;
  margin: auto;
`;

export const LoginContainer = styled.div`
  width: 370px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px hsl(0deg 0% 43% / 50%);
`;

export const Header = styled.div`
  position: relative;
  padding: 42px 24px 0;
`;

export const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: #3d3d3d;
`;
export const Form = styled.form`
  padding: 32px 24px 24px;
`;

export const EmailContainer = styled.div`
  position: relative;
  padding: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0;
  margin: 0;
  font-size: 14px;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 2px solid #8adbdb;

  &: focus + label {
    top: -4px;
  }

  &: valid + label {
    top: -4px;
  }
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 20px;
  font-size: 14px;
  line-height: 30px;
  opacity: 0.5;
  transition: all 0.2s;
  pointer-events: none;
`;

export const PasswordContainer = styled.div`
  margin-top: 10px;
  position: relative;
  padding: 20px 0;
`;

export const LoginButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.05em;
  margin-top: 26px;
  background: #405089;
  color: #fff;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  //   padding: 0 20px 0 15px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    opacity: 0.9;
  }
`;

export const Footer = styled.footer`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Message = styled.p`
  flex: 1 1;
  font-size: 15px;
  color: #707070;
  margin-right: 16px;
`;

export const SignupButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 16px;
  font-size: 16px;
  color: #405089;
  border: 1px solid #405089;
  border-radius: 16px;
  cursor: pointer;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -32px;
  left: calc(50% - 32px);
  box-shadow: 0 -1px 0 hsl(0deg 0% 43% / 5%);
`;

export const Image = styled.img`
  height: 48px;
  width: 48px;
`;

export const ValidationMessage = styled.p`
  color: #e35b46;
  font-size: 12px;
  line-height: 15px;
  position: absolute;
  top: 45px;
`;

export const ErrorMessage = styled.p`
  min-height: 14px;
  text-align: center;
  margin-top: 14px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #e35b46;
`;
