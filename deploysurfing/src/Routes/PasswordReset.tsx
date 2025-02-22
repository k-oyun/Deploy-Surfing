import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

interface styleType {
  $ispasswordcanbeused: boolean;
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;
const UserInfoWrapper = styled.div`
  width: 35rem;
  height: 40.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 7%;
  background-color: #181818;
  border-radius: 20px;
`;

const UserInfo = styled.div`
  width: 90%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const LogoTxt = styled.span`
  font-weight: 800;
  color: white;
  font-size: 3rem;
  padding-top: 1rem;
`;

const GitHubDocker = styled.div`
  width: 87%;
  height: 22rem;
  border-radius: 15px;
  margin-top: 1rem;
  background-color: rgb(59, 59, 59);
  /* background-color: red; */
`;

const ExplainTxt = styled.span`
  display: block;
  font-weight: 800;
  font-size: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  color: white;
`;

const ImpInput = styled.input`
  width: 100%;
  height: 100%;
  /* margin-left: 1rem; */
  /* margin-top: 0.3rem; */
  padding-left: 0.5rem;
  border: 0px;
  border-radius: 10px;
`;

const InputWrapper = styled.div`
  width: 90%;
  height: 2rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
  margin-top: 0.6rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const EyeSvg = styled(motion.svg)`
  cursor: pointer;
  position: absolute;
  margin-right: 0.5rem;
`;

const RegisterBtn = styled.button<styleType>`
  width: 90%;
  height: 2.5rem;
  margin-left: 1rem;
  margin-top: 1rem;
  border: 0px;
  border-radius: 11px;
  font-size: 1.2rem;
  font-weight: 800;
  background-color: ${(props) => props.theme.mainColor};
  cursor: ${(props) => (props.$ispasswordcanbeused ? "pointer" : "default")};
`;
function PasswordReset() {
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<
    "password" | "text"
  >("password");
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState<
    "password" | "text"
  >("password");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordDuplicateMessage, setPasswordDuplicateMessage] =
    useState<string>("");

  const [isPasswordCanBeUsed, setIsPasswordCanBeUsed] = useState(false);
  const [isPasswordPossible, setIsPasswordPossible] = useState(false);
  const [passwordSameWhether, setPasswordSameWhether] = useState<boolean>();
  const [passwordSameMessage, setPasswordSameMessage] = useState<string>("");

