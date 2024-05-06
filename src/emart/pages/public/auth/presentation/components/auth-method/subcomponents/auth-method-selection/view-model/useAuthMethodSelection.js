import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store";
import { authMethodsViews } from "../../../../../../../../../common/domain";

export const useAuthMethodSelection = () => {
  const {
    changeAuthMethod,
    changeCurrentAuthMethodScreen,
    onNextStep,
    onPrevStep,
  } = useLoginEmartDataStore();

  const onSelectedAuthMethod = (value) => {
    changeAuthMethod(value);
    if (value === "password") {
      onNextStep();
    } else {
      changeCurrentAuthMethodScreen(authMethodsViews.CONTACT_SELECTION);
    }
  };

  return {
    onPrevStep,
    onSelectedAuthMethod,
  };
};
