import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authStateStatus } from "../../common/domain";
import { useAppStore } from "../../common/infrastructure/store";
import { LoadingFull } from "../../common/presentation/components";
import { RootEcommerceLayout } from "../common/presentation/components";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";
import { AuthRoutes, ProductsRoutes } from "./public-routes";

export const EcommerceRoutes = () => {
  const { authStatus } = useAppStore();
  const isAuthenticated = authStatus === authStateStatus.AUTHENTICATED;

  return (
    <Suspense fallback={<LoadingFull show={true} />}>
      <BrowserRouter>
        <RootEcommerceLayout>
          <Routes>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route
              path="/auth/*"
              element={
                isAuthenticated ? <Navigate to="/products" /> : <AuthRoutes />
              }
            />
            <Route path="/products/*" element={<ProductsRoutes />} />
          </Routes>
        </RootEcommerceLayout>
      </BrowserRouter>
    </Suspense>
  );
};
