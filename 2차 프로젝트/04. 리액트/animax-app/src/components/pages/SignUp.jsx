// Animax 회원가입 컴포넌트

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopArea } from "../layout/TopArea";
import { SnsBox } from "./SnsBox";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import "../../css/signup.css";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { debounce } from "../../hooks/debounce";
import { fireStore } from "../../firebase";
import { initData } from "func/userInfo";

export function SignUp() {
  //이름, 비밀번호, 비밀번호확인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  // 각각 에러 메세지
  const [emailMsg, setEmailMsg] = useState(
    "5~50자의 이메일 형식으로 입력해주세요."
  );
  const [pwdMsg, setPwdMsg] = useState("");
  const [confirmPwdMsg, setConfirmPwdMsg] = useState("");

  const [isEmailAvailable, setIsEmailAvailable] = useState(false); // 아이디 사용 가능한지

  // type 변경 여부를 알리는 state
  const [showPswd, setShowPswd] = useState(false);

  const onChangeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailCheckHandler(emailValue);
  };
  useEffect(() => {
    if (pwdMsg === "" && confirmPwd === "" && email) {
      emailCheckHandlerDebounced(email);
    }
  }, [password, confirmPwd, email]);
  const emailCheckHandlerDebounced = useCallback(
    debounce((email) => {
      emailCheckHandler(email);
    }, 500)
  );
  const onChangePasswordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    passwordCheckHandler(passwordValue, pwdMsg);
  };

  // 아이디 유효성 검사
  const emailCheckHandler = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    initData();
    let userInfo = localStorage.getItem("userInfo");

    userInfo = JSON.parse(userInfo);
    let isOk = true;

    //로컬스토리지 체크함수호출
    if (emailRegex.test(email)) {
      userInfo.map((v) => {
        if (v.eml === email) {
          setEmailMsg("사용중인 이메일입니다.");
          setIsEmailAvailable(false);
          isOk = false;
        }
      });
      if (isOk) {
        setEmailMsg("사용 가능한 이메일입니다.");
        setIsEmailAvailable(true);
        return true;
      }
    } else if (email === "") {
      setEmailMsg("5~50자의 이메일 형식으로 입력해주세요.");
      setIsEmailAvailable(false);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailMsg(
        "입력하신 이메일 주소가 형식에 맞지 않습니다. 다시 입력해 주세요."
      );
      setIsEmailAvailable(false);
      return false;
    }
  };

  // 비밀번호 유효성 검사
  const passwordCheckHandler = (passwordValue, PwdMsg) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s)(?!.*[^a-zA-Z\d!@#$%^&*]).{8,16}$/;
    if (password === "") {
      setPwdMsg("비밀번호를 입력해주세요.");
      return false;
    } else if (!passwordRegex.test(password)) {
      setPwdMsg(
        "비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중 3가지 이상 혼용하여 입력해 주세요.연속된 숫자 또는 4자 이상의 동일 문자는 비밀번호로 사용할 수 없습니다."
      );
      return false;
    } else if (confirmPwd !== password) {
      setPwdMsg("");
      setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      setPwdMsg("");
      setConfirmPwdMsg("");
      return true;
    }
  };
  const confirmPwdCheckHandler = (confirmPwd, setConfirmPwdMsg) => {};

  //회원가입 진행
  const signupHandler = (e) => {
    e.preventDefault();
    if (!passwordCheckHandler(password, setPwdMsg)) return;
    if (!confirmPwdCheckHandler(confirmPwd, setConfirmPwdMsg)) return;
    // 로컬스토리지 체크함수호출(없으면 생성함!)
    initData();

    // 1. 로컬스 변수할당
    let userInfo = localStorage.getItem("userInfo");

    // 2. 로컬스 객체변환
    userInfo = JSON.parse(userInfo);

    // 3. 새로운 데이터 구성하기
    let newData = {
      idx: userInfo.length + 1,
      eml: email,
      pwd: password,
    };

    // 4. 데이터 추가하기 : 배열에 데이터추가 push()
    userInfo.push(newData);

    // 5. 로컬스에 반영하기
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  // 비밀번호 보이기 토클
  const toggleShowPassword = (e) => {
    const name = e.currentTarget;
    console.log(name);
    setShowPswd(!showPswd);
  };

  return (
    <>
      <TopArea cat="signup" />
      <div className="signup_form">
        <div className="step_bar">
          <span className="step">
            <span className="sr-only">진행단계</span>
          </span>
        </div>
        <div className="join-sns-box">
          <h2 className="join-hd">
            <span>이메일과 비밀번호</span>만으로 <br />
            <span>Animax를 즐길 수</span> 있어요!
          </h2>
          <form onSubmit={signupHandler}>
            <fieldset>
              <legend className="sr-only">회원가입 입력폼</legend>
              <ul className="join-input-box">
                <li>
                  <label htmlFor="email">
                    <input
                      type="text"
                      id="email"
                      placeholder="animax@example.com"
                      className={
                        !email
                          ? "input_style01 input_style02"
                          : isEmailAvailable
                          ? "input_style01 input_style02"
                          : "input_style01 input_style02 error-msg"
                      }
                      maxLength="50"
                      autoComplete="off"
                      onChange={onChangeEmailHandler}
                      value={email}
                    />
                  </label>
                  {!email ? (
                    <span className="login-error-gray" id="id-error-alert">
                      <span className="alert-icon">
                        <FontAwesomeIcon icon={faExclamation} />
                      </span>
                      {emailMsg}
                    </span>
                  ) : (
                    <span
                      className={
                        isEmailAvailable
                          ? "login-error-gray"
                          : "login-error-pink"
                      }
                      id="id-error-alert"
                    >
                      <span className="alert-icon">
                        <FontAwesomeIcon icon={faExclamation} />
                      </span>
                      {emailMsg}
                    </span>
                  )}
                </li>
                <li>
                  <label htmlFor="password">
                    <input
                      type={showPswd ? "text" : "password"}
                      id="password"
                      autoComplete="off"
                      className="input_style01 input_style02"
                      maxLength="50"
                      placeholder="비밀번호 입력"
                      value={password}
                      onChange={onChangePasswordHandler}
                    />
                  </label>
                  {showPswd ? (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </button>
                  )}

                  {/* <span className='login-error-gray' id='pw-error-alert'>
                    <span className='alert-icon'>
                      <FontAwesomeIcon icon={faExclamation} />
                    </span>
                    비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중
                    3가지 이상 혼용하여 입력해 주세요.
                  </span> */}
                </li>
                <li>
                  <label htmlFor="confirmPassword">
                    <input
                      type={showPswd ? "text" : "password"}
                      id="confirmPassword"
                      autoComplete="off"
                      className="input_style01 input_style02"
                      maxLength="50"
                      placeholder="비밀번호 확인"
                      value={onChangePasswordHandler}
                    />
                  </label>
                  {showPswd ? (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={(e) => toggleShowPassword(e)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  )}
                  <span className="login-error-gray" id="pw-error-alert">
                    <span className="alert-icon">
                      <FontAwesomeIcon icon={faExclamation} />
                    </span>
                    비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중
                    3가지 이상 혼용하여 입력해 주세요.
                  </span>
                </li>
              </ul>
              <ul className="btn-animax-join" id="sub-join-submit">
                <li>
                  <button type="submit">Anibox 회원가입</button>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
        <SnsBox />
      </div>
    </>
  );
}
