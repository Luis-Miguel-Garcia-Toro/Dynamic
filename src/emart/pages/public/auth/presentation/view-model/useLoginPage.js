import { useEffect, useMemo } from "react";
import { useLoginEmartDataStore } from "../../../../../common/infrastructure/store";
import { screensList } from "./steps-screen-config";

export const useLoginPage = () => {
  const { changeTotalSteps, totalSteps, currentStep, onPrevStep } =
    useLoginEmartDataStore();

  const currentKeyStep = useMemo(() => {
    return screensList[currentStep - 1].key;
  }, [currentStep]);

  useEffect(() => {
    changeTotalSteps(screensList.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    currentKeyStep,
    currentStep,
    onPrevStep,
    screensList,
    totalSteps,
  };
};
