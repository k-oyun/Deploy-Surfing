import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImage from "/Users/oyun/Documents/develop/Deploy-Surfing/deploysurfing/src/assets/images/background.png";
import DefloyLogo from "/Users/oyun/Documents/develop/Deploy-Surfing/deploysurfing/src/assets/images/logo.png";
import SubImage from "/Users/oyun/Documents/develop/Deploy-Surfing/deploysurfing/src/assets/images/subImage.png";

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Background = styled.div`
  width: 100%;
  height: 400;
  opacity: 20%;
  position: absolute;
  z-index: -1;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MainDiv = styled.div`
  width: 700px;
  height: 100%;
  margin-left: 110px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 65px;
  margin-bottom: 30px;
`;

const MainTopText = styled.text`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 30px;
`;
const SubTopText = styled.text`
  font-weight: 600;
  margin-bottom: 25px;
`;
const MainText = styled.text`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 30px;
  color: white;
`;

const SubText = styled.text`
  color: white;
  font-weight: 600;
  margin-bottom: 25px;
`;

const StartBtn = styled.button`
  width: 90px;
  height: 40px;
  border: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.mainColor};
`;

const StartBtnText = styled.text``;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 700px;
  margin-top: 300px;
  background-color: black;
`;

const SubDiv = styled.div`
  width: 50%;
  height: 400px;
  margin-left: 110px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
`;

const SubImgDiv = styled.div`
  width: 50%;
  margin-top: 130px;
  margin-left: 250px;
`;

const SubImg = styled.img`
  display: flex;
  flex: 1;
  height: 40vh;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  background-color: #3b3b3b;
`;

const FooterLogoDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
`;
const FooterLogoTxt = styled.text`
  color: white;
  font-size: 0.9rem;
  margin-left: 0.9rem;
`;
const FooterLogoImg = styled.img`
  width: 110px;
  height: 35px;
  margin-left: 20px;
  margin-top: 5px;
`;

const FooterTextDiv = styled.div`
  flex: 1;
  margin-top: 0.9rem;
  text-align: center;
`;

const FooterText = styled.text`
  color: #8a8585;
  font-size: 0.7rem;
`;

const FooterBtnDiv = styled.div`
  flex: 1;
  margin-top: 0.4rem;
  margin-right: 20px;
  justify-content: flex-end;
  display: flex;
  flex: 1;
`;

const FooterBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  text-decoration: underline;
`;

function Main() {
  return (
    <>
      <MainWrapper>
        <Background>
          <BackgroundImg src={BackgroundImage} />
        </Background>
        <MainDiv>
          <LogoImg src={DefloyLogo} />

          <MainTopText>1초만에 프로젝트 배포하기</MainTopText>
          <SubTopText>
            불필요한 설정 없이 프로젝트를 바로 배포해 보세요.
          </SubTopText>
          <StartBtn>
            <StartBtnText>시작하기</StartBtnText>
          </StartBtn>
        </MainDiv>
      </MainWrapper>
      <SubWrapper>
        <SubDiv>
          <MainText>바로하는 프로젝트 배포</MainText>
          <SubText>
            사용자의 Github, AWS, Docker 토크을 사용하여 자동 배포 환경을
            자동으로 구축합니다.
          </SubText>

          <SubText>
            Github 프로젝트 내에 Dockerfile을 자동으로 구성합니다.
          </SubText>
          <SubText>
            Github 프로젝트 내에 Secret, Action Script를 자동으로 구성합니다.
          </SubText>
          <SubText>AWS에서 해당 계정의 비용을 청구할 수 있습니다.</SubText>
        </SubDiv>
        <SubImgDiv>
          <SubImg src={SubImage}></SubImg>
        </SubImgDiv>
      </SubWrapper>

      <Footer>
        <FooterLogoDiv>
          <FooterLogoTxt>Deploy Surfing</FooterLogoTxt>
          {/* <FooterLogoImg src={DefloyLogo} /> */}
        </FooterLogoDiv>

        <FooterTextDiv>
          <FooterText>
            Copyright 2024. DeploySurfing All Rights Reserved
          </FooterText>
        </FooterTextDiv>

        <FooterBtnDiv>
          <FooterBtn>Contact</FooterBtn>
          <FooterBtn>About</FooterBtn>
        </FooterBtnDiv>
      </Footer>
    </>
  );
}

export default Main;
