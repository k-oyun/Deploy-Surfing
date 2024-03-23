import React, {useEffect, useRef, useState} from "react";
import {styled} from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {theme} from "../theme";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  flex-direction: row;
`;

const OpenSidebar = styled(motion.svg)`
  width: 38px;
  height: 23px;
  //fill은 rgb코드로
  fill: rgb(135, 200, 247);
  padding: 10px;
`;

const Col = styled.div`
  display: flex;
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
  cursor: pointer;
`;

const Baepo = styled.text``;

const LogInBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-right: 50px;
  cursor: pointer;
`;

const LogIn = styled.text``;

const Sidebar = styled.div`
  background-color: white;
  width: 300px;
  height: 600px;
  border-right: 1.5px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewAppBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  width: 240px;
  height: 50px;
  border: 1px solid;
  border-radius: 15px;
  border-color: #87c8f7;
  background-color: transparent;
  cursor: pointer;
`;

const NewAppBtnText = styled.text`
  color: ${(props) => props.theme.mainColor};
  /* color: #87c8f7; */
  margin-right: 20px;
  margin-top: 1.5px;
`;

const NewAppSvg = styled(motion.svg)`
  width: 38px;
  height: 23px;
  //fill은 rgb코드로
  fill: rgb(135, 200, 247);
  padding: 10px;
`;

const SettingBtn = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 234px;
  margin-top: 580px;
  display: flex;
  flex-direction: row;
  position: fixed;
`;

const SettingText = styled.text`
  color: black;
  margin-left: 6px;
  font-weight: 700;
`;

const SettingSvg = styled.svg`
  fill: rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: center;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [apps, setApps] = useState([]);
  const newAppOnClick = () => {};

  const barOnClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
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

          <Link to="/myapp">
            <MyAppBtn>
              <MyApp>내 앱</MyApp>
            </MyAppBtn>
          </Link>
          <Link to="/new">
            <BaepoBtn>
              <Baepo>새로운 배포</Baepo>
            </BaepoBtn>
          </Link>
        </Col>
        <Link to="/login">
          <LogInBtn>
            <LogIn>로그인</LogIn>
          </LogInBtn>
        </Link>
      </Nav>
      {isOpen && (
        <>
          <Sidebar>
            <NewAppBtn onClick={newAppOnClick}>
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
            <SettingBtn>
              <SettingSvg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 512, 512 "
              >
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
              </SettingSvg>
              <SettingText>설정</SettingText>
            </SettingBtn>
          </Sidebar>
        </>
      )}
    </>
  );
}
export default Header;
