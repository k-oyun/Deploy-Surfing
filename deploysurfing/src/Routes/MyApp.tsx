import React, {useEffect} from "react";

import {styled} from "styled-components";

const Test = styled.text`
  color: "black";
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
`;

const Sidebar = styled.div`
  background-color: white;
  border-right: 1.5px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  width: 300px;
  height: 600px;
`;

const Testbar = styled.div`
  background-color: red;
  border: 5px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 1080px;
`;
function Login() {
  return (
    <Wrapper>
      <Test>Myapp</Test>
    </Wrapper>
  );
}

export default Login;
