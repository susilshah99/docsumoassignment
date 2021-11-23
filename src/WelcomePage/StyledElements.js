import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f7f8ff;
`;

export const HelloMessage = styled.h1`
  font-size: 22px;
  color: #3d3d3d;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  text-transform: uppercase;
  font-weight: 400;
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
`;
