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

const MyApp = styled.text``;

const BaepoBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-left: 15px;
  margin-bottom: 1px;
  cursor: pointer;
`;

const Baepo = styled.text``;

const LogInBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-right: 0.5rem;
  justify-content: flex-end;
  cursor: pointer;
`;

const LogIn = styled.text`
  color: white;
  margin-right: 0.2rem;
`;

const Sidebar = styled.div`
  position: absolute;
  background-color: rgb(59, 59, 59);
  width: 15%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const NewAppBtnText = styled.text`
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

const LogoDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const LogoBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const LogoTxt = styled.text`
  color: white;
`;

const LogoImg = styled.img`
  width: 140px;
  height: 45px;
`;

const UserAppBtn = styled.button`
  display: flex;
  align-items: center;
  margin-top: 28px;
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

const AppBtnText = styled.text``;

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

function Header() {
  const [isOpen, setIsOpen] = useState(false);
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

          {/* <MyAppBtn onClick={() => navigate("/myApp")}>
            <MyApp>내 앱</MyApp>
          </MyAppBtn>

          <BaepoBtn onClick={() => navigate("/new")}>
            <Baepo>새로운 배포</Baepo>
          </BaepoBtn> */}

          <LogoDiv>
            <LogoTxt>Deploy Surfing</LogoTxt>
          </LogoDiv>
        </Col>

        <LogInBtn onClick={() => navigate("/login")}>
          <LogIn>Log in</LogIn>
        </LogInBtn>
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
}

export default Header;
