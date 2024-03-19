import http from '../http';

const UserService = {
  // 프로필 조회
  getProfile: () => http.get('/#/profile/'),

  // 로그인
  getUser: (email, password) =>
    http.get('/#/login/', {
      email: email,
      password: password,
    }),

  // 로그아웃
  getLogout: () => http.get('/'),

  // 회원가입 api
  postUser: (email, password) =>
    http.get(
      '/#/signup/',
      
      {
        email: email,
        password: password,
      }
    ),

  // 회원가입 : 이름
  patchUserName: (username) =>
    http.get('/#/signup/', {
      username: username,
    }),
};

export default UserService;
