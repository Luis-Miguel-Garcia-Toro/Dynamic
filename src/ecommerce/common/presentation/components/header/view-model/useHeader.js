import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { authStateStatus } from "../../../../../../common/domain";
import { useAppStore } from "../../../../../../common/infrastructure/store";
import { cartModeTypes, categoryStyle } from "../../../../domain";
import { useCartStore } from "../../../../infrastructure/store";

export const useHeader = () => {
  const configPage = useAppStore((state) => state.configPages);
  const changeHeaderHeight = useAppStore((state) => state.changeHeaderHeight);
  const authStatus = useAppStore((state) => state.authStatus);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const summaryInformationCart = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const toggleActiveSideCart = useAppStore(
    (state) => state.toggleActiveSideCart
  );

  const cartMode = configPage?.cart?.mode;

  const showHeaderCategories =
    configPage?.categories?.categoriesStyle === categoryStyle.HEADER;
  const headerRef = useRef(null);

  const navigate = useNavigate();

  const goToCart = () => {
    if (cartMode === cartModeTypes.WINDOW) {
      return navigate("/cart");
    }

    if (authStatus === authStateStatus.AUTHENTICATED) {
      toggleActiveSideCart();
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newHeight = entry.target.getBoundingClientRect().height;
        changeHeaderHeight(newHeight);
      }
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    goToCart,
    headerRef,
    showHeaderCategories,
    summaryTotal: summaryInformationCart.total || 0,
    totalItemsInCart,
  };
};
