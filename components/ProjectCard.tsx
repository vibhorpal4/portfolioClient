import styled from "styled-components";
import Image from "next/image";
import React from "react";

const ProjectCard: React.FC<any> = ({
  image,
  title,
  metaDescription,
  tech,
  year,
}: any) => {
  return (
    <Container>
      <CustomImage src={image} alt={title} />
      <Details>
        <Title>{title}</Title>
        <TechContainer>
          <Year>{year}</Year>
          <Tech>{tech}</Tech>
        </TechContainer>

        <Description>{metaDescription}</Description>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  height: 300px;
  display: flex;
  /* align-items: center; */
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  margin: 0 0 20px 0;
`;

const CustomImage = styled(Image)`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 50px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  /* justify-content: space-between; */
`;

const Year = styled.span`
  padding: 10px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 20px;
  color: ${({ theme }) => theme.textColorDark};
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tech = styled.span`
  margin-left: 30px;
`;

const Description = styled.p`
  font-size: 17px;
  /* width: 500px; */
  margin-top: 20px;
`;

export default ProjectCard;
