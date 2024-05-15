import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateLayout } from "../../common/presentation/components";

const HomePage = lazy(() =>
  import("@/ecommerce/pages/private/home/presentation/Home.page")
);

export const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </PrivateLayout>
  );
};
