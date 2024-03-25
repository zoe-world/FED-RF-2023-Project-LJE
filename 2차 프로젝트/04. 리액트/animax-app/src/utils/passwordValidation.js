// 비밀번호 유효성 검사

export const onChangePasswordHandler = (
  e,
  password,
  confirm,
  setPassword,
  setConfirm,
  setPasswordError,
  setConfirmError,
  setIsPasswordAvailable,
  setIsConfirmAvailable
) => {
  const { name, value } = e.target;
  console.log(name, value);
  if (name === "password") {
    setPassword(value);
    passwordCheckHandler(
      value,
      confirm,
      setPasswordError,
      setConfirmError,
      setIsPasswordAvailable,
      setIsConfirmAvailable
    );
  } else {
    setConfirm(value);
    passwordCheckHandler(
      password,
      value,
      setPasswordError,
      setConfirmError,
      setIsPasswordAvailable,
      setIsConfirmAvailable
    );
  }
};
export const passwordCheckHandler = (
  value,
  password,
  confirm,
  setPasswordError,
  setConfirmError,
  setIsPasswordAvailable,
  setIsConfirmAvailable
) => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s)(?!.*[^a-zA-Z\d!@#$%^&*]).{8,16}$/;
  if (password === "") {
    setPasswordError("비밀번호를 입력해주세요.");
    setIsPasswordAvailable(false);
    return false;
  } else if (!passwordRegex.test(password)) {
    setPasswordError(
      "비밀번호는 8~16자의 영문, 숫자, 특수문자(!@#$%^&*)를 모두 포함하여야 합니다."
    );
    setIsPasswordAvailable(false);
    return false;
  } else if (confirm !== password) {
    setPasswordError("");
    setConfirmError("비밀번호가 일치하지 않습니다.");
    setIsPasswordAvailable(true);
    setIsConfirmAvailable(false);
    return false;
  } else {
    setPasswordError("");
    setConfirmError("");
    setIsPasswordAvailable(true);
    setIsConfirmAvailable(true);
    return true;
  }
};
