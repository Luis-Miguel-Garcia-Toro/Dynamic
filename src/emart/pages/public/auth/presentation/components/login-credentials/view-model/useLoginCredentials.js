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
    onPrevStep: prevStep,
    nit,
    hasPassword,
    authMethodSelected,
  } = useLoginEmartDataStore();
  const [form, setForm] = useState({ ...initialForm, nit });
  const [formErrors, setFormErrors] = useState(errorsForm);
  const { login } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: ({ nit, password }) => fetchLogin({ nit, password }),
    onSuccess: (response) => {
      console.log({ response });

      const user = {
        nit: form.nit,
        authMethodSelected,
        businessUnitList: response,
      };
      login(user);
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al iniciar sesión, por favor verifica tus datos."
      );

      //TODO: Eliminar

      const fakeBusinessList = [
        [
          {
            business: 1000,
            organization: "ALQUERIA",
            primary_color: "#ed1b2e",
            secondary_color: "#550008",
            logo: "https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/ company_logos/1000/logo.png",
            splash:
              "http://fuerzaventas2.celuwebdev.com/CLCGAZ_PRD/catalogo/prebel/splash.png",
            primary_color_web: "237,27,46",
            secondary_color_web: "85,0,8",
            comercial_name: "Productos Naturales De La Sabana S.A.S",
          },
        ],
        [
          {
            business: 1015,
            organization: "MEALS",
            primary_color: "#054493",
            secondary_color: "#dc2824",
            logo: "https://cw20-api-media.sandboxcw.net/api/contabo/get_file?document_aux=1015_file_0_1015-Mealsdecolombia&business_unit=1015&environment=QA&media_type=0&path=assets",
            splash:
              "http://fuerzaventas2.celuwebdev.com/CLCGAZ_PRD/catalogo/prebel/splash.png",
            primary_color_web: "48,105,178",
            secondary_color_web: "36,74,124",
            comercial_name: "Meals",
          },
        ],
      ];

      const user = {
        nit: form.nit,
        authMethodSelected,
        businessUnitList: fakeBusinessList,
      };
      login(user);
    },
  });

  const createPasswordMutation = useMutation({
    mutationFn: ({ nit, password }) => fetchCreatePassword({ nit, password }),
    onSuccess: (response) => {
      console.log({ response });
      loginMutation.mutate({ nit, password: form.newPassword });
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al crear la contrasena, por favor intenta de nuevo más tarde."
      );

      //TODO: Eliminar
      loginMutation.mutate({ nit, password: form.newPassword });
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
    console.log({ form });
    const { nit, password } = form;
    loginMutation.mutate({ nit, password });
  };

  const createPassword = () => {
    if (!checkIsValidForm()) return;
    console.log({ form });
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
