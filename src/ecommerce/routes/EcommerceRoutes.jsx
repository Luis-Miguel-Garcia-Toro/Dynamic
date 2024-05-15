import { RootLayout } from "@/common/presentation/components";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authStateStatus } from "../../common/domain";
import { useAppStore } from "../../common/infrastructure/store";
import { LoadingFull } from "../../common/presentation/components";
import { RootEcommerceLayout } from "../common/presentation/components";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";

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
