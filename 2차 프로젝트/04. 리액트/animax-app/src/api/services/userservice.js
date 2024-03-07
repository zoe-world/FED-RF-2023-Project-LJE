import http from '../http';

const UserService = {
  // 프로필 조회
  getProfile: () => http.get('/#/profile/'),

  // 로그인
  getUser: (email, password) =>
    http.post('/#/login/', {
      email: email,
      password: password,
    }),

  // 로그아웃
  getLogout: () => http.get('/'),

  // 회원가입 api
  postUser: (email, password) =>
    http.post('/#/signup/', {
      email: email,
      password: password,
    }),

  // 회원가입 : 이름
  patchUserName: (username) =>
    http.patch('/#/signup/', {
      username: username,
    }),
};

export default UserService;