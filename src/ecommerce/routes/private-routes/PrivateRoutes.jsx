import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  StoreLayout
} from "../../common/presentation/components";

const CartPage = lazy(() =>
  import("../../pages/private/cart/presentation/Cart.page")
);

export const PrivateRoutes = () => {
  return (
    <StoreLayout>
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </StoreLayout>
  );
};
