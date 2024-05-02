import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store";
import { useState } from "react";
import { toast } from "react-toastify";
import { fetchSendCode } from "../../../../infrastructure/login-repository";

export const useContactSelection = () => {
  const {
    changeAuthMethod,
    changeVerificationCode,
    contactList,
    nit,
    onNextStep: nextStep,
    onPrevStep: prevStep,
  } = useLoginEmartDataStore();

  const [contactSelected, setContactSelected] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onChangeSelectedContact = (contact, index) => {
    setContactSelected({ ...contact, index });
  };

  const sendCode = async () => {
    try {
      setIsLoading(true);

      const phone = contactSelected.phone;
      const response = await fetchSendCode({ phone, nit });

      changeAuthMethod(contactSelected);
      changeVerificationCode(response.code);
      nextStep();

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(
        "Ocurrió un error al enviar el código de validación. Por favor intente de nuevo más tarde."
      );
    }
  };

  const onNextStep = () => {
    if (!contactSelected) {
      toast.error(
        "Debe seleccionar un medio de contacto para enviar el código de validación."
      );
      return;
    }

    sendCode();
  };

  return {
    contactList,
    contactSelected,
    isLoading,
    onChangeSelectedContact,
    onNextStep,
    prevStep,
  };
};
