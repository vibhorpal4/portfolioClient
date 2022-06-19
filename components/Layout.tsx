// import { NextComponentType } from "next";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../utils/theme";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <NavBar />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export default Layout;
