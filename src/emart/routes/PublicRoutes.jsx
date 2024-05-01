import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() =>
  import("../pages/public/auth/presentation/Login.page")
);

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
