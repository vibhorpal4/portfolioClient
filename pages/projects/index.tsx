import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import ProjectListComponent from "../../components/ProjectListComponent";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Vibhor Pal</title>
        <meta
          name="description"
          content="Here you can find the project which are created by vibhor pal"
        />
      </Head>
      <Container>
        <ProjectListComponent />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Projects;
