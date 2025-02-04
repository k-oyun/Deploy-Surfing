import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PowerButton from "../assets/images/powerbutton.png";
const Wrapper = styled.div`
  display: flex;
  /* width: 100vw; */
  background-color: black;
`;

const Sidebar = styled.div`
  background-color: rgb(59, 59, 59);
  width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 1.5rem; */
`;

const NewAppBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 15rem;
  height: 3.2rem;
  border: 1px solid;
  border-radius: 15px;
  border-color: rgba(0, 0, 0, 0.3);
  background-color: #11e5b3;
  cursor: pointer;
`;

const NewAppBtnText = styled.span`
  font-weight: 800;
  margin-right: 2rem;
  margin-top: 0.2rem;
`;

const NewAppSvg = styled(motion.svg)`
  width: 2.5rem;
  height: 1.5rem;
  fill: black;
  padding: 0.3rem;
`;

const UserAppBtn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 0.3;
  width: 15rem;
  height: 3.5rem;
  border: 3px solid;
  border-radius: 15px;
  border-color: ${(props) => (props.isSelected ? "#11E5B3" : "#D5D5D5")};
  background-color: #d5d5d5;
  cursor: pointer;
`;

const AppBtnTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 30px;
  margin-left: 10px;
`;

const AppBtnText = styled.span``;

const PowerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: transparent;
  display: flex;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Power = styled(motion.svg)`
  width: 38px;
  height: 30px;
  fill: ${(props) => (props.isPowerOn ? "#6DB33F" : "#fc8787")};
  z-index: 100;
  position: absolute;
`;

const PowerBtnImg = styled.img`
  position: absolute;
  z-index: 500;
  width: 19px;
  height: 19px;
  margin-bottom: 2px;
  margin-left: -1px;
`;

const DeployInfoWrappers = styled.div`
  display: flex;
  justify-content: center;
  width: 84%;
  height: 100vh;
  /* background-color: red; */
`;

const DeployInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 32rem;
  margin-top: 1rem;
  background-color: #d5d5d5;
  border-radius: 10px;
  /* background-color: blue; */
`;

const DeployInfoTitle = styled.span`
  font-size: 160%;
  font-weight: 700;
  margin-bottom: 0.2rem;
  margin-left: 1.1%;
  margin-right: 60%;
  background-color: red;
`;

const DeployInfoBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.4rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
  background-color: blue;
`;

const DeploySvg = styled(motion.svg)`
  width: 2rem;
  cursor: pointer;
  margin-right: 1rem;
`;
const BtnSvg = styled(motion.svg)`
  width: 1rem;
  cursor: pointer;
`;
const BtnTxt = styled.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 800;
  margin-left: 0.6rem;
`;

const StartOrStopBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 2.3rem;
  border: none;
  border-radius: 8px;
  margin-right: 1rem;
  background-color: #3b3b3b;
  cursor: pointer;
`;

const DetailInfoWrapper = styled.div`
  width: 50rem;
  height: 2.3rem;
  display: flex;
  margin-left: 1rem;
  /* flex-direction: column; */
