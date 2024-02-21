// Animax 회원가입 컴포넌트

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TopArea } from '../layout/TopArea';
import { SnsBox } from './SnsBox';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import '../../css/signup.css';

export function SignUp() {
  const step = 6;
  return (
    <>
      <TopArea cat='signup' />
      <div className='signup_form'>
        <div className='step_bar'>
          <span className='step'>
            <span className='sr-only'>진행단계 {step}</span>
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
                  <label htmlFor='user_id'>
                    <input
                      type='text'
                      name='userId'
                      id='user_id'
                      placeholder='animax@example.com'
                      className='input_style01 input_style02 error-msg'
                      maxLength='50'
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
                  <label htmlFor='user-pw'>
                    <input
                      type='text'
                      name='userId'
                      id='user-pw'
                      placeholder='animax@example.com'
                      className='input_style01 input_style02'
                      maxLength='50'
                    />
                  </label>
                  <button
                    type='button'
                    className='btn-input'>
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
                  <a href='#'>
                    Anibox 회원가입
                  </a>
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
