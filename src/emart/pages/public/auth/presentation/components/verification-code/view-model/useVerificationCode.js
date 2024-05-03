import { useAuthStore } from "@/common/infrastructure/store/auth.store"
import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store/login-data.store"
import { useState } from "react"
import { toast } from "react-toastify"

export const useVerificationCode = () => {
  const [code, setCode] = useState("");
  const [errorInputCode, setErrorInputCode] = useState("");

  const {
    businessList,
    changeAuthMethod,
    changeValidatedCode,
    contactSelected,
    hasPassword,
    nit,
    onPrevStep: prevStep,
    verificationCode,
    resetData,
  } = useLoginEmartDataStore();
  const { login } = useAuthStore();

  const onChangeCode = (newCode) => {
    if (newCode.length >= 6) {
      setErrorInputCode("");
    }

    setCode(newCode);
  };

  const checkCodeIsValid = () => {
    const isSameCode = verificationCode === code;

    if (!isSameCode) {
      toast.error("El código de validación es incorrecto.");
      return false;
    }

    return true;
  };

  const navigateCreatePassword = () => {
    changeAuthMethod("password");
  };

  const loginWithCode = () => {
    const user = {
      nit,
      contactSelected,
      businessUnitList: businessList,
    };
    login(user);
    resetData();
  };

  const onNextStep = () => {
    if (!code || code.length < 6) {
      setErrorInputCode("Debe ingresar el código de validación completo");
      return;
    }

    if (!checkCodeIsValid()) return;

    changeValidatedCode(true);

    if (!hasPassword) {
      navigateCreatePassword();
      return;
    }

    loginWithCode();
  };

  return {
    onChangeCode,
    code,
    prevStep,
    errorInputCode,
    onNextStep,
  };
};
