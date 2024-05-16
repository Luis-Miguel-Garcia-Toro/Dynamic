import { RootLayout } from "@/common/presentation/components";
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

  return (
    <Suspense fallback={<LoadingFull show={true} />}>
      <BrowserRouter>
        <RootLayout>
          <RootEcommerceLayout>
            <Routes>
              {authStatus === authStateStatus.AUTHENTICATED ? (
                <Route path="/*" element={<PrivateRoutes />} />
              ) : (
                <Route path="/*" element={<AuthRoutes />} />
              )}

              <Route path="/products/*" element={<ProductsRoutes />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </RootEcommerceLayout>
        </RootLayout>
      </BrowserRouter>
    </Suspense>
  );
};
