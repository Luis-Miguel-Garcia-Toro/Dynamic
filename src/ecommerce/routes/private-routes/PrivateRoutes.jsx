import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppStore } from "../../../common/infrastructure/store"
import { cartModeTypes } from "../../common/domain"
import { StoreLayout } from "../../common/presentation/components"

const CartPage = lazy(() =>
  import("../../pages/private/cart/presentation/Cart.page")
);

export const PrivateRoutes = () => {
  const configPage = useAppStore((state) => state.configPages);
  const cartMode = configPage?.cart?.mode;

  return (
    <StoreLayout>
      <Routes>
        {cartMode === cartModeTypes.WINDOW && (
          <Route path="/cart" element={<CartPage />} />
        )}
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </StoreLayout>
  );
};
