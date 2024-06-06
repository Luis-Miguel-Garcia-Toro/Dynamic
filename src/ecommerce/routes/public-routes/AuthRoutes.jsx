import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() =>
  import("../../pages/public/auth/presentation/Login.page")
);

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
