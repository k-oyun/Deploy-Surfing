import React, { useEffect, useState } from "react";
import styled from "styled-components";
import File from "../assets/images/file-lines-solid 1.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { addAppPost } from "../apiCall";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const AddAppWrapper = styled.div`
  width: 560px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  background-color: #181818;
  border-radius: 20px;
`;

const AddAppText = styled.span`
  font-size: 16px;
  font-weight: 800;
  margin-top: 15px;
  margin-right: 390px;
  color: white;
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 600px;
  margin-top: 30px;
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
  margin-top: 11px;
  color: white;
  font-weight: 800;
`;

const InputTextArea = styled.textarea`
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  padding-left: 10px;
  padding-top: 5px;
`;

const CompleteButton = styled.button`
  width: 70px;
  height: 35px;
  background-color: ${(props) => props.theme.mainColor};
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: 8px;
  margin-left: 310px;
  margin-bottom: 10px;
  cursor: pointer;
`;

function AddApp() {
  const navigate = useNavigate();
  const [appName, setAppName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [framework, setFramework] = useState<string>("SPRING");
  const [yml, setYml] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [port, setPort] = useState<string>("");

  const onChangeAppName = (text: React.ChangeEvent<HTMLInputElement>) => {
    setAppName(text.target.value);
  };
  const onChangeUrl = (text: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(text.target.value);
  };
  const onChangeYml = (text: React.ChangeEvent<HTMLInputElement>) => {
    setYml(text.target.value);
  };

  const onChangeVersion = (text: React.ChangeEvent<HTMLInputElement>) => {
    setVersion(text.target.value);
  };

  const onChangePort = (text: React.ChangeEvent<HTMLInputElement>) => {
    setPort(text.target.value);
  };
  const onChangeFramework = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    // console.log(value);
    setFramework(value);
  };

  // const [fileName, setFileName] = useState<string>("파일을 업로드하세요.");
  // const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setFileName(file.name);
  //   }
  // };

  const onclickSubmit = async () => {
    const res = await addAppPost({
      name: appName,
      type: framework,
      gitHubUrl: url,
      yml,
      version,
      port,
    });

    if (res?.status == 200) {
      alert("새 앱 추가가 완료되었습니다.");
      navigate("/main");
    } else {
      alert("앱 추가 중 문제가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  useEffect(() => {
    console.log(appName);
    console.log(framework);
    console.log(url);
    console.log(yml);
    console.log(version);
    console.log(port);
  }, [appName, framework, url, yml, version, port]);
  return (
    <>
      <Header />
      <Wrapper>
        <AddAppWrapper>
          <AddAppText>새 앱 추가</AddAppText>
          <InputWrapper>
            <InputText>앱 이름 :</InputText>
            <Input onChange={onChangeAppName}></Input>
            <InputText>Github Repository URL :</InputText>
            <Input onChange={onChangeUrl}></Input>
            <InputText>Version :</InputText>
            <Input onChange={onChangeVersion}></Input>
            <InputText>Port :</InputText>
            <Input onChange={onChangePort}></Input>
            <InputText>Framework :</InputText>
            <InputSelect onChange={onChangeFramework}>
              <option value="SPRING">Spring</option>
              <option value="DJANGO">Django</option>
              <option value="VANILLA_JS">Vanilla_Js</option>
            </InputSelect>
            <InputText>Yml :</InputText>
            <Input onChange={onChangeYml}></Input>
            {/* <InputFileLabelWrapper>
              <InputFileLabel>
                {fileName}
                <InputFileHidden
                  type="file"
                  onChange={onChangeFile}
                ></InputFileHidden>
                <FileImg src={File}></FileImg>
              </InputFileLabel>
            </InputFileLabelWrapper> */}
            <InputText>설명</InputText>
            <InputTextArea></InputTextArea>
          </InputWrapper>
          <CompleteButton onClick={onclickSubmit}>완료</CompleteButton>
        </AddAppWrapper>
      </Wrapper>
    </>
  );
}

export default AddApp;
