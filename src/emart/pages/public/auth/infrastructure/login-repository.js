import { http } from "@/common/infrastructure/connection/Http"
import {
  createPasswordAdapter,
  loginAdapter,
  phoneListAdapter,
  sendCodeAdapter,
} from "./login.adapter"

const API_EMART_URL = import.meta.env.VITE_API_EMART_URL;
// const API_EMART_URL = 'https://api-tiendaclubshop.sandboxcw.net/api';


export const fetchGetPhoneList = (nit) => {
  const params = {
    nit,
  };

  return http
    .post({
      url: `${API_EMART_URL}/auth/get_list_phone`,
      body: null,
      config: {
        params,
      },
    })
    .then((response) => phoneListAdapter(response));
};

export const fetchSendCode = ({ nit, phone, autenticate_code }) => {
  const params = {
    nit,
    phone,
    autenticate_code
  };

  return http
    .get({
      url: `${API_EMART_URL}/auth/send_validation_code`,
      config: {
        params,
      },
    })
    .then((response) => sendCodeAdapter(response));
};

export const fetchLogin = ({ nit, password }) => {
  const params = {
    nit,
    pass: password,
  };

  return http
    .post({
      url: `${API_EMART_URL}/auth/login_cwpay`,
      body: null,
      config: {
        params,
      },
    })
    .then((response) => loginAdapter(response));
};

export const fetchCreatePassword = ({ nit, password }) => {
  const params = {
    nit,
    pass: password,
  };

  return http
    .post({
      url: `${API_EMART_URL}/auth/create_password`,
      body: null,
      config: {
        params,
      },
    })
    .then((response) => createPasswordAdapter(response));
};
