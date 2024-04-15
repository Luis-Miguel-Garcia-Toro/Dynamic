import { useAuthStore } from "@/common/infrastructure/store";
import { authStateStatus } from "@/common/infrastructure/store/types";

import { RootLayout } from "@/common/presentation/components";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";

export const AppRoutes = () => {
  const { status } = useAuthStore();

  return (
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
