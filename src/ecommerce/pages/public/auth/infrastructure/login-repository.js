import { authAdapter } from "./login-adapter";

export const fetchLogin = (data) => {
  //   const endpoint = "auth/login";

  //   return http
  //     .post({
  //       url: `${import.meta.env.VITE_API_URL}/${endpoint}`,
  //       body: data,
  //     })
  //     .then((response) => authAdapter(response));

  return authAdapter(data);
};
