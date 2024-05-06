import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  authMethodsViews
} from "../../../../../../../../../common/domain";
import { fetchSendCode } from "../../../../../../infrastructure/login-repository";

export const useContactSelection = () => {
  const {
    changeContactSelected,
    changeCurrentAuthMethodScreen,
    contactList,
    hasPassword,
    nit,
    onNextStep: nextStep,
    onPrevStep,
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
      const { code, business } = await fetchSendCode({
        phone,
        nit,
        autenticate_code: hasPassword ? 1 : 0,
      });

      changeContactSelected({ contactSelected, code, business });
      setIsLoading(false);

      if (hasPassword) {
        nextStep();
      } else {
        changeCurrentAuthMethodScreen(authMethodsViews.VERIFICATION_CODE);
      }
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
      changeCurrentAuthMethodScreen(authMethodsViews.AUTH_METHODS);
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
