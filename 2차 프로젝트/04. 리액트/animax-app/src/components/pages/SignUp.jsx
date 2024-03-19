// Animax 회원가입 컴포넌트

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopArea } from '../layout/TopArea';
import { SnsBox } from './SnsBox';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import '../../css/signup.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export function SignUp() {
  //이름, 비밀번호, 비밀번호확인
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  // 각각 에러 메세지
  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

  const [isEmailChk, setIsEmailChk] = useState(false); //중복검사 했는지 안했는지
  const [isEmailAvailable, setIsEmailAvailable] = useState(false); // 아이디 사용 가능한지

  const onChangeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailCheckHandler(emailValue);
  };
  const onChangePasswordHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
      passwordCheckHandler(value, confirmPwd);
    } else {
      setConfirmPwd(value);
      passwordCheckHandler(password, value);
    }
  };
  // 아이디 유효성 검사, 중복검사 handler 구현
  const emailCheckHandler = async (email) => {
    const emailRegex = /^[a-z\d]{5,10}$/;
    if (email === '') {
      setEmailMsg('5~50자의 이메일 형식으로 입력해주세요.');
      setIsEmailAvailable(false);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailMsg(
        '입력하신 이메일 주소가 형식에 맞지 않습니다. 다시 입력해 주세요.'
      );
      setIsEmailAvailable(false);
      return false;
    }
  }
  try {
    const responseData = async emailDuplicateCheck(email);
    if (responseData) {
      setEmailMsg('사용 가능한 이메일입니다.');
      setIsEmailChk(true);
      setIsEmailAvailable(true);
    } 
  }

  return (
    <>
      <TopArea cat='signup' />
      <div className='signup_form'>
        <div className='step_bar'>
          <span className='step'>
            <span className='sr-only'>진행단계</span>
          </span>
        </div>
        <div className='join-sns-box'>
          <h2 className='join-hd'>
            <span>이메일과 비밀번호</span>만으로 <br />
            <span>Animax를 즐길 수</span> 있어요!
          </h2>
          <form>
            <fieldset>
              <legend className='sr-only'>회원가입 입력폼</legend>
              <ul className='join-input-box'>
                <li>
                  <label htmlFor='email'>
                    <input
                      type='text'
                      id='email'
                      placeholder='animax@example.com'
                      className='input_style01 input_style02 error-msg'
                      maxLength='50'
                      autoComplete='off'
                      onChange={onChangeEmailHandler}
                      value={email}
                    />
                  </label>
                  <span className='login-error-gray' id='id-error-alert'>
                    <span className='alert-icon'>
                      <FontAwesomeIcon icon={faExclamation} />
                    </span>
                    로그인, 비밀번호 찾기, 알림에 사용되니 정확한 이메일을
                    입력해 주세요.
                  </span>
                </li>
                <li>
                  <label htmlFor='password'>
                    <input
                      type='password'
                      id='password'
                      autoComplete='off'
                      className='input_style01 input_style02'
                      maxLength='50'
                      placeholder='비밀번호 입력'
                      value={password}
                      onChange={onChangePasswordHandler}
                    />
                  </label>
                  <button type='button' className='btn-input'>
                    show
                  </button>
                  {/* <span className='login-error-gray' id='pw-error-alert'>
                    <span className='alert-icon'>
                      <FontAwesomeIcon icon={faExclamation} />
                    </span>
                    비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중
                    3가지 이상 혼용하여 입력해 주세요.
                  </span> */}
                </li>
                <li>
                  <label htmlFor='confirmPassword'>
                    <input
                      type='password'
                      id='confirmPassword'
                      autoComplete='off'
                      className='input_style01 input_style02'
                      maxLength='50'
                      placeholder='비밀번호 확인'
                      value={confirmPwd}
                      onChange={onChangePasswordHandler}
                    />
                  </label>
                  <button type='button' className='btn-input'>
                    show
                  </button>
                  {/* <span className='login-error-gray' id='pw-error-alert'>
                    <span className='alert-icon'>
                      <FontAwesomeIcon icon={faExclamation} />
                    </span>
                    비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중
                    3가지 이상 혼용하여 입력해 주세요.
                  </span> */}
                </li>
              </ul>
              <ul className='btn-animax-join' id='sub-join-submit'>
                <li>
                  <button type='submit' href='#'>
                    Anibox 회원가입
                  </button>
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
