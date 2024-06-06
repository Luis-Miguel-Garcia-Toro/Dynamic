import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../../../../../common/infrastructure/store";

export const useStoreLayout = () => {
  const configPage = useAppStore((state) => state.configPages);
  const headerHeight = configPage?.globals?.headerHeight || 0;
  const cartMode = configPage?.cart?.mode;

  const redirectAfterLogin = useAppStore((state) => state.redirectAfterLogin);
  const cleanRedirectAfterLogin = useAppStore(
    (state) => state.cleanRedirectAfterLogin
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectAfterLogin) {
      cleanRedirectAfterLogin();
      navigate(redirectAfterLogin);
    }
  }, [redirectAfterLogin, cleanRedirectAfterLogin, navigate]);

  return {
    headerHeight,
    cartMode,
  };
};
