import { motion, SVGMotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PowerButton from "../assets/images/powerbutton.png";
interface PowerProps extends SVGMotionProps<SVGSVGElement> {
  $ispoweron?: boolean;
}
interface styleType {
  $isselected?: boolean;
}

const UserAppBtn = styled.button<styleType>`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 0.3;
  width: 15rem;
  height: 3.5rem;
  border: 3px solid;
  border-radius: 15px;
  border-color: ${(props) => (props.$isselected ? "#11E5B3" : "#D5D5D5")};
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
  fill: ${(props) => (props.$ispoweron ? "#6DB33F" : "#fc8787")};
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

const AppBtn = ({
  apps,
  selectedApp,
  setSelectedApp,
}: {
  apps: { id: string; name: string; framework: string; ispoweron: boolean }[];
  selectedApp: string;
  setSelectedApp: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onClickAppButton = (id: string) => {
    setSelectedApp(id);
  };

  return (
    <>
      {apps.map((app) => (
        <UserAppBtn
          key={app.id}
          onClick={() => onClickAppButton(app.id)}
          $isselected={(selectedApp === app.id) === true || false}
        >
          <PowerBtn>
            <Power
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              $ispoweron={app.ispoweron} //ispoweron 프롭으로 각 앱의 파워 상태 전달
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
                  app.framework === "SPRING"
                    ? "#6DB33F"
                    : app.framework === "DJANGO"
                    ? "#3B6DEB"
                    : "#F7DF1D",
              }}
            >
              {app.framework}
            </AppBtnText>
          </AppBtnTextWrapper>
        </UserAppBtn>
      ))}
    </>
  );
};
export default AppBtn;
