import { useUIStore } from "@/common/infrastructure/store";
import { authenticationMethods } from "@/common/infrastructure/store/types";
import { useCallback, useEffect, useMemo, useState } from "react";

const TOTAL_STEPS = 2;

const initialValues = {
  username: "",
  password: "",
  code: "",
};

export const useLoginForm = () => {
  const [form, setForm] = useState(initialValues);
  const [isActiveSteps, setIsActiveSteps] = useState(false);
  const [step, setStep] = useState(1);
  const { configPages } = useUIStore();

  const onChangeForm = (value, key) => {
    setForm({ ...form, [key]: value });
  };

  const authMethod = useMemo(() => {
    const method = configPages?.auth?.login?.authMethod;
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

    const authMethod = configPages?.auth?.login?.authMethod;
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

  const onLogin = () => {
    alert("Login...");
  };

  const onSubmit = () => {
    if (isActiveSteps && !isLastStep) {
      onNextStep();
      return;
    }

    onLogin();
  };

  useEffect(() => {
    checkEnableSteps();
  }, [checkEnableSteps]);

  return {
    authMethod,
    form,
    isActiveSteps,
    isLastStep,
    onChangeForm,
    onPrevStep,
    onSubmit,
    totalSteps: TOTAL_STEPS,
    step,
  };
};
