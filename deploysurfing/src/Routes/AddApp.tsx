import React, {useState} from "react";
import styled from "styled-components";
import File from "/Users/oyun/Documents/develop/Deploy-Surfing/deploysurfing/src/assets/images/file-lines-solid 1.png";
import {theme} from "../theme";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 90vh;
`;

const AddAppWrapper = styled.div`
  width: 50%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 510px;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const AddAppText = styled.text`
  font-size: 30px;
  font-weight: 800;
  margin-top: 25px;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
  margin-top: 90px;
`;

const InputSelect = styled.select`
  height: 38px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  padding-left: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  height: 34px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  padding-left: 10px;
`;

const InputFileLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  background-color: white;
  cursor: pointer;
  padding-left: 10px;
`;

const InputFileLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  margin-top: 14px;
  cursor: pointer;
`;

const InputFileHidden = styled.input`
  display: none;
`;

const FileImg = styled.img`
  width: 10px;
  height: 15px;
  display: flex;
  justify-content: flex-end;
  margin-top: 2px;
  margin-right: 5px;
`;

const InputText = styled.text`
  margin-top: 10px;
`;

const CompleteButton = styled.button`
  height: 34px;
  background-color: ${(props) => props.theme.mainColor};
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 8px;
  margin-top: 32px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  padding-left: 10px;
  font-size: 13px;
`;

function AddApp() {
  const [appName, setAppName] = useState();
  const [url, setUrl] = useState();
  const [framework, setFramework] = useState(null);
  const [fileName, setFileName] = useState("파일을 업로드하세요.");

  const onChangeAppName = (text) => {
    setAppName(text.target.value);
  };

  const onChangeUrl = (text) => {
    setUrl(text.target.value);
  };

  const onChangeFramework = (framework) => {
    setFramework(framework.target.value);
  };

  const onChangeFile = (file) => {
    setFileName(file.target.files[0].name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appInfo = new FormData();
    appInfo.append("appName", appName);
    appInfo.append("url", url);
    appInfo.append("framework", framework);
    appInfo.append("fileName", fileName);

    try {
      const response = await fetch("", {
        method: "POST",
        body: appInfo,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    //전송 확인 코드

    // for (let [key, value] of appInfo.entries()) {
    //   if (
    //     typeof value === "object" &&
    //     value !== null &&
    //     value.constructor.name === "File"
    //   ) {
    //     console.log(`${key}: ${value.name}, ${value.size} bytes`);
    //   } else {
    //     console.log(`${key}: ${value}`);
    //   }
    // }
  };

  return (
    <Wrapper>
      <AddAppWrapper>
        <AddAppText>새 앱 추가</AddAppText>
        <InputForm onSubmit={handleSubmit}>
          <InputText>앱 이름 :</InputText>
          <Input onChange={onChangeAppName}></Input>
          <InputText>Github Repository URL :</InputText>
          <Input onChange={onChangeUrl}></Input>
          <InputText>Framework :</InputText>
          <InputSelect onChange={onChangeFramework} style={{}}>
            <option value="Spring">Spring Boot</option>
            <option value="Django">Django</option>
          </InputSelect>
          <InputText>yml</InputText>
          <InputFileLabelWrapper>
            <InputFileLabel>
              {fileName}
              <InputFileHidden
                type="file"
                onChange={onChangeFile}
              ></InputFileHidden>
              <FileImg src={File}></FileImg>
            </InputFileLabel>
          </InputFileLabelWrapper>
          <CompleteButton type="submit">완료</CompleteButton>
        </InputForm>
      </AddAppWrapper>
    </Wrapper>
  );
}

export default AddApp;
