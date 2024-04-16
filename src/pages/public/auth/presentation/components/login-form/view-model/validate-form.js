import { authenticationMethods } from "@/common/infrastructure/store/types/ui.types";

export const validateLoginForm = ({
  form,
  authMethod,
  codeLength = 6,
  step = 1,
}) => {
  const { username, password, code } = form;
  let validations = {};

  const validateUserPassword = () => {
    validations.username = username.length > 0 ? "" : "El usuario es requerido";
    validations.password =
      password.length > 0 ? "" : "La contraseña es requerida";
  };

  const validateCode = () => {
    validations.code =
      code.length === codeLength
        ? ""
        : `El código debe tener ${codeLength} caracteres`;
  };

  const validationMap = {
    [authenticationMethods.USER_PASSWORD]: validateUserPassword,
    [authenticationMethods.USER_PASSWORD_CODE]:
      step === 1 ? validateUserPassword : validateCode,
    [authenticationMethods.CODE]: validateCode,
  };

  if (validationMap[authMethod]) {
    validationMap[authMethod]();
  }

  return {
    isValid: isValidForm(validations),
    validations,
  };
};

export const isValidForm = (validations = {}) => {
  const values = Object.values(validations);
  if (values.length === 0) return false;
  return values.every((value) => value === "");
};
