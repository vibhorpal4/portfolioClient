import Image from "next/image";
import React from "react";
import styled from "styled-components";

const SkillCard: React.FC<any> = ({ image }: any) => {
  return (
    <Container>
      <ImageWrapper>
        <SkillImage src={image} alt="react" objectFit="contain" priority />
      </ImageWrapper>
      {/* <MainWrapper>
        <SkillTitle>React Js</SkillTitle>
      </MainWrapper> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

const ImageWrapper = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 10px;
`;

const SkillImage = styled(Image)`
  border-radius: 10px;
`;

export default SkillCard;
