import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store"

export const useAuthMethodSelection = () => {
  const { changeAuthMethod, onPrevStep, onNextStep } = useLoginEmartDataStore();

  const onSelectedAuthMethod = (value) => {
    changeAuthMethod(value);
    if (value === "password") {
      onNextStep();
    }
  };

  return {
    onPrevStep,
    onSelectedAuthMethod,
  };
};
