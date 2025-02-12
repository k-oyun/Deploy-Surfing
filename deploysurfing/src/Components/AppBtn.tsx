import { motion, SVGMotionProps } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import PowerButton from "../assets/images/powerbutton.png";
interface PowerProps extends SVGMotionProps<SVGSVGElement> {
  ispoweron?: string;
}
interface styleType {
  isselected?: boolean;
}

const UserAppBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isselected", //스타일링에만 적용 Dom에는 전송되지 않도록
})<styleType>`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 0.3;
  width: 15rem;
  height: 3.5rem;
  border: 3px solid;
  border-radius: 15px;
  border-color: ${(props) => (props.isselected ? "#11E5B3" : "#D5D5D5")};
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

const PowerBtn = styled.div`
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

const Power = styled(motion.svg)<PowerProps>`
  width: 38px;
  height: 30px;
  fill: ${(props) => (props.ispoweron == "true" ? "#6DB33F" : "#fc8787")};
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
function AppBtn() {
  const [selectedApp, setSelectedApp] = useState("false");
  const [apps, setApps] = useState([
    {
      id: 1,
      name: "DefloySurfing",
      framework: "Spring Boot",
      ispoweron: "false",
    },
    { id: 2, name: "해커톤 2팀", framework: "Django", ispoweron: "false" },
    { id: 3, name: "App 3", framework: "Spring Boot", ispoweron: "false" },
  ]);
  const onClickAppButton = (appName) => {
    setSelectedApp(appName);
  };

  return (
    <>
      {apps.map((app) => (
        <UserAppBtn
          key={app.id}
          onClick={() => onClickAppButton(app.name)}
          isselected={(selectedApp == app.name) == true || false}
        >
          <PowerBtn>
            <Power
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              ispoweron={app.ispoweron} //ispoweron 프롭으로 각 앱의 파워 상태 전달
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
                color: app.framework === "Spring Boot" ? "#6DB33F" : "#3B6DEB",
              }}
            >
              {app.framework}
            </AppBtnText>
          </AppBtnTextWrapper>
        </UserAppBtn>
      ))}
    </>
  );
}
export default AppBtn;
