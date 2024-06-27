import React, {useEffect, useRef, useState} from "react";
import {styled} from "styled-components";
import {motion} from "framer-motion";
import {Link, useNavigate} from "react-router-dom";
import {theme} from "../theme";
import DefloyLogoImage from "../assets/images/logo.png";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  flex-direction: row;
`;

const OpenSidebar = styled(motion.svg)`
  width: 38px;
  height: 23px;
  //fill은 rgb코드로
  /* fill: rgb(135, 200, 247); */
  fill: rgba(0, 0, 0, 0.3);
  padding: 10px;
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
  margin-right: 10px;
  justify-content: flex-end;
  cursor: pointer;
`;

const LogIn = styled.text``;

const Sidebar = styled.div`
  position: fixed;
  background-color: white;
  width: 300px;
  height: 100%;
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
  border-color: rgba(0, 0, 0, 0.3);
  background-color: transparent;
  cursor: pointer;
`;

const NewAppBtnText = styled.text`
  /* color: ${(props) => props.theme.mainColor}; */
  fill: rgba(0, 0, 0, 0.3);
  margin-right: 20px;
  margin-top: 1.5px;
`;

const NewAppSvg = styled(motion.svg)`
  width: 38px;
  height: 23px;
  fill: rgba(0, 0, 0, 0.3);
  padding: 10px;
`;

const LogoDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-right: 140px;
`;

const LogoBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 140px;
  height: 45px;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [apps, setApps] = useState([]);

  const navigate = useNavigate();

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

          <MyAppBtn onClick={() => navigate("/myApp")}>
            <MyApp>내 앱</MyApp>
          </MyAppBtn>

          <BaepoBtn onClick={() => navigate("/new")}>
            <Baepo>새로운 배포</Baepo>
          </BaepoBtn>

          <LogoDiv>
            <LogoBtn onClick={() => navigate("/")}>
              <LogoImg src={DefloyLogoImage} />
            </LogoBtn>
          </LogoDiv>
        </Col>

        <LogInBtn onClick={() => navigate("/login")}>
          <LogIn>로그인</LogIn>
        </LogInBtn>
      </Nav>

      {isOpen && (
        <>
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
          </Sidebar>
        </>
      )}
    </>
  );
}
export default Header;
