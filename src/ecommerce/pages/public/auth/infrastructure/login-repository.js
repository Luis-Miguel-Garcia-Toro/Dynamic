import { http } from "../../../../../common/infrastructure/connection/Http";
import {
  BUSINESS_UNIT,
  ENV,
  LOGIN_USER,
  RECOVER_PASSWORD,
  UPDATE_PASSWORD,
  VALIDATE_CODE,
} from "../../../../common/infrastructure/globals/globals";

export const fetchGetAuthCode = (user, password) => {
  const body = {
    user,
    password,
    business_code: BUSINESS_UNIT,
    environment: ENV,
  };

  return http.post({
    url: `${LOGIN_USER}`,
    body,
  });
};

export const fetchValidateCode = (user, password, code) => {
  const body = {
    user,
    password,
    business_code: BUSINESS_UNIT,
    environment: ENV,
  };

  return http.post({
    url: `${VALIDATE_CODE}code=${code}`,
    body,
  });
};

export const fetchGenerateCodeRecoveryPass = (user) => {
  return http.post({
    url: RECOVER_PASSWORD,
    body: {
      branch: user,
      business_unit: BUSINESS_UNIT,
      environment: ENV,
    },
  });
};

export const fetchUpdatePassword = ({ user, password }) => {
  return http.post({
    url: UPDATE_PASSWORD,
    body: {
      password,
      business_code: BUSINESS_UNIT,
      environment: ENV,
      user: user,
    },
  });
};
