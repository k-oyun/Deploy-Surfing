import { motion, SVGMotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PowerButton from "../assets/images/powerbutton.png";
interface PowerProps {
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

const PowerBtn = styled.div<PowerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background-color: ${(props) => (props.$ispoweron ? "#6DB33F" : "#fc8787")};
  border-radius: 50%;
  display: flex;
  width: 38px;
  height: 30px;
  cursor: pointer;
`;

const PowerBtnImg = styled.img`
  position: relative;
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
