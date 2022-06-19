import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import TypeWriter from "typewriter-effect";

const HeroComponent: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <NameContainer>
        <GreetingText>Hey! I&apos; m </GreetingText>{" "}
        <NameText> Vibhor Pal.</NameText>
      </NameContainer>
      <TaglineText>
        <TypeWriter
          options={{
            strings: ["Full Stack Developer", "React Native", "MERN Stack"],
            autoStart: true,
            loop: true,
          }}
        />
      </TaglineText>
      <PortfolioLine>This is my portfolio</PortfolioLine>
      <ButtonsWrapper>
        <Button onClick={() => router.push("/projects")}>View Projects</Button>
        <OutlineButton
          href="https://docs.google.com/document/d/1fWwyBTA5IoL8PyJcBwG4tcu1jgTlJpmu/edit"
          target="_blank"
        >
          Download CV
        </OutlineButton>
      </ButtonsWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 100vh;
    width: 100vw;
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GreetingText = styled.h1`
  font-size: 60px;
  letter-spacing: 3px;

  //mobile breakpoint
  @media (max-width: 600px) {
    font-size: 30px;
  }

  //tablet breakpoint
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const NameText = styled.h1`
  font-size: 60px;
  color: ${({ theme }) => theme.primaryColor};
  letter-spacing: 3px;
  /* word-spacing: 5px; */
  margin: 0 10px;
`;

const TaglineText = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.textColorDark};
`;

const PortfolioLine = styled.span`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  height: 50px;
  width: 200px;
  margin: 0 15px;
  cursor: pointer;
`;

const OutlineButton = styled.a`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textColorLight};
  border-radius: 5px;
  height: 50px;
  width: 200px;
  margin: 0 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColorDark};
  text-decoration: none;
`;

export default HeroComponent;
