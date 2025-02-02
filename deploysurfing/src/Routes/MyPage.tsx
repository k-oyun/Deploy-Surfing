import React, { useState } from "react";
import Header from "../Components/Header.tsx";
import styled from "styled-components";
import Footer from "../Components/Footer.tsx";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const UserInfoWrapper = styled.div`
  width: 35rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 7%;
  background-color: #181818;
  border-radius: 20px;
`;

const UserInfo = styled.div`
  width: 90%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
`;

const UserProfile = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: white;
`;

const UserName = styled.div`
  font-weight: 800;
  font-size: 1rem;
  color: white;
`;

const GitHubDocker = styled.div`
  width: 87%;
  height: 5.5rem;
  border-radius: 15px;
  margin-top: 1.5rem;
  background-color: rgb(59, 59, 59);
`;

const AWS = styled.div`
  width: 87%;
  height: 15rem;
  border-radius: 15px;
  margin-top: 1.5rem;
  background-color: rgb(59, 59, 59);
`;
const ExplainTxt = styled.span`
  display: block;
  font-weight: 800;
  font-size: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  color: white;
`;

const ImpInput = styled.input`
  width: 90%;
  height: 2rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
  border: 0px;
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  width: 87%;
  height: 2rem;
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 18%;
  height: 2.5rem;
  border: 0px;
  border-radius: 15px;
  font-weight: 700;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

const MyPage = () => {
  const [GitHubToken, setGitHubToken] = useState(``);
  return (
    <>
      <Header />
      <Wrapper>
        <UserInfoWrapper>
          <UserInfo>
            <UserProfile></UserProfile>
            <UserName>오윤</UserName>
          </UserInfo>
          <GitHubDocker>
            <ExplainTxt>GitHub Token</ExplainTxt>
            <ImpInput></ImpInput>
          </GitHubDocker>
          <AWS>
            <ExplainTxt>AWS IAM RoleArn</ExplainTxt>
            <ImpInput></ImpInput>
            <ExplainTxt>AWS IAM Access Key</ExplainTxt>
            <ImpInput></ImpInput>
            <ExplainTxt>AWS IAM Secret Key</ExplainTxt>
            <ImpInput></ImpInput>
          </AWS>
          <GitHubDocker>
            <ExplainTxt>Docker Hub Token</ExplainTxt>
            <ImpInput></ImpInput>
          </GitHubDocker>
          <ButtonWrapper>
            <Button>회원탈퇴</Button>
            <Button>저장</Button>
          </ButtonWrapper>
        </UserInfoWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MyPage;
