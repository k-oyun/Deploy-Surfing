import React from "react";
import Header from "../Components/Header.tsx";
import styled from "styled-components";
import Footer from "../Components/Footer.tsx";
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100vh;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 70%;
  background-color: #181818;
  border-radius: 20px;
`;
const MyPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <UserInfoWrapper></UserInfoWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MyPage;
