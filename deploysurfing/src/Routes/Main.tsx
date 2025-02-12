import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AppBtn from "../Components/AppBtn";
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: black;
`;

const Sidebar = styled.div`
  background-color: rgb(59, 59, 59);
  width: 20rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
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

const DeployInfoWrappers = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
`;

const DeployInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #d5d5d5;
  border-radius: 10px;
  overflow: hidden;
`;

const DeployInfoTitle = styled.span`
  font-size: 160%;
  font-weight: 700;
  margin-bottom: 0.2rem;
  margin-left: 1.1%;
`;

const DeployInfoTopWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.4rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
`;

const DeploySvg = styled(motion.svg)`
  width: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  margin-left: 60%;
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
  /* background-color: red; */
`;

const AppInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 1rem;
  margin-bottom: 1rem;
  background-color: #d5d5d5;
  border-radius: 10px;
  overflow: hidden;
`;

const AppSvg = styled(motion.svg)`
  width: 3rem;
  height: 3rem;
`;

const AppExplainWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 5rem;
  position: absolute;
  margin-left: 2%;
  align-items: center;
`;

const StatusSvg = styled(motion.svg)`
  width: 1rem;
  height: 1rem;
  margin-left: 2%;
  margin-right: 0.3%;
`;

const StatusTxt = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  color: #6db33f;
  margin-left: 1%;
`;

const AppDetailSvg = styled(motion.svg)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.4%;
`;

const AppExplainTxtWrapper = styled.div`
  width: 40rem;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1.5%;
`;

const AppExplainTxt = styled.span``;

const HyperTxt = styled.span`
  color: blue;
  border-bottom: 1px solid;
  cursor: pointer;
`;

const ProgressInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 2.5rem;
  margin-top: 6rem;
  margin-left: 3rem;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  min-width: max-content;
  height: 100%;
  background-color: white;
  border: 1.5px solid;
  border-radius: 15px;
`;

const ProgressTxt = styled.span`
  font-weight: 800;
  white-space: nowrap;
  flex: 1;
  margin-right: 0.5rem;
`;

const ProgressStatusSvg = styled(motion.svg)`
  width: 0.9rem;
  height: 0.9rem;
  margin-top: 0.3%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  flex: none;
`;

const ProgressArrowSvg = styled(motion.svg)`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1%;
  margin-right: 1%;
`;

const LogWrapper = styled.div`
  width: 80%;
  height: 15rem;
  background-color: white;
  border-radius: 15px;
  margin-top: 2%;
  margin-left: 4%;
  font-weight: 700;
`;

const LogTxtWrapper = styled.div`
  width: 97%;
  height: 90%;
  margin-top: 1%;
  margin-left: 1%;
  overflow-y: auto;
  font-weight: 700;
`;
const ProblemWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 1rem;
  margin-left: 4%;
  margin-top: 0.4rem;
  font-weight: 800;
  color: #fc8787;
`;
const ProblemStatusSvg = styled(motion.svg)`
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.19%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  flex: none;
`;
const EyeSvg = styled(motion.svg)`
  cursor: pointer;
  position: absolute;
  margin-left: 0.5rem;
