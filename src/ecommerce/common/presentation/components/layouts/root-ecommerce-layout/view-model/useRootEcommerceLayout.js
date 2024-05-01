import { useUIStore } from "@/common/infrastructure/store/ui.store";
import {
  authenticationMethods,
  uiLoginType,
} from "@ecommerce/common/domain/ui/ui.types";
import { useCallback } from "react";

const defaultConfigPage = {
  auth: {
    login: {
      uiType: uiLoginType.IMAGE_LEFT,
      authMethod: authenticationMethods.USER_PASSWORD,
      logo: "https://www.celuweb.com/wp-content/uploads/2020/04/logo_celuweb.png",
      backgroundImage:
        "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress",
      codeValidationLength: 6,
    },
  },
};

export const useRootEcommerceLayout = () => {
  const updateConfigPage = useUIStore((state) => state.updateConfigPage);

  const updateConfigPageEcommerce = useCallback(() => {
    updateConfigPage(defaultConfigPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    updateConfigPageEcommerce,
  };
};
