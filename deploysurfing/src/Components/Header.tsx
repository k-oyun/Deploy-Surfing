import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

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
`;

const MyApp = styled.text``;

const BaepoBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-left: 15px;
`;

const Baepo = styled.text``;

const LogInBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-right: 50px;
`;

const LogIn = styled.text``;

const Sidebar = styled.div`
  background-color: "tomato";
  flex: 1;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <Col>
          <OpenSidebar
            xmlns="http://www.w3.org/2000/svg"
            width="448"
            height="512"
            viewBox="0 0 448, 512 "
            onClick={() => setIsOpen(true)}
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
    </>
  );
}
export default Header;
