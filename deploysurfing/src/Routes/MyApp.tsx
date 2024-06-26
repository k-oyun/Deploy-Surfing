import {symlinkSync} from "fs";
import React, {useEffect} from "react";

import {styled} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const AvoidSidebar = styled.div`
  display: flex;
  width: 1000px;
  height: 100%;
  flex-direction: column;
  background-color: transparent;
  margin-left: 320px;
`;

const AppNameText = styled.text`
  font-weight: 750;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 10px;
`;
const RowTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const BasicTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 38px;
  margin-top: 27px;
  background-color: transparent;
`;

const Title = styled.text`
  font-weight: 700;
  font-size: 25px;
  margin: 3px 0px;
`;
const AppInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  margin-left: 60px;
`;

const Framework = styled.text`
  font-size: 25px;
  margin: 3px 0px;
`;
const Status = styled.text`
  font-size: 25px;
  margin: 3px 0px;
`;
const Ip = styled.text`
  font-size: 25px;
  margin: 3px 0px;
`;
const Domain = styled.text`
  font-size: 25px;
  margin: 3px 0px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 500px;
  margin-top: 20px;
`;

const AppSettingBtn = styled.button`
  width: 100px;
  height: 38px;
  border: 1px solid;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0.3);
  background-color: transparent;
`;

const AppDeleteBtn = styled(AppSettingBtn)`
  margin: 8px 0px;
`;
const AppStopBtn = styled(AppSettingBtn)``;

const BtnText = styled.text`
  margin-left: 24px;
  font-weight: 800;
  font-size: 17px;
`;

const AppSettingSvg = styled.svg`
  position: fixed;
  margin-top: 2.3px;
  fill: rgba(0, 0, 0, 0.2);
`;
const AppDeleteSvg = styled(AppSettingSvg)``;

const AppStopSvg = styled.svg``;

const Logo = styled.image``;

function Login() {
  return (
    <Wrapper>
      <AvoidSidebar>
        <AppNameText>DeploySurfing</AppNameText>
        <RowTitleWrapper>
          <BasicTitleWrapper>
            <Title>Framework</Title>
            <Title>Status</Title>
            <Title>Ip</Title>
            <Title>Domain</Title>
          </BasicTitleWrapper>
          <AppInfoWrapper>
            <Framework>SpringBoot</Framework>
            <Status>Running</Status>
            <Ip>*********</Ip>
            <Domain>deploySurfing.com</Domain>
          </AppInfoWrapper>
        </RowTitleWrapper>
      </AvoidSidebar>
      <BtnWrapper>
        <AppSettingBtn>
          <AppSettingSvg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 512, 512 "
          >
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </AppSettingSvg>
          <BtnText>앱 설정</BtnText>
        </AppSettingBtn>

        <AppDeleteBtn>
          <AppDeleteSvg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 512 512"
          >
            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
          </AppDeleteSvg>
          <BtnText>앱 삭제</BtnText>
        </AppDeleteBtn>
        <AppStopBtn>
          <BtnText>앱 중지</BtnText>
        </AppStopBtn>
      </BtnWrapper>
    </Wrapper>
  );
}

export default Login;
