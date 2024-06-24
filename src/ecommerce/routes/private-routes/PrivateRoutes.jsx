import { lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { authStateStatus } from "../../../common/domain";
import { useAppStore } from "../../../common/infrastructure/store";
import { cartModeTypes } from "../../common/domain";
import { useEcommerceStore } from "../../common/infrastructure/store";
import { StoreLayout } from "../../common/presentation/components";

const CartPage = lazy(() =>
  import("../../pages/private/cart/presentation/Cart.page")
);
const MenuPage = lazy(() =>
  import("../../pages/private/menu/presentation/Menu.page")
);

export const PrivateRoutes = () => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const cartMode = configPage?.cart_type;

  const { authStatus, isSessionJustClosed } = useAppStore();
  const isAuthenticated = authStatus === authStateStatus.AUTHENTICATED;
  const location = useLocation();

  if (!isAuthenticated) {
    const isMainRoute = location.pathname === "/";
    const redirectBeforeLogin = !isMainRoute && !isSessionJustClosed;

    return (
      <Navigate
        to={
          redirectBeforeLogin
            ? `/auth/login?q=${location.pathname}`
            : "/auth/login"
        }
      />
    );
  }

  return (
    <StoreLayout>
      <Routes>
        {cartMode === cartModeTypes.WINDOW && (
          <Route path="/cart" element={<CartPage />} />
        )}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </StoreLayout>
  );
};
