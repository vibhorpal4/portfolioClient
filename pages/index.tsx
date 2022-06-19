import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import AboutComponent from "../components/AboutComponent";
import HeroComponent from "../components/HeroComponent";
import ProjectListComponent from "../components/ProjectListComponent";
import SkillsComponent from "../components/SkillsComponent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Vibhor Pal</title>
        <meta
          name="description"
          content="Hey!, welcome to Portfolio of Vibhor Pal. Vibhor Pal is a Full Stack Developer and Cross platform application developer with the hands on skills in JavaScript, TypeScript, Node.js, React.js, Express.js, Next.js, MongoDB, React Native, Django and Python"
        />
      </Head>
      <Container>
        <HeroComponent />
        <AboutComponent />
        <SkillsComponent />
        <ProjectListComponent />
      </Container>
    </>
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

export default Home;
