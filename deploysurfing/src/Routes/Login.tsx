import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header.tsx";
import Footer from "../Components/Footer.tsx";
import { motion } from "framer-motion";
import KakaoLoginNarrowImg from "../assets/images/kakao_login_medium_narrow.png";
import KakaoLoginWideImg from "../assets/images/kakao_login_medium_wide.png";

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
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const LogoTxt = styled.span`
  font-weight: 800;
  color: white;
  font-size: 3rem;
  padding-top: 1rem;
`;

const GitHubDocker = styled.div`
  width: 87%;
  height: 11rem;
  border-radius: 15px;
  margin-top: 1rem;
  background-color: rgb(59, 59, 59);
  /* background-color: red; */
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
  width: 100%;
  height: 100%;
  /* margin-left: 1rem; */
  /* margin-top: 0.3rem; */
  padding-left: 0.5rem;
  border: 0px;
  border-radius: 10px;
`;

const InputWrapper = styled.div`
  width: 90%;
  height: 2rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
  margin-top: 0.6rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const EyeSvg = styled(motion.svg)`
  cursor: pointer;
  position: absolute;
  margin-right: 0.5rem;
`;

const KakaoLogin = styled.div`
  width: 15rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  background-color: #fffe30;
  margin-top: 1rem;
  color: #333333;
  font-weight: 600;
`;

const Kakao = styled.img`
  margin-top: 1rem;
`;

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordCanSee] = useState("password");

  const onchangeId = (text) => {
    setId(text.target.value);
  };
  const onchangePassword = (text) => {
    setPassword(text.target.value);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <UserInfoWrapper>
          <LogoTxt>Deploy Surfing</LogoTxt>
          <UserInfo>
            <GitHubDocker>
              <ExplainTxt>Id</ExplainTxt>
              <InputWrapper>
                <ImpInput onChange={onchangeId}></ImpInput>
              </InputWrapper>
              <ExplainTxt>Password</ExplainTxt>
              <InputWrapper>
                <ImpInput
                  type={isPasswordVisible}
                  onChange={onchangePassword}
                ></ImpInput>

                <EyeSvg
                  width="26"
                  height="22"
                  viewBox="0 0 27 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setIsPasswordCanSee((prev) =>
                      prev === "password" ? "text" : "password"
                    );
                  }}
                >
                  <path
                    d="M1.74203 1.01223C1.30761 0.666945 0.676877 0.746949 0.334358 1.18487C-0.00816014 1.62278 0.0712039 2.2586 0.505618 2.60389L25.2338 22.1417C25.6682 22.487 26.2989 22.407 26.6414 21.9691C26.984 21.5312 26.9046 20.8953 26.4702 20.5501L22.0759 17.0804C23.73 15.3708 24.8495 13.455 25.4134 12.0949C25.5512 11.7622 25.5512 11.3917 25.4134 11.0591C24.791 9.55582 23.4836 7.36623 21.5287 5.53877C19.5655 3.69447 16.863 2.14491 13.4879 2.14491C10.6392 2.14491 8.26658 3.25234 6.41615 4.70504L1.74203 1.01223ZM9.44034 7.09253C10.5055 6.11143 11.9299 5.51351 13.4879 5.51351C16.8087 5.51351 19.5029 8.22943 19.5029 11.577C19.5029 12.6254 19.2397 13.6108 18.7761 14.4698L17.1637 13.1981C17.5146 12.3854 17.6065 11.4549 17.3642 10.5327C16.9006 8.78525 15.3676 7.61046 13.6633 7.53887C13.4211 7.53045 13.279 7.79573 13.3542 8.03153C13.442 8.30102 13.4921 8.58735 13.4921 8.88631C13.4921 9.3158 13.3918 9.72004 13.2164 10.0779L9.44451 7.09675L9.44034 7.09253ZM15.7017 17.2152C15.0167 17.4888 14.269 17.6404 13.4879 17.6404C10.1671 17.6404 7.47294 14.9245 7.47294 11.577C7.47294 11.2864 7.49383 11.0043 7.53142 10.7264L3.59246 7.59782C2.64009 8.84841 1.95923 10.0948 1.56241 11.0591C1.42457 11.3917 1.42457 11.7622 1.56241 12.0949C2.18479 13.5981 3.49221 15.7877 5.44707 17.6152C7.41029 19.4595 10.1128 21.009 13.4879 21.009C15.4845 21.009 17.2431 20.4658 18.7593 19.6405L15.7017 17.2152Z"
                    fill="black"
                  />
                </EyeSvg>
              </InputWrapper>
            </GitHubDocker>
            {/* 뭐로할까나~ */}
            <Kakao src={KakaoLoginNarrowImg}></Kakao>
            <Kakao src={KakaoLoginWideImg}></Kakao>
          </UserInfo>
        </UserInfoWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Login;
