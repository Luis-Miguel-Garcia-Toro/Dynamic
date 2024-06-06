import { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { authStateStatus } from "../../../common/domain";
import { useAppStore } from "../../../common/infrastructure/store";
import { cartModeTypes } from "../../common/domain";
import { StoreLayout } from "../../common/presentation/components";

const CartPage = lazy(() =>
  import("../../pages/private/cart/presentation/Cart.page")
);
const MenuPage = lazy(() =>
  import("../../pages/private/menu/presentation/Menu.page")
);

export const PrivateRoutes = () => {
  const configPage = useAppStore((state) => state.configPages);
  const cartMode = configPage?.cart?.mode;

  const { authStatus } = useAppStore();
  const isAuthenticated = authStatus === authStateStatus.AUTHENTICATED;
  const location = useLocation();

  if (!isAuthenticated) {
    const isMainRoute = location.pathname === "/";
    return (
      <Navigate
        to={isMainRoute ? "/auth/login" : `/auth/login?q=${location.pathname}`}
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
