import http from "./http";

const getUserList = () => {
  return http.get('users');
}

const userService = {
  getUserList,
};

export default userService;