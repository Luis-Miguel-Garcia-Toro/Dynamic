import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEcommerceStore } from "../../../../../../../common/infrastructure/store";
import { fetchValidateCode } from "../../../../infrastructure/login-repository";

export const useCodeRecoverPassword = ({ onChangeCurrentScreen }) => {
  const [code, setCode] = useState("");
  const [errorCodeMessage, setErrorCodeMessage] = useState("");
  const configPage = useEcommerceStore((state) => state.configPages);
  const { loginScreens = {} } = configPage;
  const { userDocument = "" } = loginScreens;

  const validateCodeMutation = useMutation({
    mutationFn: ({ user, password, code }) =>
      fetchValidateCode(user, password, code),
    onSuccess: (response) => {
      if (response.state === "ERROR") {
        toast.error(
          "Ocurrió un error al validar el código, el código es incorrecto."
        );
        return;
      }

      onChangeCurrentScreen("change");
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al validar el código, el código es incorrecto."
      );
    },
  });

  const onChangeCode = (newCode) => {
    setCode(newCode);
    setErrorCodeMessage("");
  };

  const validateCode = (e) => {
    e.preventDefault();

    if (code.length < 6) {
      setErrorCodeMessage("El código debe tener 6 caracteres");
      return;
    }

    validateCodeMutation.mutate({ user: userDocument, password: "", code });
  };

  return {
    code,
    errorCodeMessage,
    isFetchingValidateCode: validateCodeMutation.isPending,
    onChangeCode,
    validateCode,
  };
};