`;

const DetailInfoLeft = styled.div`
  width: 15rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailInfoRight = styled.div`
  width: 35rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailInfoTxt = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;
const Main = () => {
  const navigate = useNavigate();
  const [selectedApp, setSelectedApp] = useState(null);
  const [apps, setApps] = useState([
    {
      id: 1,
      name: "DefloySurfing",
      framework: "Spring Boot",
      isPowerOn: false,
    },
    { id: 2, name: "해커톤 2팀", framework: "Django", isPowerOn: false },
    { id: 3, name: "App 3", framework: "Spring Boot", isPowerOn: false },
  ]);

  const onClickAppButton = (appName) => {
    setSelectedApp(appName);
  };

  const onClickPower = (appId) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === appId ? { ...app, isPowerOn: !app.isPowerOn } : app
      )
    );
  };
  const details = [
    { Title: "Framework", value: "SpringBoot" },
    { Title: "Language", value: "Java" },
    { Title: "IP", value: "PostgreSQL" },
    { Title: "ssh key", value: "PostgreSQL" },
    { Title: "Instance", value: "PostgreSQL" },
    { Title: "Spring Boot 버전", value: "PostgreSQL" },
    { Title: "Java 버전", value: "PostgreSQL" },
    { Title: "생성 날짜", value: "PostgreSQL" },
    { Title: "Github", value: "PostgreSQL" },
    { Title: "보안 그룹", value: "PostgreSQL" },
    { Title: "소유자", value: "PostgreSQL" },
    { Title: "설명", value: "PostgreSQL" },
  ];
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar>
          <NewAppBtn onClick={() => navigate("/addApp")}>
            <NewAppSvg
              xmlns="http://www.w3.org/2000/svg"
              width="448"
              height="512"
              viewBox="0 0 448 512 "
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </NewAppSvg>
            <NewAppBtnText>새 앱 추가</NewAppBtnText>
          </NewAppBtn>
          {apps.map((app) => (
            <UserAppBtn
              key={app.id}
              onClick={() => onClickAppButton(app.name)}
              isSelected={selectedApp === app.name}
            >
              <PowerBtn onClick={() => onClickPower(app.id)}>
                <Power
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  isPowerOn={app.isPowerOn} //isPowerOn 프롭으로 각 앱의 파워 상태 전달
                >
                  <circle cx="22.5" cy="22.5" r="22.5" />
                </Power>
                <PowerBtnImg src={PowerButton}></PowerBtnImg>
              </PowerBtn>

              <AppBtnTextWrapper>
                <AppBtnText
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                  }}
                >
                  {app.name}
                </AppBtnText>
                <AppBtnText
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color:
                      app.framework === "Spring Boot" ? "#6DB33F" : "#3B6DEB",
                  }}
                >
                  {app.framework}
                </AppBtnText>
              </AppBtnTextWrapper>
            </UserAppBtn>
          ))}
        </Sidebar>
        <DeployInfoWrappers>
          <DeployInfoWrapper>
            <DeployInfoBtnWrapper>
              <DeployInfoTitle>DeploySurfing</DeployInfoTitle>
              <DeploySvg
                width="59"
                height="59"
                viewBox="0 0 59 59"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5 59C37.3239 59 44.8273 55.892 50.3596 50.3596C55.892 44.8273 59 37.3239 59 29.5C59 21.6761 55.892 14.1727 50.3596 8.64035C44.8273 3.10803 37.3239 0 29.5 0C21.6761 0 14.1727 3.10803 8.64035 8.64035C3.10803 14.1727 0 21.6761 0 29.5C0 37.3239 3.10803 44.8273 8.64035 50.3596C14.1727 55.892 21.6761 59 29.5 59ZM24.8906 38.7188H27.6562V31.3438H24.8906C23.358 31.3438 22.125 30.1107 22.125 28.5781C22.125 27.0455 23.358 25.8125 24.8906 25.8125H30.4219C31.9545 25.8125 33.1875 27.0455 33.1875 28.5781V38.7188H34.1094C35.642 38.7188 36.875 39.9518 36.875 41.4844C36.875 43.017 35.642 44.25 34.1094 44.25H24.8906C23.358 44.25 22.125 43.017 22.125 41.4844C22.125 39.9518 23.358 38.7188 24.8906 38.7188ZM29.5 14.75C30.478 14.75 31.4159 15.1385 32.1075 15.83C32.799 16.5216 33.1875 17.4595 33.1875 18.4375C33.1875 19.4155 32.799 20.3534 32.1075 21.045C31.4159 21.7365 30.478 22.125 29.5 22.125C28.522 22.125 27.5841 21.7365 26.8925 21.045C26.201 20.3534 25.8125 19.4155 25.8125 18.4375C25.8125 17.4595 26.201 16.5216 26.8925 15.83C27.5841 15.1385 28.522 14.75 29.5 14.75Z"
                  fill="#3B3B3B"
                />
              </DeploySvg>
              <StartOrStopBtn>
                <BtnSvg
                  width="18"
                  height="27"
                  viewBox="0 0 25 34"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 4.25C1.67969 4.25 0 5.67773 0 7.4375V26.5625C0 28.3223 1.67969 29.75 3.75 29.75H6.25C8.32031 29.75 10 28.3223 10 26.5625V7.4375C10 5.67773 8.32031 4.25 6.25 4.25H3.75ZM18.75 4.25C16.6797 4.25 15 5.67773 15 7.4375V26.5625C15 28.3223 16.6797 29.75 18.75 29.75H21.25C23.3203 29.75 25 28.3223 25 26.5625V7.4375C25 5.67773 23.3203 4.25 21.25 4.25H18.75Z"
                    fill="white"
                  />
                </BtnSvg>
                <BtnTxt>실행</BtnTxt>
              </StartOrStopBtn>
              <StartOrStopBtn>
                <BtnSvg
                  width="25"
                  height="29"
                  viewBox="0 0 25 29"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.54464 1.00254C7.84598 0.385156 8.4654 0 9.14062 0H15.8594C16.5346 0 17.154 0.385156 17.4554 1.00254L17.8571 1.8125H23.2143C24.202 1.8125 25 2.62246 25 3.625C25 4.62754 24.202 5.4375 23.2143 5.4375H1.78571C0.797991 5.4375 0 4.62754 0 3.625C0 2.62246 0.797991 1.8125 1.78571 1.8125H7.14286L7.54464 1.00254ZM1.78571 7.25H23.2143V25.375C23.2143 27.3744 21.6127 29 19.6429 29H5.35714C3.38728 29 1.78571 27.3744 1.78571 25.375V7.25ZM7.14286 10.875C6.65179 10.875 6.25 11.2828 6.25 11.7812V24.4688C6.25 24.9672 6.65179 25.375 7.14286 25.375C7.63393 25.375 8.03571 24.9672 8.03571 24.4688V11.7812C8.03571 11.2828 7.63393 10.875 7.14286 10.875ZM12.5 10.875C12.0089 10.875 11.6071 11.2828 11.6071 11.7812V24.4688C11.6071 24.9672 12.0089 25.375 12.5 25.375C12.9911 25.375 13.3929 24.9672 13.3929 24.4688V11.7812C13.3929 11.2828 12.9911 10.875 12.5 10.875ZM17.8571 10.875C17.3661 10.875 16.9643 11.2828 16.9643 11.7812V24.4688C16.9643 24.9672 17.3661 25.375 17.8571 25.375C18.3482 25.375 18.75 24.9672 18.75 24.4688V11.7812C18.75 11.2828 18.3482 10.875 17.8571 10.875Z"
                    fill="white"
                  />
                </BtnSvg>
                <BtnTxt>삭제</BtnTxt>
              </StartOrStopBtn>
            </DeployInfoBtnWrapper>
            <DetailInfoWrapper>
              <DetailInfoLeft>
                <DetailInfoTxt>Framework</DetailInfoTxt>
                <DetailInfoTxt>Language</DetailInfoTxt>
                <DetailInfoTxt>IP</DetailInfoTxt>
                <DetailInfoTxt>ssh key</DetailInfoTxt>
                <DetailInfoTxt>Instance</DetailInfoTxt>
                <DetailInfoTxt>Spring Boot 버전</DetailInfoTxt>
                <DetailInfoTxt>Java 버전</DetailInfoTxt>
                <DetailInfoTxt>생성 날짜</DetailInfoTxt>
                <DetailInfoTxt>Github</DetailInfoTxt>
                <DetailInfoTxt>보안 그룹</DetailInfoTxt>
                <DetailInfoTxt>소유자</DetailInfoTxt>
                <DetailInfoTxt>설명</DetailInfoTxt>
              </DetailInfoLeft>
              <DetailInfoRight>
                <DetailInfoTxt>SpringBoot</DetailInfoTxt>
                <DetailInfoTxt>실행중</DetailInfoTxt>
                <DetailInfoTxt>**********</DetailInfoTxt>
                <DetailInfoTxt>다운로드</DetailInfoTxt>
                <DetailInfoTxt>t2-micro</DetailInfoTxt>
                <DetailInfoTxt>3.2.3</DetailInfoTxt>
                <DetailInfoTxt>17</DetailInfoTxt>
                <DetailInfoTxt>2024.06.18</DetailInfoTxt>
                <DetailInfoTxt>https://github.com/k-oyun</DetailInfoTxt>
                <DetailInfoTxt>링크</DetailInfoTxt>
                <DetailInfoTxt>DDonghyeo</DetailInfoTxt>
                <DetailInfoTxt>
                  앱 자동화 배포를 도와주는 spring Boot 애플리케이션
                </DetailInfoTxt>
              </DetailInfoRight>
            </DetailInfoWrapper>
          </DeployInfoWrapper>
        </DeployInfoWrappers>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Main;