`;

function Main() {
  const navigate = useNavigate();
  const [isDetailInfo, setIsDetailInfo] = useState<boolean>(false);
  const [isGithubInfo, setIsGithubInfo] = useState<boolean>(false);
  const [isAwsInfo, setIsAwsInfo] = useState<boolean>(false);
  const [isDockerInfo, setIsDockerInfo] = useState<boolean>(false);
  const [isIpVisible, setIsIpVisible] = useState<boolean>(false);
  var myip = "12342.23123.4";

  const onClickInfoButton = () => {
    setIsDetailInfo((prev) => !prev);
  };

  const onClickGitHubInfoBtn = () => {
    setIsGithubInfo((prev) => !prev);
  };
  const onClickAwsInfoBtn = () => {
    setIsAwsInfo((prev) => !prev);
  };
  const onClickDockerInfoBtn = () => {
    setIsDockerInfo((prev) => !prev);
  };

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
          <AppBtn />
        </Sidebar>
        <DeployInfoWrappers>
          <DeployInfoWrapper
            style={{ height: isDetailInfo ? "32rem " : "10rem" }}
          >
            <DeployInfoTopWrapper>
              <DeployInfoTitle>DeploySurfing</DeployInfoTitle>
              <DeploySvg
                width="59"
                height="59"
                viewBox="0 0 59 59"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClickInfoButton}
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
            </DeployInfoTopWrapper>
            <DetailInfoWrapper>
              <DetailInfoLeft>
                <DetailInfoTxt>Framework</DetailInfoTxt>
                <DetailInfoTxt>Language</DetailInfoTxt>
                <DetailInfoTxt>IP </DetailInfoTxt>
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
                <DetailInfoTxt>배포중</DetailInfoTxt>
                <DetailInfoTxt>
                  {isIpVisible ? myip : "*".repeat(myip.length)}
                  {isIpVisible ? (
                    <EyeSvg
                      width="25"
                      height="23"
                      viewBox="0 0 25 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        setIsIpVisible((prev) => !prev);
                      }}
                    >
                      <path
                        d="M12.4999 1.4375C8.99295 1.4375 6.18479 3.09062 4.14052 5.0582C2.10927 7.00781 0.75076 9.34375 0.108398 10.9475C-0.0348307 11.3023 -0.0348307 11.6977 0.108398 12.0525C0.75076 13.6562 2.10927 15.9922 4.14052 17.9418C6.18479 19.9094 8.99295 21.5625 12.4999 21.5625C16.0068 21.5625 18.815 19.9094 20.8593 17.9418C22.8905 15.9877 24.249 13.6562 24.8957 12.0525C25.039 11.6977 25.039 11.3023 24.8957 10.9475C24.249 9.34375 22.8905 7.00781 20.8593 5.0582C18.815 3.09062 16.0068 1.4375 12.4999 1.4375ZM6.24989 11.5C6.24989 9.78438 6.90837 8.13903 8.08047 6.9259C9.25258 5.71278 10.8423 5.03125 12.4999 5.03125C14.1575 5.03125 15.7472 5.71278 16.9193 6.9259C18.0914 8.13903 18.7499 9.78438 18.7499 11.5C18.7499 13.2156 18.0914 14.861 16.9193 16.0741C15.7472 17.2872 14.1575 17.9688 12.4999 17.9688C10.8423 17.9688 9.25258 17.2872 8.08047 16.0741C6.90837 14.861 6.24989 13.2156 6.24989 11.5ZM12.4999 8.625C12.4999 10.2107 11.2542 11.5 9.72211 11.5C9.41395 11.5 9.11882 11.4461 8.84104 11.3518C8.60232 11.2709 8.32454 11.4236 8.33323 11.6842C8.34625 11.9941 8.38965 12.3041 8.47211 12.6141C9.06673 14.9141 11.3541 16.2797 13.5763 15.6643C15.7985 15.0488 17.1179 12.6814 16.5233 10.3814C16.0416 8.51719 14.4487 7.26387 12.6778 7.1875C12.4261 7.17852 12.2785 7.46152 12.3567 7.71309C12.4478 8.00059 12.4999 8.30605 12.4999 8.625Z"
                        fill="black"
                      />
                    </EyeSvg>
                  ) : (
                    <EyeSvg
                      width="26"
                      height="22"
                      viewBox="0 0 27 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        setIsIpVisible((prev) => !prev);
                      }}
                    >
                      <path
                        d="M1.74203 1.01223C1.30761 0.666945 0.676877 0.746949 0.334358 1.18487C-0.00816014 1.62278 0.0712039 2.2586 0.505618 2.60389L25.2338 22.1417C25.6682 22.487 26.2989 22.407 26.6414 21.9691C26.984 21.5312 26.9046 20.8953 26.4702 20.5501L22.0759 17.0804C23.73 15.3708 24.8495 13.455 25.4134 12.0949C25.5512 11.7622 25.5512 11.3917 25.4134 11.0591C24.791 9.55582 23.4836 7.36623 21.5287 5.53877C19.5655 3.69447 16.863 2.14491 13.4879 2.14491C10.6392 2.14491 8.26658 3.25234 6.41615 4.70504L1.74203 1.01223ZM9.44034 7.09253C10.5055 6.11143 11.9299 5.51351 13.4879 5.51351C16.8087 5.51351 19.5029 8.22943 19.5029 11.577C19.5029 12.6254 19.2397 13.6108 18.7761 14.4698L17.1637 13.1981C17.5146 12.3854 17.6065 11.4549 17.3642 10.5327C16.9006 8.78525 15.3676 7.61046 13.6633 7.53887C13.4211 7.53045 13.279 7.79573 13.3542 8.03153C13.442 8.30102 13.4921 8.58735 13.4921 8.88631C13.4921 9.3158 13.3918 9.72004 13.2164 10.0779L9.44451 7.09675L9.44034 7.09253ZM15.7017 17.2152C15.0167 17.4888 14.269 17.6404 13.4879 17.6404C10.1671 17.6404 7.47294 14.9245 7.47294 11.577C7.47294 11.2864 7.49383 11.0043 7.53142 10.7264L3.59246 7.59782C2.64009 8.84841 1.95923 10.0948 1.56241 11.0591C1.42457 11.3917 1.42457 11.7622 1.56241 12.0949C2.18479 13.5981 3.49221 15.7877 5.44707 17.6152C7.41029 19.4595 10.1128 21.009 13.4879 21.009C15.4845 21.009 17.2431 20.4658 18.7593 19.6405L15.7017 17.2152Z"
                        fill="black"
                      />
                    </EyeSvg>
                  )}
                </DetailInfoTxt>
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
          <AppInfoWrapper style={{ height: isGithubInfo ? "32rem" : "5rem" }}>
            <AppExplainWrapper>
              <AppSvg
                width="80"
                height="83"
                viewBox="0 0 80 83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.7581 64.4223C26.7581 64.7465 26.3871 65.0059 25.9194 65.0059C25.3871 65.0545 25.0161 64.7951 25.0161 64.4223C25.0161 64.098 25.3871 63.8387 25.8548 63.8387C26.3387 63.79 26.7581 64.0494 26.7581 64.4223ZM21.7419 63.6928C21.629 64.017 21.9516 64.3898 22.4355 64.4871C22.8548 64.6492 23.3387 64.4871 23.4355 64.1629C23.5323 63.8387 23.2258 63.4658 22.7419 63.3199C22.3226 63.2064 21.8548 63.3686 21.7419 63.6928ZM28.871 63.4172C28.4032 63.5307 28.0806 63.8387 28.129 64.2115C28.1774 64.5357 28.5968 64.7465 29.0806 64.633C29.5484 64.5195 29.871 64.2115 29.8226 63.8873C29.7742 63.5793 29.3387 63.3686 28.871 63.4172ZM39.4839 1.29688C17.1129 1.29688 0 18.367 0 40.8516C0 58.8295 11.2581 74.2137 27.3387 79.6281C29.4032 80.001 30.129 78.7203 30.129 77.6666C30.129 76.6615 30.0806 71.1174 30.0806 67.7131C30.0806 67.7131 18.7903 70.1447 16.4194 62.8822C16.4194 62.8822 14.5806 58.1648 11.9355 56.949C11.9355 56.949 8.24193 54.4039 12.1935 54.4525C12.1935 54.4525 16.2097 54.7768 18.4194 58.635C21.9516 64.8924 27.871 63.093 30.1774 62.023C30.5484 59.4293 31.5968 57.6299 32.7581 56.56C23.7419 55.5549 14.6452 54.2418 14.6452 38.6469C14.6452 34.1889 15.871 31.9518 18.4516 29.0986C18.0323 28.0449 16.6613 23.7004 18.871 18.0914C22.2419 17.0377 30 22.4684 30 22.4684C33.2258 21.5605 36.6935 21.0904 40.129 21.0904C43.5645 21.0904 47.0323 21.5605 50.2581 22.4684C50.2581 22.4684 58.0161 17.0215 61.3871 18.0914C63.5968 23.7166 62.2258 28.0449 61.8064 29.0986C64.3871 31.968 65.9677 34.2051 65.9677 38.6469C65.9677 54.2904 56.4677 55.5387 47.4516 56.56C48.9355 57.8406 50.1936 60.2723 50.1936 64.0818C50.1936 69.5449 50.1452 76.3049 50.1452 77.6342C50.1452 78.6879 50.8871 79.9686 52.9355 79.5957C69.0645 74.2137 80 58.8295 80 40.8516C80 18.367 61.8548 1.29688 39.4839 1.29688ZM15.6774 57.2084C15.4677 57.3705 15.5161 57.7434 15.7903 58.0514C16.0484 58.3107 16.4194 58.4242 16.629 58.2135C16.8387 58.0514 16.7903 57.6785 16.5161 57.3705C16.2581 57.1111 15.8871 56.9977 15.6774 57.2084ZM13.9355 55.8953C13.8226 56.1061 13.9839 56.3654 14.3065 56.5275C14.5645 56.6897 14.8871 56.641 15 56.4141C15.1129 56.2033 14.9516 55.9439 14.629 55.7818C14.3065 55.6846 14.0484 55.7332 13.9355 55.8953ZM19.1613 61.6664C18.9032 61.8771 19 62.3635 19.371 62.6715C19.7419 63.0443 20.2097 63.093 20.4194 62.8336C20.629 62.6229 20.5323 62.1365 20.2097 61.8285C19.8548 61.4557 19.371 61.407 19.1613 61.6664ZM17.3226 59.2834C17.0645 59.4455 17.0645 59.867 17.3226 60.2398C17.5806 60.6127 18.0161 60.7748 18.2258 60.6127C18.4839 60.402 18.4839 59.9805 18.2258 59.6076C18 59.2348 17.5806 59.0727 17.3226 59.2834Z"
                  fill="black"
                />
              </AppSvg>
              <StatusSvg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
              </StatusSvg>
              <StatusTxt>정상</StatusTxt>
              {isGithubInfo ? (
                <AppDetailSvg
                  width="30"
                  height="19"
                  viewBox="0 0 30 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClickGitHubInfoBtn}
                >
                  <path
                    d="M16.2802 17.9712C15.5722 18.6743 14.4224 18.6743 13.7144 17.9712L2.8394 7.17117C2.1314 6.46805 2.1314 5.32617 2.8394 4.62305C3.54741 3.91992 4.69722 3.91992 5.40522 4.62305L15.0001 14.1518L24.5951 4.62867C25.3031 3.92555 26.4529 3.92555 27.1609 4.62867C27.8689 5.3318 27.8689 6.47367 27.1609 7.1768L16.2859 17.9768L16.2802 17.9712Z"
                    fill="black"
                  />
                </AppDetailSvg>
              ) : (
                <AppDetailSvg
                  width="15"
                  height="27"
                  viewBox="0 0 15 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClickGitHubInfoBtn}
                  style={{
                    transform: `rotate(${isGithubInfo ? "45" : "0"}deg)`,
                  }}
                >
                  <path
                    d="M14.4712 12.22C15.1743 12.928 15.1743 14.0778 14.4712 14.7858L3.67117 25.6608C2.96805 26.3688 1.82617 26.3688 1.12305 25.6608C0.419922 24.9528 0.419922 23.803 1.12305 23.095L10.6518 13.5001L1.12867 3.90518C0.425547 3.19717 0.425547 2.04736 1.12867 1.33936C1.8318 0.631348 2.97367 0.631348 3.6768 1.33936L14.4768 12.2144L14.4712 12.22Z"
                    fill="black"
                  />
                </AppDetailSvg>
              )}
              <AppExplainTxtWrapper>
                {isGithubInfo ? (
                  <AppExplainTxt>
                    Github Action을 통해 프로젝트를 빌드하고 Docker 이미지를
                    생성합니다.
                    <br />
                    생성한 Docker 이미지를 Docker Hub에 Push합니다.
                    <br />
                    실제 스크립트는{" "}
                    <HyperTxt
                      onClick={() => window.open("https://www.naver.com")}
                    >
                      여기
                    </HyperTxt>
                    서 볼 수 있으며, 현재 Action 상황은
                    <HyperTxt
                      onClick={() => window.open("https://www.naver.com")}
                    >
                      여기
                    </HyperTxt>
                    서 볼 수 있습니다.
                  </AppExplainTxt>
                ) : null}
              </AppExplainTxtWrapper>
            </AppExplainWrapper>
            <ProgressInfoWrapper>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Set Up JDK</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Set YML</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Gradle Build</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Docker Image Build</ProgressTxt>
              </ProgressBar>
            </ProgressInfoWrapper>
            <ProgressInfoWrapper style={{ marginTop: "2%" }}>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "1rem" }}
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>DockerHub Login</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Docker Image Push</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Docker Image Push</ProgressTxt>
              </ProgressBar>
            </ProgressInfoWrapper>
            <LogWrapper>
              <LogTxtWrapper>
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
              </LogTxtWrapper>
            </LogWrapper>
            <ProblemWrapper>
              <ProblemStatusSvg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#fc8787" />
              </ProblemStatusSvg>
              도커 로그인에 실패한 것 같아요. 제공한 도커 토큰의 권한을 다시
              확인해 주세요.
            </ProblemWrapper>
          </AppInfoWrapper>
          <AppInfoWrapper style={{ height: isAwsInfo ? "32rem" : "5rem" }}>
            <AppExplainWrapper>
              <AppSvg
                width="92"
                height="74"
                viewBox="0 0 92 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9325 29.3398C25.8319 32.6207 27.4562 34.066 27.4994 34.991C27.4804 35.179 27.4171 35.3597 27.3146 35.5181C27.212 35.6765 27.0733 35.808 26.91 35.9015L25.07 37.2023C24.8326 37.3681 24.5537 37.4632 24.265 37.4769C24.2075 37.4769 23.0862 37.7371 21.3181 33.7769C20.2412 35.1309 18.8703 36.219 17.3106 36.9581C15.7508 37.6971 14.0435 38.0674 12.3194 38.0406C9.97624 38.1707 3.63687 36.7109 3.96749 29.9179C3.73749 24.3824 8.86937 20.9425 14.1594 21.2316C15.18 21.2316 17.2644 21.2894 20.9156 22.1421V19.8875C21.3037 16.0574 18.8025 13.0945 14.4756 13.5425C14.1306 13.5425 11.6869 13.4703 7.89187 15.0023C6.82811 15.4937 6.69874 15.407 6.33936 15.407C5.27561 15.407 5.70687 12.2996 5.92249 11.9093C6.66999 10.9843 11.0831 9.24996 15.3956 9.27886C18.2876 9.02288 21.1636 9.92101 23.4025 11.7793C24.3139 12.8031 25.0092 14.0021 25.4466 15.3038C25.8839 16.6056 26.0541 17.9829 25.9469 19.3527V29.3687L25.9325 29.3398ZM13.5125 34.0226C18.17 33.9503 20.1537 31.132 20.5994 29.6144C20.9587 28.1546 20.9012 27.2441 20.9012 25.6543C19.5069 25.3218 17.5087 24.9461 15.2087 24.9461C13.0237 24.7871 9.05624 25.7554 9.21437 29.6144C9.04187 32.0425 10.81 34.1527 13.5269 34.0226H13.5125ZM38.0794 37.3613C36.9437 37.4625 36.4262 36.6531 36.2537 35.8582L29.095 12.0539C28.9512 11.6492 28.865 11.23 28.8219 10.8109C28.8076 10.7235 28.8109 10.634 28.8315 10.5479C28.8521 10.4617 28.8896 10.3806 28.9418 10.3092C28.994 10.2379 29.0599 10.1777 29.1356 10.1323C29.2113 10.0869 29.2952 10.0572 29.3825 10.0449C29.4112 10.0449 29.0806 10.0449 32.5881 10.0449C33.8531 9.9148 34.2556 10.9121 34.3994 11.548L39.5312 31.898L44.3037 11.548C44.3756 11.0855 44.7206 9.94371 46.1437 10.0738H48.6162C48.9325 10.0449 50.2119 10.0015 50.4419 11.5769L55.2431 32.1871L60.5187 11.5769C60.5906 11.2589 60.9069 9.92925 62.3444 10.0738H65.1762C65.3056 10.0593 66.0675 9.95816 65.9381 11.3168C65.8806 11.5914 66.4269 9.77027 58.3481 35.8726C58.1756 36.6675 57.6581 37.4769 56.5225 37.3757H53.8344C52.2675 37.5492 52.0375 35.9738 52.0087 35.8148L47.2506 15.9996L42.5356 35.8003C42.5069 35.9593 42.2912 37.5203 40.71 37.3613H38.0794ZM77.395 38.1707C76.5469 38.1707 72.5219 38.1273 69.1437 36.3929C68.8086 36.2499 68.5231 36.0102 68.3235 35.704C68.1239 35.3979 68.0192 35.0391 68.0225 34.673V33.1121C68.0225 31.8836 68.9137 32.1148 69.2875 32.2593C70.725 32.8519 71.6594 33.2855 73.4275 33.6468C78.7031 34.7308 81.0175 33.3144 81.5781 32.9964C83.4756 31.8691 83.6194 29.282 82.34 27.9378C80.8306 26.666 80.1119 26.6226 74.7069 24.9027C74.0456 24.7148 68.425 22.9371 68.4106 17.3293C68.3244 13.2535 72.0187 9.2066 78.4012 9.23551C80.2269 9.23551 85.0712 9.82808 86.3937 11.4902C86.595 11.7937 86.6812 12.155 86.6669 12.5019V13.9617C86.6669 14.5976 86.4369 14.93 85.9625 14.93C84.8556 14.8 82.8862 13.3113 78.89 13.3691C77.8981 13.3113 73.1544 13.4992 73.37 16.9824C73.3125 19.7285 77.1937 20.7546 77.6394 20.8703C82.8862 22.4601 84.64 22.7203 86.71 25.1484C89.1681 28.3714 87.8456 32.1293 87.3425 33.1554C84.5969 38.5753 77.51 38.1273 77.3806 38.1273L77.395 38.1707ZM83.1737 53.332C73.1112 60.8043 58.4919 64.7933 46.0144 64.7933C29.1755 64.9036 12.905 58.6756 0.40249 47.3339C-0.531885 46.4812 0.28749 45.3105 1.43749 45.9609C15.3083 53.9371 31.0127 58.1274 46.9919 58.116C58.9251 58.0496 70.7278 55.6134 81.7219 50.9472C83.4181 50.2246 84.8556 52.0746 83.1737 53.3175V53.332ZM87.3712 48.5191C86.0775 46.857 78.8469 47.7386 75.6125 48.1289C74.635 48.2445 74.4769 47.3918 75.3537 46.7558C81.1181 42.68 90.5769 43.8507 91.655 45.2238C92.7475 46.5968 91.3531 56.1214 85.9625 60.6742C85.1287 61.3824 84.3381 61.0066 84.7119 60.0816C85.9194 57.0031 88.6506 50.1812 87.3569 48.5191H87.3712Z"
                  fill="black"
                />
              </AppSvg>
              <StatusSvg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
              </StatusSvg>
              <StatusTxt>정상</StatusTxt>
              {isAwsInfo ? (
                <AppDetailSvg
                  width="30"
                  height="19"
                  viewBox="0 0 30 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClickAwsInfoBtn}
                >
                  <path
                    d="M16.2802 17.9712C15.5722 18.6743 14.4224 18.6743 13.7144 17.9712L2.8394 7.17117C2.1314 6.46805 2.1314 5.32617 2.8394 4.62305C3.54741 3.91992 4.69722 3.91992 5.40522 4.62305L15.0001 14.1518L24.5951 4.62867C25.3031 3.92555 26.4529 3.92555 27.1609 4.62867C27.8689 5.3318 27.8689 6.47367 27.1609 7.1768L16.2859 17.9768L16.2802 17.9712Z"
                    fill="black"
                  />
                </AppDetailSvg>
              ) : (
                <AppDetailSvg
                  width="15"
                  height="27"
                  viewBox="0 0 15 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClickAwsInfoBtn}
                  style={{
                    transform: `rotate(${isAwsInfo ? "45" : "0"}deg)`,
                  }}
                >
                  <path
                    d="M14.4712 12.22C15.1743 12.928 15.1743 14.0778 14.4712 14.7858L3.67117 25.6608C2.96805 26.3688 1.82617 26.3688 1.12305 25.6608C0.419922 24.9528 0.419922 23.803 1.12305 23.095L10.6518 13.5001L1.12867 3.90518C0.425547 3.19717 0.425547 2.04736 1.12867 1.33936C1.8318 0.631348 2.97367 0.631348 3.6768 1.33936L14.4768 12.2144L14.4712 12.22Z"
                    fill="black"
                  />
                </AppDetailSvg>
              )}
              <AppExplainTxtWrapper>
                {isAwsInfo ? (
                  <AppExplainTxt>
                    Github Action을 통해 EC2에 접속합니다. <br />
                    EC2 내에서 Docker 이미지를 pull 하고 run 동작을 실행합니다.
                    <br />
                    실제 스크립트는{" "}
                    <HyperTxt
                      onClick={() => window.open("https://www.naver.com")}
                    >
                      여기
                    </HyperTxt>
                    서 볼 수 있으며, 현재 Action 상황은{" "}
                    <HyperTxt
                      onClick={() => window.open("https://www.naver.com")}
                    >
                      여기
                    </HyperTxt>
                    서 볼 수 있습니다.{" "}
                  </AppExplainTxt>
                ) : null}
              </AppExplainTxtWrapper>
            </AppExplainWrapper>
            <ProgressInfoWrapper>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>EC2 Connect</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Docker Image Pull</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Docker Run</ProgressTxt>
              </ProgressBar>
            </ProgressInfoWrapper>
            <LogWrapper>
              <LogTxtWrapper>
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
              </LogTxtWrapper>
            </LogWrapper>
            <ProblemWrapper>
              <ProblemStatusSvg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#fc8787" />
              </ProblemStatusSvg>
              도커 로그인에 실패한 것 같아요. 제공한 도커 토큰의 권한을 다시
              확인해 주세요.
            </ProblemWrapper>
          </AppInfoWrapper>
          <AppInfoWrapper style={{ height: isDockerInfo ? "32rem" : "5rem" }}>
            <AppExplainWrapper>
              <AppSvg
                width="104"
                height="83"
                viewBox="0 0 104 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.8588 38.3064H46.1175V28.6771H56.8588V38.3064ZM56.8588 5.1875H46.1175V15.0275H56.8588V5.1875ZM69.5663 28.6609H58.825V38.2902H69.5663V28.6609ZM44.1675 16.9729H33.4263V26.7156H44.1675V16.9729ZM56.8588 16.9729H46.1175V26.7156H56.8588V16.9729ZM101.839 33.1838C99.4988 31.6113 94.1038 31.0439 89.96 31.8221C89.4238 27.9314 87.2463 24.5434 83.2813 21.4957L81.0063 19.9881L79.495 22.2576C76.505 26.7643 75.6925 34.1889 78.8938 39.0846C77.48 39.8465 74.7013 40.884 71.0288 40.8191H0.390003C-1.02375 49.0543 1.3325 59.7535 7.54 67.0971C13.5688 74.2137 22.6038 77.8287 34.4175 77.8287C59.995 77.8287 78.9263 66.0758 87.7825 44.726C91.26 44.7908 98.7675 44.7422 102.619 37.3986C102.863 36.9934 103.691 35.2588 104 34.6266L101.839 33.1838ZM18.785 28.6609H8.06V38.2902H18.8013V28.6609H18.785ZM31.4763 28.6609H20.735V38.2902H31.4763V28.6609ZM44.1675 28.6609H33.4263V38.2902H44.1675V28.6609ZM31.4763 16.9729H20.735V26.7156H31.4763V16.9729Z"
                  fill="black"
                />
              </AppSvg>
              <StatusSvg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
              </StatusSvg>
              <StatusTxt>정상</StatusTxt>
              {isDockerInfo ? (
                <AppDetailSvg
                  width="30"
                  height="19"
                  viewBox="0 0 30 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClickDockerInfoBtn}
                >
                  <path
                    d="M16.2802 17.9712C15.5722 18.6743 14.4224 18.6743 13.7144 17.9712L2.8394 7.17117C2.1314 6.46805 2.1314 5.32617 2.8394 4.62305C3.54741 3.91992 4.69722 3.91992 5.40522 4.62305L15.0001 14.1518L24.5951 4.62867C25.3031 3.92555 26.4529 3.92555 27.1609 4.62867C27.8689 5.3318 27.8689 6.47367 27.1609 7.1768L16.2859 17.9768L16.2802 17.9712Z"
                    fill="black"
                  />
                </AppDetailSvg>
              ) : (
                <AppDetailSvg
                  width="15"
                  height="27"
                  viewBox="0 0 15 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClickDockerInfoBtn}
                  style={{
                    transform: `rotate(${isDockerInfo ? "45" : "0"}deg)`,
                  }}
                >
                  <path
                    d="M14.4712 12.22C15.1743 12.928 15.1743 14.0778 14.4712 14.7858L3.67117 25.6608C2.96805 26.3688 1.82617 26.3688 1.12305 25.6608C0.419922 24.9528 0.419922 23.803 1.12305 23.095L10.6518 13.5001L1.12867 3.90518C0.425547 3.19717 0.425547 2.04736 1.12867 1.33936C1.8318 0.631348 2.97367 0.631348 3.6768 1.33936L14.4768 12.2144L14.4712 12.22Z"
                    fill="black"
                  />
                </AppDetailSvg>
              )}
              <AppExplainTxtWrapper>
                {isDockerInfo ? (
                  <AppExplainTxt>
                    EC2 내 Docker 컨테이너 내에서 실행되는 스크립트 입니다.{" "}
                    <br />
                    프로젝트 내에 파일명 ‘Dockerfile’로 존재합니다.
                    <br />
                    실제 파일은{" "}
                    <HyperTxt
                      onClick={() => window.open("https://www.naver.com")}
                    >
                      여기
                    </HyperTxt>
                    서 볼 수 있습니다.
                  </AppExplainTxt>
                ) : null}
              </AppExplainTxtWrapper>
            </AppExplainWrapper>
            <ProgressInfoWrapper>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Copy app.jar</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>Copy static</ProgressTxt>
              </ProgressBar>
              <ProgressArrowSvg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.7071 8.70711C36.0976 8.31658 36.0976 7.68342 35.7071 7.29289L29.3431 0.928932C28.9526 0.538408 28.3195 0.538408 27.9289 0.928932C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM0 9H35V7H0V9Z"
                  fill="black"
                />
              </ProgressArrowSvg>
              <ProgressBar>
                <ProgressStatusSvg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#6DB33F" />
                </ProgressStatusSvg>
                <ProgressTxt>java Run</ProgressTxt>
              </ProgressBar>
            </ProgressInfoWrapper>
            <LogWrapper>
              <LogTxtWrapper>
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
                ddddddddddddddddddddddddddddddddddddddddd
                <br />
              </LogTxtWrapper>
            </LogWrapper>
            <ProblemWrapper>
              <ProblemStatusSvg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.5" cy="11.5" r="11.5" fill="#fc8787" />
              </ProblemStatusSvg>
              도커 로그인에 실패한 것 같아요. 제공한 도커 토큰의 권한을 다시
              확인해 주세요.
            </ProblemWrapper>
          </AppInfoWrapper>
        </DeployInfoWrappers>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Main;
