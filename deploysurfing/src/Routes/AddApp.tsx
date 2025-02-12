import React, { useState } from "react";
import styled from "styled-components";
import File from "../assets/images/file-lines-solid 1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const AddAppWrapper = styled.div`
  width: 35rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: 510px; */
  margin-top: 5%;
  margin-bottom: 7%;
  background-color: #181818;
  border-radius: 20px;
`;

const AddAppText = styled.span`
  font-size: 1rem;
  font-weight: 800;
  margin-top: 3%;
  margin-right: 68%;
  color: white;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin-top: 3rem;
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
  height: 100%;
  margin-top: 14px;
  cursor: pointer;
`;

const InputFileHidden = styled.input`
  display: none;
`;

const FileImg = styled.img`
  width: 2.5%;
  height: 40%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2px;
  margin-right: 4%;
`;

const InputText = styled.span`
  margin-top: 4%;
  color: white;
  font-weight: 800;
`;

const InputTextArea = styled.textarea`
  height: 20%;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  padding-left: 10px;
  padding-top: 5px;
`;

const CompleteButton = styled.button`
  width: 13%;
  height: 7%;
  background-color: ${(props) => props.theme.mainColor};
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 8px;
  margin-left: 56%;
  margin-bottom: 2%;
`;

function AddApp() {
  const [appName, setAppName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [framework, setFramework] = useState<string>("");
  const [fileName, setFileName] = useState<string>("파일을 업로드하세요.");

  const onChangeAppName = (text: React.ChangeEvent<HTMLInputElement>) => {
    setAppName(text.target.value);
  };

  const onChangeUrl = (text: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(text.target.value);
  };

  const onChangeFramework = (
    framework: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFramework(framework.target.value);
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name); // 파일 이름 상태 업데이트
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const appInfo = new FormData();
    appInfo.append("appName", appName);
    appInfo.append("url", url);
    appInfo.append("framework", framework);
    appInfo.append("fileName", fileName);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <AddAppWrapper>
          <AddAppText>새 앱 추가</AddAppText>
          <InputForm onSubmit={handleSubmit}>
            <InputText>앱 이름 :</InputText>
            <Input onChange={onChangeAppName}></Input>
            <InputText>Github Repository URL :</InputText>
            <Input onChange={onChangeUrl}></Input>
            <InputText>Framework :</InputText>
            <InputSelect onChange={onChangeFramework}>
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
            <InputText>설명</InputText>
            <InputTextArea></InputTextArea>
          </InputForm>
          <CompleteButton>완료</CompleteButton>
        </AddAppWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default AddApp;
