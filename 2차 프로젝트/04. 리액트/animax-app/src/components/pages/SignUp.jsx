// Animax 회원가입 컴포넌트

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopArea } from '../layout/TopArea';
import { SnsBox } from './SnsBox';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import '../../css/signup.css';
import { useState } from 'react';
import { setUser } from '../../redux/reducers/user';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { GetProfile, GetUser, PatchUserName, PostUser } from '../../api/user';
import http from '../../api/http';
import { useLocation } from 'react-router-dom';

export function SignUp() {
  const { email, password, username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch(); // 리덕스
  const nav = useLocation();
  //이름, 비밀번호, 비밀번호확인, 이름
  const [userEmail, setUserEmail] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [userName, setUserName] = useState('');

  //비밀번호 확인
  if (userPwd !== matchPwd) {
    var checkPassword = '비밀번호가 일치하지 않습니다.';
  } else {
    checkPassword = '';
  }

  //회원가입 성공
  const [success, setSuccess] = useState(false);

  // 회원가입
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (matchPwd !== userPwd) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.');
    } else {
      setSuccess(true);
      console.log('성공', email, userPwd, username);

      PostUser(email, userPwd) // 회원가입
        .then((data) => {
          console.log('회원가입 성공', data);

          GetUser(email, userPwd).then((data) => {
            // 로그인
            console.log('로그인 성공', data);
            const token = data.data.access_token;
            console.log('토큰!!!!!!!!!', token);

            window.localStorage.setItem('token', JSON.stringify(token)); // 로컬 스토리지에 토큰 저장

            http.defaults.headers.common['Authorization'] = token
              ? `Bearer ${token}`
              : null;

            PatchUserName(username) //닉넴 수정
              .then((data) => {
                console.log('닉네임 수정 완료', data);

                GetProfile()
                  .then((data) => {
                    console.log('프로필 가져오기 성공', data);
                    dispatch(setUser(data.data));
                    nav('/selectline'); // 최종 성공
                  })
                  .catch((err) => console.log('프로필 가져오기 실패'));
              })
              .catch((err) => console.log('닉넴 수정 실패', err));
          });
        })
        .catch((err) => console.log(err, '회원 가입 실패'));
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
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
                  <label htmlFor='userPwd'>
                    <input
                      type='password'
                      id='userPwd'
                      autoComplete='off'
                      className='input_style01 input_style02'
                      maxLength='50'
                    />
                  </label>
                  <button type='button' className='btn-input'>
                    show
                  </button>
                  <span className='login-error-gray' id='pw-error-alert'>
                    <span className='alert-icon'>
                      <FontAwesomeIcon icon={faExclamation} />
                    </span>
                    비밀번호는 8~20자 이내로 영문 대소문자, 숫자, 특수문자 중
                    3가지 이상 혼용하여 입력해 주세요.
                  </span>
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
        <h1>{email}</h1>
        <SnsBox />
      </div>
    </>
  );
}
