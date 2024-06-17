import { authenticationMethods } from "@/ecommerce/common/domain"
import { useMutation } from "@tanstack/react-query"
import { jwtDecode } from "jwt-decode"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useAppStore } from "../../../../../../../../common/infrastructure/store"
import {
  useDataStore,
  useEcommerceStore,
} from "../../../../../../../common/infrastructure/store"
import {
  fetchGetAuthCode,
  fetchValidateCode,
} from "../../../../infrastructure/login-repository"
import { validateLoginForm } from "./validate-form"

const TOTAL_STEPS = 2;

const initialValues = {
  username: "",
  password: "",
  code: "",
};

const initialFormErrors = {
  username: "",
  password: "",
  code: "",
};

export const useLoginForm = () => {
  const [form, setForm] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [isActiveSteps, setIsActiveSteps] = useState(false);
  const [authToken, setAuthToken] = useState();

  const [step, setStep] = useState(1);
  const { configPages } = useEcommerceStore();
  const { login, isSessionJustClosed, changeIsSessionJustClosed } =
    useAppStore();
  const [searchParams] = useSearchParams();

  const { updateDataUser } = useDataStore();

  const onChangeForm = (value, key) => {
    setForm({ ...form, [key]: value });
    if (formErrors[key] && value.length > 0) {
      setFormErrors((currentErrors) => ({ ...currentErrors, [key]: "" }));
    }
  };

  const authMethod = useMemo(() => {
    const method = configPages?.auth_method;
    return method;
  }, [configPages]);

  const isLastStep = useMemo(() => {
    if (!isActiveSteps) return true;
    return step === TOTAL_STEPS;
  }, [step, isActiveSteps]);

  const checkEnableSteps = useCallback(() => {
    if (!configPages) {
      setIsActiveSteps(false);
      return;
    }

    const authMethod = configPages?.auth_method;
    if (
      !authMethod ||
      authMethod !== authenticationMethods.USER_PASSWORD_CODE
    ) {
      setIsActiveSteps(false);
      return;
    }

    setIsActiveSteps(true);
  }, [configPages]);

  const getCodeMutation = useMutation({
    mutationFn: ({ user, password }) => fetchGetAuthCode(user, password),
    onSuccess: (response) => {
      setAuthToken(response.Data.accessToken);
      onNextStep();
    },
    onError: (error) => {
      console.log(error);

      toast.error(
        "Ocurrió un error al enviar el código de validación, por favor verifica tus datos."
      );
    },
  });

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
      let userJWT = jwtDecode(authToken);
      const redirectTo = searchParams.get("q");
      updateDataUser(userJWT); //TODO: Eliminar, dejar solo el auth global
      login({...userJWT, userToken : authToken}, redirectTo);
    },
    onError: () => {
      toast.error(
        "Ocurrió un error al validar el código, el código es incorrecto."
      );
    },
  });

  const onNextStep = () => {
    if (step >= TOTAL_STEPS) return;
    setStep(step + 1);
  };

  const onPrevStep = () => {
    if (step <= 1) return;
    setStep(step - 1);
  };

  const checkIsValidForm = () => {
    const { isValid, validations } = validateLoginForm({
      form,
      authMethod,
      codeLength: 6,
      step: step,
    });

    if (!isValid) {
      setFormErrors(validations);
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    const isValidForm = checkIsValidForm();
    if (!isValidForm) return;
    if (isActiveSteps && !isLastStep) {
      // onNextStep();
      const dataLogin = {
        user: form.username,
        password: form.password,
      };

      getCodeMutation.mutate(dataLogin);
      return;
    }

    const { code, password, username } = form;
    validateCodeMutation.mutate({ code, password, user: username });
    // onLogin();
  };

  useEffect(() => {
    checkEnableSteps();
  }, [checkEnableSteps]);

  //clean store
  useEffect(() => {
    if (isSessionJustClosed) {
      changeIsSessionJustClosed(false);
    }
  }, [isSessionJustClosed, changeIsSessionJustClosed]);

  return {
    authMethod,
    form,
    formErrors,
    isActiveSteps,
    isLastStep,
    isPendingCode: getCodeMutation.isPending,
    isPendingValidateCode: validateCodeMutation.isPending,
    onChangeForm,
    onPrevStep,
    onSubmit,
    step,
    totalSteps: TOTAL_STEPS,
  };
};
