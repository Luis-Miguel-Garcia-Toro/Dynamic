import { useMemo, useState } from "react";
import { screensList } from "./steps-screen-config";

export const useLoginPage = () => {
  //TODO: Logica en un estado global, para evitar enviar props a cada componente
  const [currentStepNumber, setCurrentStepNumber] = useState(1);

  const currentKeyStep = useMemo(() => {
    return screensList[currentStepNumber - 1].key;
  }, [currentStepNumber]);

  const backStep = () => {
    if(currentStepNumber === 1) return
    setCurrentStepNumber(currentStepNumber - 1);
  };

  const nextStep = () => {
    if(currentStepNumber === screensList.length) return
    setCurrentStepNumber(currentStepNumber + 1);
  }

  return {
    backStep,
    currentKeyStep,
    currentStepNumber,
    nextStep,
    screensList,
  };
};
