import api from './index';

export const signup = async (email, password, confirmPwd) => {
  const response = await api.post('/signup', {
    email,
    password,
    confirmPwd,
  });
  return response.data;
};
