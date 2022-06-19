import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

const contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Vibhor Pal</title>
        <meta
          name="description"
          content="Contact Vibhor Pal by filling the contact form"
        />
      </Head>

      <Container>
        <ContactForm />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default contact;
