import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { userGet } from "../api";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 2.5rem;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  flex-direction: row;
  background-color: rgb(59, 59, 59);
`;

// const OpenSidebar = styled(motion.svg)`
//   width: 2.5rem;
//   height: 1.5rem;
//   fill: #11e5b3;
//   padding: 10px;
//   cursor: pointer;
// `;

const Col = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const LogInBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-right: 0.5rem;
  justify-content: flex-end;
  cursor: pointer;
`;

const LogIn = styled.span`
  color: white;
  margin-right: 0.2rem;
`;

const UserLogoSvg = styled(motion.svg)`
  width: 2.5rem;
  height: 1.5rem;
`;

const UserMyPageLogoSvg = styled(motion.svg)`
  width: 2.5rem;
  height: 1.5rem;
  padding-right: 0.6rem;
`;
const LogoBtn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border: 0;
  margin-left: 3rem;
  background-color: transparent;
`;

const LogoTxt = styled.span`
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const UserMyPageOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 8.8vw;
  height: 13%;
  margin-top: 17vh;
  margin-left: 90%;
  background-color: rgb(59, 59, 59);

  border: 1px solid white;
  border-radius: 5%;
`;

const UserMyPageOption = styled.div`
  display: flex;
  width: 55%;
  height: 25%;
  margin-top: 0.4vw;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* background-color: red; */
`;

const UserMyPageOptionTxt = styled.span`
  color: white;
  font-weight: 800;
`;

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isUserOptionClicked, setIsUserOptionClicked] =
    useState<boolean>(false);

  const onClickUserLogo = () => {
    setIsUserOptionClicked((prev) => !prev);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    (async () => {
      // console.log(accessToken);

      if (accessToken) {
        try {
          const res = await userGet(accessToken);
          setUserName(res?.data.result.name);
        } catch (error) {
          console.error("사용자 조회 실패", error);
        }
      }
    })();
  }, []);

  return (
    <>
      <Nav>
        <Col>
          <LogoBtn>
            <LogoTxt onClick={() => navigate("/")}>Deploy Surfing</LogoTxt>
          </LogoBtn>
        </Col>
        {isLogin ? (
          <LogInBtn onClick={onClickUserLogo}>
            <UserLogoSvg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                d="M38.1094 37.4625C36.3187 33.0844 32.0156 30 27 30H21C15.9844 30 11.6812 33.0844 9.89062 37.4625C6.55313 33.9562 4.5 29.2219 4.5 24C4.5 13.2281 13.2281 4.5 24 4.5C34.7719 4.5 43.5 13.2281 43.5 24C43.5 29.2219 41.4469 33.9562 38.1094 37.4625ZM34.35 40.5281C31.35 42.4125 27.8062 43.5 24 43.5C20.1938 43.5 16.65 42.4125 13.6406 40.5281C14.325 37.0875 17.3625 34.5 21 34.5H27C30.6375 34.5 33.675 37.0875 34.3594 40.5281H34.35ZM24 48C30.3652 48 36.4697 45.4714 40.9706 40.9706C45.4714 36.4697 48 30.3652 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0C17.6348 0 11.5303 2.52856 7.02944 7.02944C2.52856 11.5303 0 17.6348 0 24C0 30.3652 2.52856 36.4697 7.02944 40.9706C11.5303 45.4714 17.6348 48 24 48ZM24 22.5C23.0054 22.5 22.0516 22.1049 21.3484 21.4016C20.6451 20.6984 20.25 19.7446 20.25 18.75C20.25 17.7554 20.6451 16.8016 21.3484 16.0984C22.0516 15.3951 23.0054 15 24 15C24.9946 15 25.9484 15.3951 26.6516 16.0984C27.3549 16.8016 27.75 17.7554 27.75 18.75C27.75 19.7446 27.3549 20.6984 26.6516 21.4016C25.9484 22.1049 24.9946 22.5 24 22.5ZM15.75 18.75C15.75 20.938 16.6192 23.0365 18.1664 24.5836C19.7135 26.1308 21.812 27 24 27C26.188 27 28.2865 26.1308 29.8336 24.5836C31.3808 23.0365 32.25 20.938 32.25 18.75C32.25 16.562 31.3808 14.4635 29.8336 12.9164C28.2865 11.3692 26.188 10.5 24 10.5C21.812 10.5 19.7135 11.3692 18.1664 12.9164C16.6192 14.4635 15.75 16.562 15.75 18.75Z"
                fill="white"
              />
            </UserLogoSvg>
          </LogInBtn>
        ) : (
          <LogInBtn onClick={() => navigate("/login")}>
            <LogIn>Log in</LogIn>
          </LogInBtn>
        )}
        {isUserOptionClicked ? (
          <UserMyPageOptions>
            <UserMyPageOption>
              <UserMyPageLogoSvg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
              >
                <path
                  d="M19.5 21.9375C22.4091 21.9375 25.199 20.7819 27.2561 18.7248C29.3131 16.6678 30.4688 13.8778 30.4688 10.9688C30.4688 8.05966 29.3131 5.26971 27.2561 3.21267C25.199 1.15563 22.4091 0 19.5 0C16.5909 0 13.801 1.15563 11.7439 3.21267C9.68688 5.26971 8.53125 8.05966 8.53125 10.9688C8.53125 13.8778 9.68688 16.6678 11.7439 18.7248C13.801 20.7819 16.5909 21.9375 19.5 21.9375ZM12.2865 24.375C5.49961 24.375 0 29.8746 0 36.6615C0 37.9564 1.05117 39 2.33848 39H36.6615C37.9564 39 39 37.9488 39 36.6615C39 29.8746 33.5004 24.375 26.7135 24.375H12.2865Z"
                  fill="white"
                />
              </UserMyPageLogoSvg>
              <UserMyPageOptionTxt>{userName}</UserMyPageOptionTxt>
            </UserMyPageOption>
            <UserMyPageOption
              onClick={() => {
                navigate("/mypage");
              }}
            >
              <UserMyPageOptionTxt>마이페이지</UserMyPageOptionTxt>
            </UserMyPageOption>
            <UserMyPageOption onClick={onClickLogout}>
              <UserMyPageOptionTxt>로그아웃</UserMyPageOptionTxt>
            </UserMyPageOption>
          </UserMyPageOptions>
        ) : null}
      </Nav>

      {/* {isOpen && (
        
      )} */}
    </>
  );
};

export default Header;
