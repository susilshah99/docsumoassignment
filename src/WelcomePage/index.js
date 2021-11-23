import React from "react";
import { Wrapper, HelloMessage, LogoutButton } from "./StyledElements";
import { useHistory } from "react-router-dom";

const WelcomePage = () => {
  const user = localStorage.getItem("user");
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <Wrapper>
      <HelloMessage>Hello, {user}</HelloMessage>
      <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
    </Wrapper>
  );
};
export default WelcomePage;
