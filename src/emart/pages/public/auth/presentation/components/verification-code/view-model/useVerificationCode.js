import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store/login-data.store";
import { useState } from "react";
import { toast } from "react-toastify";

export const useVerificationCode = () => {
  const [code, setCode] = useState("");
  const [errorInputCode, setErrorInputCode] = useState("");

  const {
    onNextStep: nextStep,
    onPrevStep: prevStep,
    verificationCode,
  } = useLoginEmartDataStore();

  const onChangeCode = (newCode) => {
    if (newCode.length >= 6) {
      setErrorInputCode("");
    }

    setCode(newCode);
  };

  const checkCodeIsValid = () => {
    console.log({ verificationCode });
    const isSameCode = verificationCode === code;

    if (!isSameCode) {
      toast.error("El código de validación es incorrecto.");
      return;
    }

    nextStep();
  };

  const onNextStep = () => {
    if (!code || code.length < 6) {
      setErrorInputCode("Debe ingresar el código de validación completo");
      return;
    }

    checkCodeIsValid();
  };

  return {
    onChangeCode,
    code,
    prevStep,
    errorInputCode,
    onNextStep,
  };
};
