import { useAuthStore } from "@/common/infrastructure/store/auth.store";
import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store/login-data.store";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  fetchCreatePassword,
  fetchLogin,
} from "../../../../infrastructure/login-repository";

const initialForm = {
  nit: "",
  password: "",
  newPassword: "",
  newPassword2: "",
};

const errorsForm = {
  nit: "",
  password: "",
  newPassword: "",
  newPassword2: "",
};

export const useLoginCredentials = () => {
  const {
    authMethodSelected,
    hasPassword,
    nit,
    onPrevStep: prevStep,
    resetData,
  } = useLoginEmartDataStore();
  const [form, setForm] = useState({ ...initialForm, nit });
  const [formErrors, setFormErrors] = useState(errorsForm);
  const { login } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: ({ nit, password }) => fetchLogin({ nit, password }),
    onSuccess: (response) => {
      const user = {
        nit: form.nit,
        authMethodSelected,
        businessUnitList: response,
      };
      login(user);
      resetData();
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al iniciar sesión, por favor verifica tus datos."
      );
    },
  });

  const createPasswordMutation = useMutation({
    mutationFn: ({ nit, password }) => fetchCreatePassword({ nit, password }),
    onSuccess: () => {
      loginMutation.mutate({ nit, password: form.newPassword });
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al crear la contrasena, por favor intenta de nuevo más tarde."
      );
    },
  });

  const onChangeFieldForm = (value, key) => {
    setForm({ ...form, [key]: value });
    setFormErrors({ ...formErrors, [key]: "" });
  };

  const checkIsValidForm = () => {
    if (hasPassword) {
      const passwordMessage =
        form.password.length > 0 ? "" : "La contraseña es requerida";
      const nitMessage = form.nit.length > 0 ? "" : "El nit es requerido";

      setFormErrors((currentErrors) => ({
        ...currentErrors,
        password: passwordMessage,
        nit: nitMessage,
      }));

      if (passwordMessage.length > 0 || nitMessage.length > 0) {
        return false;
      }
      return true;
    } else {
      const newPasswordMessage =
        form.newPassword.length > 0 ? "" : "La contraseña es requerida";
      const newPassword2Message =
        form.newPassword === form.newPassword2
          ? ""
          : "Las contraseñas no coinciden";

      setFormErrors((currentErrors) => ({
        ...currentErrors,
        newPassword: newPasswordMessage,
        newPassword2: newPassword2Message,
      }));

      if (newPasswordMessage.length > 0 || newPassword2Message.length > 0) {
        return false;
      }
      return true;
    }
  };

  const onLogin = () => {
    if (!checkIsValidForm()) return;
    const { nit, password } = form;
    loginMutation.mutate({ nit, password });
  };

  const createPassword = () => {
    if (!checkIsValidForm()) return;
    createPasswordMutation.mutate({ nit, password: form.newPassword });
  };

  const onNextStep = () => {
    if (hasPassword) {
      onLogin();
      return;
    }
    createPassword();
  };

  return {
    form,
    formErrors,
    hasPassword,
    isPendingCreatePass: createPasswordMutation.isPending,
    isPendingLogin: loginMutation.isPending,
    onChangeFieldForm,
    onNextStep,
    prevStep,
  };
};
