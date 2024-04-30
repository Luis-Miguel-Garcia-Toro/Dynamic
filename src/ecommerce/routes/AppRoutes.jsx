import { RootLayout } from "@/common/presentation/components";
import { authStateStatus } from "../common/domain";
import { useAuthStore } from "../common/infrastructure/store";

import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootEcommerceLayout } from "../common/presentation/components/layouts/root-ecommerce-layout/RootEcommerceLayout";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";

export const AppRoutes = () => {
  const { status } = useAuthStore();

  return (
    //TODO: Configurar loading en el suspense
    <Suspense>
      <BrowserRouter>
        <RootLayout>
          <RootEcommerceLayout>
            <Routes>
              {status === authStateStatus.AUTHENTICATED ? (
                <Route path="/*" element={<PrivateRoutes />} />
              ) : (
                <Route path="/*" element={<PublicRoutes />} />
              )}

              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </RootEcommerceLayout>
        </RootLayout>
      </BrowserRouter>
    </Suspense>
  );
};
