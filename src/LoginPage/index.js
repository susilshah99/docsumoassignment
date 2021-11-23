import React, { useState, useEffect } from "react";
import {
  Wrapper,
  LoginContainer,
  Container,
  Header,
  Title,
  Form,
  EmailContainer,
  Input,
  Label,
  PasswordContainer,
  LoginButton,
  SignupButton,
  Message,
  Footer,
  LogoContainer,
  Image,
  ValidationMessage,
  ErrorMessage,
} from "./StyledElements";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("./welcomepage");
    }
  }, []);

  const handleEmailInputChange = (event) => {
    setInputValues({ ...inputValues, email: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setInputValues({ ...inputValues, password: event.target.value });
  };

  const handleLogin = () => {
    if (!inputValues.email && !inputValues.password) return;
    setIsLoading(true);

    axios({
      method: "post",
      url: "https://apptesting.docsumo.com/api/v1/eevee/login/",
      data: inputValues,
    })
      .then((response) => {
        setIsLoading(false);
        localStorage.setItem("user", response.data.data.user.full_name);
        localStorage.setItem("token", response.data.data.token);
        history.push("/welcomepage");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        setIsLoading(false);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    handleLogin();
  };

  return (
    <Wrapper>
      <Container>
        <LoginContainer>
          <Header>
            <LogoContainer>
              <Image src="docsumologo.png" />
            </LogoContainer>
            <Title>Login to Docsumo</Title>
          </Header>
          <Form>
            <EmailContainer>
              <Input
                type="text"
                name="email"
                required
                value={inputValues.email}
                onChange={handleEmailInputChange}
                autoFocus
              />
              <Label>Work Email</Label>
              {isSubmitted && !inputValues.email ? (
                <ValidationMessage>Please enter your email address !</ValidationMessage>
              ) : null}
            </EmailContainer>
            <PasswordContainer>
              <Input
                type="password"
                name="password"
                required
                value={inputValues.password}
                onChange={handlePasswordInputChange}
              />
              <Label>Password</Label>
              {isSubmitted && !inputValues.password ? (
                <ValidationMessage>Please enter your password !</ValidationMessage>
              ) : null}
            </PasswordContainer>
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            <LoginButton onClick={handleFormSubmit} style={{ opacity: isLoading ? 0.6 : 1 }}>
              {isLoading ? (
                <i
                  class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"
                  style={{ fontSize: "20px" }}
                ></i>
              ) : null}
              {isLoading ? "Logging In" : "Log In"}
            </LoginButton>
          </Form>
          <Footer>
            <Message>Don't have an account?</Message>
            <SignupButton>Sign Up</SignupButton>
          </Footer>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
