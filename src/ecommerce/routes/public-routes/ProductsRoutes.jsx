import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StoreLayout } from "../../common/presentation/components";

const ProductsPage = lazy(() =>
  import("../../pages/public/products/presentation/Products.page")
);

export const ProductsRoutes = () => {
  return (
    <StoreLayout>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </StoreLayout>
  );
};
