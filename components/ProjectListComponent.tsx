import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Image1 from "../assets/images/image1.jpg";
import Link from "next/link";
import React from "react";

const ProjectListComponent: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Projects</Title>
      </Header>
      <ProjectsContainer>
        <ProjectCard
          image={Image1}
          year="2022"
          tech="MERN STACK"
          title="OvaTalk Full Stack Application"
          metaDescription="Enim minim aliqua sint non. Sunt veniam consequat mollit ad ipsum esse ex quis occaecat quis nostrud irure. Esse exercitation tempor ipsum nostrud proident incididunt. Dolore ex et aliqua mollit adipisicing officia ad culpa proident id consectetur duis sunt laborum."
        />
        <ProjectCard
          image={Image1}
          year="2022"
          tech="MERN STACK"
          title="OvaTalk Full Stack Application"
          metaDescription="Enim minim aliqua sint non. Sunt veniam consequat mollit ad ipsum esse ex quis occaecat quis nostrud irure. Esse exercitation tempor ipsum nostrud proident incididunt. Dolore ex et aliqua mollit adipisicing officia ad culpa proident id consectetur duis sunt laborum."
        />
        <ProjectCard
          image={Image1}
          year="2022"
          tech="MERN STACK"
          title="OvaTalk Full Stack Application"
          metaDescription="Enim minim aliqua sint non. Sunt veniam consequat mollit ad ipsum esse ex quis occaecat quis nostrud irure. Esse exercitation tempor ipsum nostrud proident incididunt. Dolore ex et aliqua mollit adipisicing officia ad culpa proident id consectetur duis sunt laborum."
        />
        <ProjectCard
          image={Image1}
          year="2022"
          tech="MERN STACK"
          title="OvaTalk Full Stack Application"
          metaDescription="Enim minim aliqua sint non. Sunt veniam consequat mollit ad ipsum esse ex quis occaecat quis nostrud irure. Esse exercitation tempor ipsum nostrud proident incididunt. Dolore ex et aliqua mollit adipisicing officia ad culpa proident id consectetur duis sunt laborum."
        />
        <ProjectCard
          image={Image1}
          year="2022"
          tech="MERN STACK"
          title="OvaTalk Full Stack Application"
          metaDescription="Enim minim aliqua sint non. Sunt veniam consequat mollit ad ipsum esse ex quis occaecat quis nostrud irure. Esse exercitation tempor ipsum nostrud proident incididunt. Dolore ex et aliqua mollit adipisicing officia ad culpa proident id consectetur duis sunt laborum."
        />
      </ProjectsContainer>
      <BottomContainer>
        <Link href="/projects">
          <LinkText href="/projects">View more projects</LinkText>
        </Link>
      </BottomContainer>
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
  margin-bottom: 150px;
`;

const Header = styled.div`
  width: 60%;
  margin: 20px 0;
  /* margin: 0 150px; */
`;

const Title = styled.h2`
  font-size: 48px;
  letter-spacing: 3px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-top: 20px; */
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const LinkText = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.textColorDark};
`;

export default ProjectListComponent;
