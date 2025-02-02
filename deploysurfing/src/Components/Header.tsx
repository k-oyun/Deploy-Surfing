import React, { useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DefloyLogoImage from "../assets/images/logo.png";
import PowerButton from "../assets/images/powerbutton.png";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  flex-direction: row;
  background-color: rgb(59, 59, 59);
`;

const OpenSidebar = styled(motion.svg)`
  width: 2.5rem;
  height: 1.5rem;
  fill: #11e5b3;
  padding: 10px;
  cursor: pointer;
`;

const Col = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const MyAppBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-left: 15px;
  cursor: pointer;
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

const Sidebar = styled.div`
  position: absolute;
  background-color: rgb(59, 59, 59);
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5rem;
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

const UserLogoSvg = styled(motion.svg)`
  width: 2.5rem;
  height: 1.5rem;
`;

const LogoBtn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

const LogoTxt = styled.span`
  color: white;
  font-size: 1rem;
`;

const LogoImg = styled.img`
  width: 140px;
  height: 45px;
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
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

  const barOnClick = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <>
      <Nav>
        <Col>
          <OpenSidebar
            xmlns="http://www.w3.org/2000/svg"
            width="448"
            height="512"
            viewBox="0 0 448, 512 "
            onClick={barOnClick}
          >
            <motion.path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </OpenSidebar>

          <LogoBtn>
            <LogoTxt onClick={() => navigate("/main")}>Deploy Surfing</LogoTxt>
          </LogoBtn>
        </Col>
        {isLogin ? (
          <LogInBtn onClick={() => navigate("/myPage")}>
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
      </Nav>

      {isOpen && (
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
      )}
    </>
  );
};

export default Header;
