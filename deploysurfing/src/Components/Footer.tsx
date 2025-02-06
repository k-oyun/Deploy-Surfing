import React from "react";
import styled from "styled-components";

const Footers = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  background-color: #3b3b3b;
`;

const FooterLogoDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
`;
const FooterLogoTxt = styled.span`
  color: white;
  font-size: 0.9rem;
  margin-left: 0.9rem;
`;
const FooterLogoImg = styled.img`
  width: 110px;
  height: 35px;
  margin-left: 20px;
  margin-top: 5px;
`;

const FooterTextDiv = styled.div`
  flex: 1;
  margin-top: 0.9rem;
  text-align: center;
`;

const FooterText = styled.span`
  color: #8a8585;
  font-size: 0.7rem;
  white-space: nowrap;
`;

const FooterBtnDiv = styled.div`
  flex: 1;
  margin-top: 0.4rem;
  margin-right: 20px;
  justify-content: flex-end;
  display: flex;
  flex: 1;
`;

const FooterBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <Footers>
      <FooterLogoDiv>
        <FooterLogoTxt>Deploy Surfing</FooterLogoTxt>
        {/* <FooterLogoImg src={DefloyLogo} /> */}
      </FooterLogoDiv>
      <FooterTextDiv>
        <FooterText>
          Copyright 2024. DeploySurfing All Rights Reserved
        </FooterText>
      </FooterTextDiv>
      <FooterBtnDiv>
        <FooterBtn>Contact</FooterBtn>
        <FooterBtn>About</FooterBtn>
      </FooterBtnDiv>
    </Footers>
  );
};

export default Footer;
