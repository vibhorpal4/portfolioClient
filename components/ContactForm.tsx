import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/images/profile.png";
import contactForm from "../interfaces/contactFormInterface";

const ContactForm = () => {
  const [form, setForm] = useState<contactForm>({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(form);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <LeftContainer>
        <Title>Let&apos; s converse about everything !</Title>
        <ImageWrapper>
          <ProfileImage src={Logo} alt="logo" />
        </ImageWrapper>
        <SubHeading>Feel free to ask anything !</SubHeading>
        <Text>
          Have doubt or suggestion to make? Feel free to ask anything. If you
          have any suggestions, please let me know. Your suggestions are highly
          appreciated. I appreciate your time and try hard to reply to every
          single message posted here! Keep dropping your priceless opinions.
        </Text>
      </LeftContainer>
      <RightContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Full Name</Label>
            <Input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextInput
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <SubmitButton>Send message</SubmitButton>
          </FormGroup>
        </Form>
      </RightContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 70%;
  height: 80%;
  border: 2px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  display: flex;
  /* background-color: ${({ theme }) => theme.cardBackgroundColor}; */
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
`;

const LeftContainer = styled.div`
  margin: 80px 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  word-spacing: 5px;
`;

const ImageWrapper = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${({ theme }) => theme.linkColor};
  border-radius: 10px;
  border: 2px sold ${({ theme }) => theme.borderColor};
  margin: 30px 0;
`;

const ProfileImage = styled(Image)`
  border-radius: 10px;
  height: 200px;
  width: 200px;
  object-fit: contain;
`;

const SubHeading = styled.h3`
  font-size: 23px;
  word-spacing: 3px;
`;

const Text = styled.p`
  font-size: 18px;
  margin: 20px 70px;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const FormGroup = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  color: ${({ theme }) => theme.textColorDark};
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  padding: 5px 10px;
  /* border: 2px solid ${({ theme }) => theme.borderColor}; */
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border: none;
  border-radius: 10px;
  margin: 10px 0;
  font-size: 18px;
`;

const TextInput = styled.textarea`
  width: 80% !important;
  height: 150px !important;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border: none;
  border-radius: 10px;
  margin: 10px 0;
  font-size: 18px;
`;

const SubmitButton = styled.button`
  width: 83%;
  height: 50px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default ContactForm;
