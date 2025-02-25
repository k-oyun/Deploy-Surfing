import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/background.png";
import DefloyLogo from "../assets/images/logo.png";
import SubImage from "../assets/images/subImage.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  overflow: scroll;
  height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImage});
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${BackgroundImage});
  height: 50vh;
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

const MainTopText = styled.span`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 30px;
`;
const SubTopText = styled.span`
  font-weight: 600;
  margin-bottom: 25px;
`;
const MainText = styled.span`
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 30px;
  color: white;
`;

const SubText = styled.span`
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
  cursor: pointer;
`;

const StartBtnText = styled.span``;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 700px;
  /* margin-top: 300px; */
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

function Main() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <MainDiv>
          <LogoImg src={DefloyLogo} />

          <MainTopText>1초만에 프로젝트 배포하기</MainTopText>
          <SubTopText>
            불필요한 설정 없이 프로젝트를 바로 배포해 보세요.
          </SubTopText>
          <StartBtn
            onClick={() => {
              navigate("/main");
            }}
          >
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
      <Footer />
    </Wrapper>
  );
}

export default Main;
