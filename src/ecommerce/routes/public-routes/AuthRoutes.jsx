import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginBoot from "../../pages/public/auth/presentation/login-boot/LoginBoot";

const LoginPage = lazy(() =>
  import("../../pages/public/auth/presentation/Login.page")
);


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/orderbot" element={<LoginBoot />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
