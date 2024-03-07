import UserService from "./services/userservice";

// 프로필 조회
export const GetProfile = async () => {
  try {
    const response = await UserService.getProfile();
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "프로필 조회 실패");
  }
};

// 로그인
export const GetUser = async (email, password) => {
  try {
    const response = await UserService.getUser(email, password);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "로그인 실패");
  }
};

// 로그아웃
export const GetLogout = async (email, password) => {
  try {
    const response = await UserService.getLogout(email, password);
    window.localStorage.removeItem("token"); // 토큰 삭제
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "로그아웃 실패");
  }
};

// 회원가입
export const PostUser = async (email, password) => {
  try {
    
    const response = await UserService.postUser(email, password);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "회원가입 실패");
  }
};

// 회원가입(닉네임)
export const PatchUserName = async username => {
  try {
    const response = await UserService.patchUserName(username);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "닉네임 수정 실패");
  }
};
