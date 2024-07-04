import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEcommerceStore } from "../../../../../../../common/infrastructure/store";
import { fetchGenerateCodeRecoveryPass } from "../../../../infrastructure/login-repository";

export const useRecoverPassword = ({ onChangeCurrentScreen }) => {
  const [identification, setIdentification] = useState("");
  const [identificationErrorMessage, setIdentificationErrorMessage] =
    useState("");

  const setUserDocument = useEcommerceStore((state) => state.setUserDocument);

  const generateCodeMutation = useMutation({
    mutationFn: ({ user }) => fetchGenerateCodeRecoveryPass(user),
    onSuccess: () => {
      setUserDocument(identification);
      onChangeCurrentScreen("code");
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al generar el código de validación. Por favor, inténtalo de nuevo más tarde."
      );
    },
  });

  const onChangeIdentification = (value) => {
    setIdentification(value);
    setIdentificationErrorMessage("");
  };

  const generateCode = (e) => {
    e.preventDefault();

    if (!identification) {
      setIdentificationErrorMessage("Por favor, introduce tu identificación");
      return;
    }

    generateCodeMutation.mutate({ user: identification });
  };

  return {
    generateCode,
    identification,
    identificationErrorMessage,
    isFetchingGenerateCode: generateCodeMutation.isPending,
    onChangeIdentification,
  };
};
