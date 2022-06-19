import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Profile from "../assets/images/profile.png";

const AboutCard: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <ProfileImage
          src={Profile}
          alt="vibhorpal"
          objectFit="contain"
          layout="responsive"
        />
      </ImageWrapper>
      <MainWrapper>
        <Title>About Me</Title>
        <Text>
          Fugiat qui minim deserunt eiusmod esse minim fugiat aliquip amet ipsum
          eiusmod. Consequat mollit ut duis eiusmod sunt tempor in pariatur elit
          non consequat voluptate. Mollit duis non excepteur sint laboris
          laboris commodo ad magna. Ex et sint consectetur elit.
        </Text>
        <Text>
          Est fugiat cillum laboris Lorem velit tempor minim ex ex eiusmod
          nostrud commodo magna. Minim proident sunt laboris anim tempor in
          dolor voluptate ad. Aliquip eiusmod incididunt proident tempor. Tempor
          pariatur veniam id dolor eu tempor consectetur amet elit nisi id
          laborum deserunt enim. Eu qui cillum exercitation fugiat pariatur qui
          officia et anim laborum elit.
        </Text>
        <Button>More About Me </Button>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.borderColor};
  height: 450px;
  width: 1080px;
  padding: 30px 30px;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
`;

const ImageWrapper = styled.div`
  height: 400px;
  width: 350px;
  background-color: ${({ theme }) => theme.linkColor};
  border-radius: 10px;
`;

const ProfileImage = styled(Image)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

const MainWrapper = styled.div`
  margin-left: 30px;
  width: 730px;
`;

const Title = styled.h2`
  font-size: 48px;
  letter-spacing: 3px;
`;

const Text = styled.p`
  font-size: 18px;
  margin: 30px 0;
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  border: 2px solid ${({ theme }) => theme.textColorLight};
  background-color: transparent;
  border-radius: 10px;
`;

export default AboutCard;