  //-------------------------------------------------------------------
  const validatePassword = (password: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegExp = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&]).{8,64}$/;
    if (!passwordRegExp.test(password.target.value)) {
      setPasswordMessage("올바른 비밀번호 형식을 입력해주세요.");
      setIsPasswordPossible(false);
      return false;
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다.");
      setIsPasswordPossible(true);
      return true;
    }
  };

  const onchangePassword = (text: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(text.target.value);
  };

  const onchangePasswordCheck = (text: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(text.target.value);
  };

  const PasswordDuplicateCheck = () => {
    if (password.length === 0 || passwordCheck.length === 0) {
      setPasswordDuplicateMessage("");
      setIsPasswordCanBeUsed(false);
    } else if (password === passwordCheck) {
      setPasswordDuplicateMessage("비밀번호가 일치합니다!");
      setIsPasswordCanBeUsed(true);
    } else {
      setPasswordDuplicateMessage("비밀번호가 일치하지 않습니다!");
      setIsPasswordCanBeUsed(false);
    }
  };

  const PasswordSameCheck = () => {
    if (password === "1234") {
      setPasswordSameWhether(true);
      setPasswordSameMessage(
        "이전 비밀번호가 아닌 새로운 비밀번호를 입력해 주세요"
      );
    } else {
      setPasswordSameWhether(false);
      setPasswordSameMessage("");
      alert("비밀번호가 변경되었습니다.");
    }
  };

  const ResetPos = () => {
    if (isPasswordCanBeUsed && isPasswordPossible) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    PasswordDuplicateCheck();
  }, [onchangePassword, onchangePasswordCheck]);

  return (
    <>
      <Header></Header>
      <Wrapper>
        <UserInfoWrapper>
          <LogoTxt>Deploy Surfing</LogoTxt>
          <UserInfo>
            <GitHubDocker>
              <ExplainTxt>New Password</ExplainTxt>
              <InputWrapper>
                <ImpInput
                  type={isPasswordVisible}
                  onChange={(text) => {
                    onchangePassword(text);
                    validatePassword(text);
                  }}
                ></ImpInput>
                {isPasswordVisible === "password" ? (
                  <EyeSvg
                    width="26"
                    height="22"
                    viewBox="0 0 27 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setIsPasswordVisible((prev) =>
                        prev === "password" ? "text" : "password"
                      );
                    }}
                  >
                    <path
                      d="M1.74203 1.01223C1.30761 0.666945 0.676877 0.746949 0.334358 1.18487C-0.00816014 1.62278 0.0712039 2.2586 0.505618 2.60389L25.2338 22.1417C25.6682 22.487 26.2989 22.407 26.6414 21.9691C26.984 21.5312 26.9046 20.8953 26.4702 20.5501L22.0759 17.0804C23.73 15.3708 24.8495 13.455 25.4134 12.0949C25.5512 11.7622 25.5512 11.3917 25.4134 11.0591C24.791 9.55582 23.4836 7.36623 21.5287 5.53877C19.5655 3.69447 16.863 2.14491 13.4879 2.14491C10.6392 2.14491 8.26658 3.25234 6.41615 4.70504L1.74203 1.01223ZM9.44034 7.09253C10.5055 6.11143 11.9299 5.51351 13.4879 5.51351C16.8087 5.51351 19.5029 8.22943 19.5029 11.577C19.5029 12.6254 19.2397 13.6108 18.7761 14.4698L17.1637 13.1981C17.5146 12.3854 17.6065 11.4549 17.3642 10.5327C16.9006 8.78525 15.3676 7.61046 13.6633 7.53887C13.4211 7.53045 13.279 7.79573 13.3542 8.03153C13.442 8.30102 13.4921 8.58735 13.4921 8.88631C13.4921 9.3158 13.3918 9.72004 13.2164 10.0779L9.44451 7.09675L9.44034 7.09253ZM15.7017 17.2152C15.0167 17.4888 14.269 17.6404 13.4879 17.6404C10.1671 17.6404 7.47294 14.9245 7.47294 11.577C7.47294 11.2864 7.49383 11.0043 7.53142 10.7264L3.59246 7.59782C2.64009 8.84841 1.95923 10.0948 1.56241 11.0591C1.42457 11.3917 1.42457 11.7622 1.56241 12.0949C2.18479 13.5981 3.49221 15.7877 5.44707 17.6152C7.41029 19.4595 10.1128 21.009 13.4879 21.009C15.4845 21.009 17.2431 20.4658 18.7593 19.6405L15.7017 17.2152Z"
                      fill="black"
                    />
                  </EyeSvg>
                ) : (
                  <EyeSvg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setIsPasswordVisible((prev) =>
                        prev === "password" ? "text" : "password"
                      );
                    }}
                  >
                    <path
                      d="M12.4999 1.4375C8.99295 1.4375 6.18479 3.09062 4.14052 5.0582C2.10927 7.00781 0.75076 9.34375 0.108398 10.9475C-0.0348307 11.3023 -0.0348307 11.6977 0.108398 12.0525C0.75076 13.6562 2.10927 15.9922 4.14052 17.9418C6.18479 19.9094 8.99295 21.5625 12.4999 21.5625C16.0068 21.5625 18.815 19.9094 20.8593 17.9418C22.8905 15.9877 24.249 13.6562 24.8957 12.0525C25.039 11.6977 25.039 11.3023 24.8957 10.9475C24.249 9.34375 22.8905 7.00781 20.8593 5.0582C18.815 3.09062 16.0068 1.4375 12.4999 1.4375ZM6.24989 11.5C6.24989 9.78438 6.90837 8.13903 8.08047 6.9259C9.25258 5.71278 10.8423 5.03125 12.4999 5.03125C14.1575 5.03125 15.7472 5.71278 16.9193 6.9259C18.0914 8.13903 18.7499 9.78438 18.7499 11.5C18.7499 13.2156 18.0914 14.861 16.9193 16.0741C15.7472 17.2872 14.1575 17.9688 12.4999 17.9688C10.8423 17.9688 9.25258 17.2872 8.08047 16.0741C6.90837 14.861 6.24989 13.2156 6.24989 11.5ZM12.4999 8.625C12.4999 10.2107 11.2542 11.5 9.72211 11.5C9.41395 11.5 9.11882 11.4461 8.84104 11.3518C8.60232 11.2709 8.32454 11.4236 8.33323 11.6842C8.34625 11.9941 8.38965 12.3041 8.47211 12.6141C9.06673 14.9141 11.3541 16.2797 13.5763 15.6643C15.7985 15.0488 17.1179 12.6814 16.5233 10.3814C16.0416 8.51719 14.4487 7.26387 12.6778 7.1875C12.4261 7.17852 12.2785 7.46152 12.3567 7.71309C12.4478 8.00059 12.4999 8.30605 12.4999 8.625Z"
                      fill="black"
                    />
                  </EyeSvg>
                )}
              </InputWrapper>
              <ExplainTxt>{passwordMessage}</ExplainTxt>
              <ExplainTxt>New Password Check</ExplainTxt>
              <InputWrapper>
                <ImpInput
                  type={isPasswordCheckVisible}
                  onChange={(text) => {
                    onchangePasswordCheck(text);
                  }}
                ></ImpInput>
                {isPasswordCheckVisible === "password" ? (
                  <EyeSvg
                    width="26"
                    height="22"
                    viewBox="0 0 27 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setIsPasswordCheckVisible((prev) =>
                        prev === "password" ? "text" : "password"
                      );
                    }}
                  >
                    <path
                      d="M1.74203 1.01223C1.30761 0.666945 0.676877 0.746949 0.334358 1.18487C-0.00816014 1.62278 0.0712039 2.2586 0.505618 2.60389L25.2338 22.1417C25.6682 22.487 26.2989 22.407 26.6414 21.9691C26.984 21.5312 26.9046 20.8953 26.4702 20.5501L22.0759 17.0804C23.73 15.3708 24.8495 13.455 25.4134 12.0949C25.5512 11.7622 25.5512 11.3917 25.4134 11.0591C24.791 9.55582 23.4836 7.36623 21.5287 5.53877C19.5655 3.69447 16.863 2.14491 13.4879 2.14491C10.6392 2.14491 8.26658 3.25234 6.41615 4.70504L1.74203 1.01223ZM9.44034 7.09253C10.5055 6.11143 11.9299 5.51351 13.4879 5.51351C16.8087 5.51351 19.5029 8.22943 19.5029 11.577C19.5029 12.6254 19.2397 13.6108 18.7761 14.4698L17.1637 13.1981C17.5146 12.3854 17.6065 11.4549 17.3642 10.5327C16.9006 8.78525 15.3676 7.61046 13.6633 7.53887C13.4211 7.53045 13.279 7.79573 13.3542 8.03153C13.442 8.30102 13.4921 8.58735 13.4921 8.88631C13.4921 9.3158 13.3918 9.72004 13.2164 10.0779L9.44451 7.09675L9.44034 7.09253ZM15.7017 17.2152C15.0167 17.4888 14.269 17.6404 13.4879 17.6404C10.1671 17.6404 7.47294 14.9245 7.47294 11.577C7.47294 11.2864 7.49383 11.0043 7.53142 10.7264L3.59246 7.59782C2.64009 8.84841 1.95923 10.0948 1.56241 11.0591C1.42457 11.3917 1.42457 11.7622 1.56241 12.0949C2.18479 13.5981 3.49221 15.7877 5.44707 17.6152C7.41029 19.4595 10.1128 21.009 13.4879 21.009C15.4845 21.009 17.2431 20.4658 18.7593 19.6405L15.7017 17.2152Z"
                      fill="black"
                    />
                  </EyeSvg>
                ) : (
                  <EyeSvg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setIsPasswordCheckVisible((prev) =>
                        prev === "password" ? "text" : "password"
                      );
                    }}
                  >
                    <path
                      d="M12.4999 1.4375C8.99295 1.4375 6.18479 3.09062 4.14052 5.0582C2.10927 7.00781 0.75076 9.34375 0.108398 10.9475C-0.0348307 11.3023 -0.0348307 11.6977 0.108398 12.0525C0.75076 13.6562 2.10927 15.9922 4.14052 17.9418C6.18479 19.9094 8.99295 21.5625 12.4999 21.5625C16.0068 21.5625 18.815 19.9094 20.8593 17.9418C22.8905 15.9877 24.249 13.6562 24.8957 12.0525C25.039 11.6977 25.039 11.3023 24.8957 10.9475C24.249 9.34375 22.8905 7.00781 20.8593 5.0582C18.815 3.09062 16.0068 1.4375 12.4999 1.4375ZM6.24989 11.5C6.24989 9.78438 6.90837 8.13903 8.08047 6.9259C9.25258 5.71278 10.8423 5.03125 12.4999 5.03125C14.1575 5.03125 15.7472 5.71278 16.9193 6.9259C18.0914 8.13903 18.7499 9.78438 18.7499 11.5C18.7499 13.2156 18.0914 14.861 16.9193 16.0741C15.7472 17.2872 14.1575 17.9688 12.4999 17.9688C10.8423 17.9688 9.25258 17.2872 8.08047 16.0741C6.90837 14.861 6.24989 13.2156 6.24989 11.5ZM12.4999 8.625C12.4999 10.2107 11.2542 11.5 9.72211 11.5C9.41395 11.5 9.11882 11.4461 8.84104 11.3518C8.60232 11.2709 8.32454 11.4236 8.33323 11.6842C8.34625 11.9941 8.38965 12.3041 8.47211 12.6141C9.06673 14.9141 11.3541 16.2797 13.5763 15.6643C15.7985 15.0488 17.1179 12.6814 16.5233 10.3814C16.0416 8.51719 14.4487 7.26387 12.6778 7.1875C12.4261 7.17852 12.2785 7.46152 12.3567 7.71309C12.4478 8.00059 12.4999 8.30605 12.4999 8.625Z"
                      fill="black"
                    />
                  </EyeSvg>
                )}
              </InputWrapper>
              <ExplainTxt>{passwordDuplicateMessage}</ExplainTxt>
              <RegisterBtn
                $ispasswordcanbeused={isPasswordCanBeUsed}
                disabled={ResetPos() ? false : true}
                onClick={PasswordSameCheck}
              >
                비밀번호 변경
              </RegisterBtn>
              <ExplainTxt>{}</ExplainTxt>
            </GitHubDocker>
          </UserInfo>
        </UserInfoWrapper>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}

export default PasswordReset;
