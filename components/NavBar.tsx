import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      {/* <LogoContainer> */}
      <LogoText onClick={() => router.push("/")}>Vibhor Pal</LogoText>
      {/* </LogoContainer> */}

      <MenuContainer>
        <Link href="/">
          <MenuText href="/">Home</MenuText>
        </Link>

        <Link href="/projects">
          <MenuText href="/projects">Projects</MenuText>
        </Link>
        <Link href="/contact">
          <MenuText href="/contact">Contact</MenuText>
        </Link>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  /* background-color: aliceblue; */
  width: 100%;
  height: 60px;
`;

const LogoText = styled.h1`
  font-size: 25px;
  margin-left: 80px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;

  @media (max-width: 600) {
    display: none;
  }
`;

const MenuText = styled.a`
  color: ${({ theme }) => theme.textColorDark};
  margin: 0 10px;
  text-decoration: none;

  @media (max-width: 600) {
    display: none;
  }
`;

export default NavBar;
