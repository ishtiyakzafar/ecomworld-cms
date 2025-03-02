import http from "./http";

const signin = (data) => {
  return http.post('auth/signin', data);
}

const authService = {
  signin
};

export default authService;