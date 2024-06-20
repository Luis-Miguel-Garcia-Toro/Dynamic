import { http } from "../../../../../common/infrastructure/connection/Http";
import {
  LOGIN_USER,
  VALIDATE_CODE,
  BUSINESS_UNIT,
  ENV
} from "../../../../common/infrastructure/globals/globals";

//TODO: Crear adapter
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
