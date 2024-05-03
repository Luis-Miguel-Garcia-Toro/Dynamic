import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store"
import { useState } from "react"
import { toast } from "react-toastify"
import { fetchSendCode } from "../../../../infrastructure/login-repository"

export const useContactSelection = () => {
  const {
    onPrevStep,
    changeAuthMethod,
    changeBusinessList,
    changeContactSelected,
    changeValidatedCode,
    changeVerificationCode,
    contactList,
    hasPassword,
    nit,
    onNextStep: nextStep,
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
      const response = await fetchSendCode({
        phone,
        nit,
        autenticate_code: hasPassword ? 1 : 0,
      });

      changeContactSelected(contactSelected);
      changeVerificationCode(response.code);
      changeBusinessList(response.business);
      changeValidatedCode(false);
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

  const onBackStep = () => {
    if (!hasPassword) {
      onPrevStep();
    } else {
      changeAuthMethod(undefined);
    }
  };

  return {
    contactList,
    contactSelected,
    isLoading,
    onChangeSelectedContact,
    onNextStep,
    onBackStep,
  };
};
