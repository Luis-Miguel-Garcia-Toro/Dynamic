import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { authStateStatus } from "../../../../../../common/domain";
import { useAppStore } from "../../../../../../common/infrastructure/store";
import { cartModeTypes, categoryStyle } from "../../../../domain";
import { useEcommerceStore } from "../../../../infrastructure/store";

export const useHeader = () => {
  const { configPages, changeHeaderHeight, toggleActiveSideCart } =
    useEcommerceStore();
  const authStatus = useAppStore((state) => state.authStatus);
  const totalItemsInCart = useEcommerceStore((state) => state.getTotalItems());
  const summaryInformationCart = useEcommerceStore((state) =>
    state.getSummaryInformation()
  );

  const cartMode = configPages?.cart_type;
  const imageLogo = configPages?.images?.icon;

  const showHeaderCategories =
    configPages?.categories_type === categoryStyle.HEADER;
  const headerRef = useRef(null);

  const navigate = useNavigate();

  const goToCart = () => {
    if (cartMode === cartModeTypes.WINDOW) {
      return navigate("/cart");
    }

    if (authStatus === authStateStatus.AUTHENTICATED) {
      toggleActiveSideCart();
    } else {
      navigate("/login");
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
    imageLogo,
    showHeaderCategories,
    summaryTotal: summaryInformationCart.total || 0,
    totalItemsInCart,
  };
};
