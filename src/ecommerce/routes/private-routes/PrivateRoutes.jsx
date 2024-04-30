import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() =>
  import("@/ecommerce/pages/private/home/presentation/Home.page")
);

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
