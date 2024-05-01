import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authStateStatus } from "../../common/domain";
import { useAuthStore } from "../../common/infrastructure/store/auth.store";
import { RootLayout } from "../../common/presentation/components";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";

export const EmartRoutes = () => {
  const { status } = useAuthStore();

  return (
    //TODO: Configurar loading en el suspense
    <Suspense>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            {status === authStateStatus.AUTHENTICATED ? (
              <Route path="/*" element={<PrivateRoutes />} />
            ) : (
              <Route path="/*" element={<PublicRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </Suspense>
  );
};
