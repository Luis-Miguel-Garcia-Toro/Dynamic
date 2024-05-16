import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateLayout } from "../../common/presentation/components";

const ProductsPage = lazy(() =>
  import("../../pages/private/products/presentation/Products.page")
);

const CartPage = lazy(() =>
  import("../../pages/private/cart/presentation/Cart.page")
);

export const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/home" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </PrivateLayout>
  );
};
