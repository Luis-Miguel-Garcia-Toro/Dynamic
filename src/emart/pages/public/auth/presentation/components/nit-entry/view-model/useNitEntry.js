import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { fetchGetPhoneList } from "../../../../infrastructure/login-repository";

export const useNitEntry = () => {
  const {
    changeNit,
    nit: nitStore,
    onNextStep: nextStep,
  } = useLoginEmartDataStore();
  const [nit, setNit] = useState(nitStore);
  const [errorNitField, setErrorNitField] = useState("");

  const getPhoneListMutation = useMutation({
    mutationFn: (nit) => fetchGetPhoneList(nit),
    onSuccess: (response) => {
      changeNit({ nit, contactList: response });
      nextStep();
    },
    onError: () => {
      toast.error(
        "Lo sentimos, ha ocurrido un error al validar el NIT. Por favor, inténtalo de nuevo más tarde."
      );
    },
  });

  const onChangeNit = (newNit) => {
    if (newNit.length > 3) {
      setErrorNitField("");
    }

    setNit(newNit);
  };

  const onNextStep = () => {
    if (!nit || nit.length <= 3) {
      setErrorNitField("Debes ingresar un NIT válido de más de 3 dígitos.");
      return;
    }
    getPhoneListMutation.mutate(nit);
  };

  return {
    errorNitField,
    isPendingMutation: getPhoneListMutation.isPending,
    nit,
    onChangeNit,
    onNextStep,
  };
};
