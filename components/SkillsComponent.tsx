import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import SkillCard from "./SkillCard";
import ReactImage from "../assets/images/react.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SkillsComponent: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Skills</Title>
      </Header>
      <SliderContainer
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={2000}
        slidesPerView={3}
        loop
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <SkillCard image={ReactImage} />
        </SwiperSlide>
      </SliderContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const SliderContainer = styled(Swiper)`
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  /* height: 500px; */
  width: 60%;
`;

export default SkillsComponent;
