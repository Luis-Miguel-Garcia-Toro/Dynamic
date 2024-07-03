import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEcommerceStore } from "../../../../../../../common/infrastructure/store";
import { fetchUpdatePassword } from "../../../../infrastructure/login-repository";

const initialValues = {
  password: "",
  password2: "",
};

const initialFormErrors = {
  password: "",
  password2: "",
};

export const useChangePassword = ({ onChangeCurrentScreen }) => {
  const [form, setForm] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const configPage = useEcommerceStore((state) => state.configPages);
  const { loginScreens = {} } = configPage;
  const { userDocument = "" } = loginScreens;

  const updatePasswordMutation = useMutation({
    mutationFn: ({ user, password }) => fetchUpdatePassword({ user, password }),
    onSuccess: (response) => {
      console.log({ response });

      onChangeCurrentScreen("login");
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde."
      );
    },
  });

  const onChangeForm = (value, key) => {
    setForm({ ...form, [key]: value });
    if (formErrors[key] && value.length > 0) {
      setFormErrors((currentErrors) => ({ ...currentErrors, [key]: "" }));
    }
  };

  const checkIsValidPassword = () => {
    if (!form.password || !form.password2) {
      setFormErrors({
        password: form.password ? "" : "La contraseña es requerida",
        password2: form.password2
          ? ""
          : "La confirmación de la contraseña es requerida",
      });

      return false;
    }

    if (form.password !== form.password2) {
      setFormErrors({
        password: "Las contraseñas no coinciden",
        password2: "Las contraseñas no coinciden",
      });

      return false;
    }

    return true;
  };

  const saveNewPassword = (e) => {
    e.preventDefault();

    if (!checkIsValidPassword()) return;

    updatePasswordMutation.mutate({
      user: userDocument,
      password: form.password,
    });
  };

  return {
    form,
    formErrors,
    isFetchingChangePassword: updatePasswordMutation.isPending,
    onChangeForm,
    saveNewPassword,
  };
};
