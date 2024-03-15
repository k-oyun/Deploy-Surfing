import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  flex-direction: row;
`;

const TabBar = styled(motion.svg)`
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

function Header() {
  return (
    <>
      <Nav>
        <Col>
          <TabBar
            xmlns="http://www.w3.org/2000/svg"
            width="448"
            height="512"
            viewBox="0 0 448, 512 "
          >
            <motion.path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </TabBar>
          <MyAppBtn>
            <MyApp>내 앱</MyApp>
          </MyAppBtn>
          <BaepoBtn>
            <Baepo>새로운 배포</Baepo>
          </BaepoBtn>
        </Col>

        <LogInBtn>
          <LogIn>로그인</LogIn>
        </LogInBtn>
      </Nav>
    </>
  );
}
export default Header;
