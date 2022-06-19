import React from "react";
import styled from "styled-components";
import AboutCard from "./AboutCard";

const AboutComponent: React.FC = () => {
  return (
    <Container>
      <AboutCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default AboutComponent;
