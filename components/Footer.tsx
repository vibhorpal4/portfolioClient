import styled from "styled-components";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import Link from "next/link";

import { MdPhone } from "react-icons/md";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContainer>
        <LeftContainer>
          <Logo>Vibhor Pal</Logo>
        </LeftContainer>
        <CenterContainer>
          <CenterWrapper>
            <Title>Quick Links</Title>
            <LinkContainer>
              {/* <Link href="#">
                <LinkText href="#">About me</LinkText>
              </Link> */}
              <Link href="/projects">
                <LinkText href="/projects">Projects</LinkText>
              </Link>
              <Link href="/contact">
                <LinkText href="/contact">Contact</LinkText>
              </Link>
            </LinkContainer>
          </CenterWrapper>
          <CenterWrapper>
            <Title>Contact</Title>
            <ContactWrapper>
              <AiFillMail size={20} />
              <ContactText>vibhorpal4@gmail.com</ContactText>
            </ContactWrapper>
            <ContactWrapper>
              <MdPhone size={20} />
              <ContactText>+91 8006820389</ContactText>
            </ContactWrapper>
            {/* <ContactWrapper>
              <AiFillMail size={20} />
              <ContactText>vibhorpal4@gmail.com</ContactText>
            </ContactWrapper> */}
          </CenterWrapper>
        </CenterContainer>
        <RightContainer>
          <Title>Social</Title>
          <SolcialContainer>
            <IconButton
              href="https://www.linkedin.com/in/vibhor-pal-3688b1173/"
              target="_blank"
            >
              <AiFillLinkedin size={35} />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/vibhorpal4/"
              target="_blank"
            >
              <AiFillFacebook size={35} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/vibhorpal/"
              target="_blank"
            >
              <AiFillInstagram size={35} />
            </IconButton>
            <IconButton href="https://twitter.com/vibhorpal4" target="_blank">
              <AiFillTwitterCircle size={35} />
            </IconButton>
          </SolcialContainer>
        </RightContainer>
      </FooterContainer>
      <SubFooter>
        <Copyright>&copy; 2022 Vibhor Pal</Copyright>
      </SubFooter>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 350px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  /* align-items: center; */
  height: 280px;
  /* border-bottom: 1px solid ${({ theme }) => theme.borderColor}; */
  border-top: 2px solid ${({ theme }) => theme.borderColor};
  width: 60%;
`;

const LeftContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  width: 33.3%;
  height: 100%;
  margin-top: 60px;
  /* background-color: aliceblue; */
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

const Title = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.linkColor};
  font-weight: bold;
`;

const CenterContainer = styled.nav`
  width: 50%;
  margin-top: 60px;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  height: 100%;
`;

const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 20px 0;
`;

const LinkText = styled.a`
  text-decoration: none;
  margin: 10px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.textColorDark};

  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  color: ${({ theme }) => theme.textColorDark};
`;

const ContactText = styled.span`
  color: ${({ theme }) => theme.textColorDark};
  font-size: 18px;
  margin: 0 10px;
`;

const RightContainer = styled.div`
  width: 33.3%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  /* padding-left: auto; */
  /* align-items: center; */
`;

const SolcialContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColorDark};
  margin: 20px 0;
`;

const IconButton = styled.a`
  width: 35px;
  height: 35px;
  margin-right: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.textColorDark};
`;

const SubFooter = styled.div`
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid ${({ theme }) => theme.borderColor}; */
  border-top: 2px solid ${({ theme }) => theme.borderColor};
  width: 60%;
  height: 70px;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.textColorDark};
  font-weight: 500;
`;

export default Footer;
