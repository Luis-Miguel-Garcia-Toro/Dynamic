import { authenticationMethods } from "@/ecommerce/common/domain";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppStore } from "../../../../../../../../common/infrastructure/store";
import { useEcommerceStore } from "../../../../../../../common/infrastructure/store";
import { fetchLogin } from "../../../../infrastructure/login-repository";
import { validateLoginForm } from "./validate-form";

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

  const [step, setStep] = useState(1);
  const { configPages } = useEcommerceStore();
  const { login, isSessionJustClosed, changeIsSessionJustClosed } =
    useAppStore();
  const [searchParams] = useSearchParams();

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

  const onLogin = async () => {
    const response = await fetchLogin(form);
    const redirectTo = searchParams.get("q");
    login(response.user, redirectTo);
  };

  const onSubmit = () => {
    const isValidForm = checkIsValidForm();
    if (!isValidForm) return;
    if (isActiveSteps && !isLastStep) {
      onNextStep();
      return;
    }

    onLogin();
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
    onChangeForm,
    onPrevStep,
    onSubmit,
    step,
    totalSteps: TOTAL_STEPS,
  };
};
