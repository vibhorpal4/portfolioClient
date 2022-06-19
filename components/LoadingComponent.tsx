import styled from "styled-components";
// import { CoffeeLoading } from "react-loadingg";
// import { NextComponentType } from "next";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <Container>
      {/* <CoffeeLoading color="#ffffff" /> */}
      <h1>Loading...</h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingComponent;
