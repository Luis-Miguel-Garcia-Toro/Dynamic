import { http } from "@/common/infrastructure/connection/Http"
import {
  createPasswordAdapter,
  loginAdapter,
  phoneListAdapter,
  sendCodeAdapter,
} from "./login.adapter"
import {GET_LIST_PHONE, VALIDATE_CODE_EMART, LOGIN_CW_PAY} from '../../../../Global/globalEmar'

export const fetchGetPhoneList = (nit) => {
  const params = {
    nit,
  };

  return http
    .post({
      url: GET_LIST_PHONE,
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
      url: VALIDATE_CODE_EMART,
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
      url: LOGIN_CW_PAY,
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
      url: CREATE_PASS,
      body: null,
      config: {
        params,
      },
    })
    .then((response) => createPasswordAdapter(response));
};
