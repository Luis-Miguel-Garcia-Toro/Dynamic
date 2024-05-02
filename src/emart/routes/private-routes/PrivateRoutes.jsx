import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() =>
  import("../../pages/private/home/presentation/Home.page")
);
const BranchPage = lazy(() =>
  import("../../pages/private/branch/presentation/Branch.page")
);

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/branch/:business" element={<BranchPage />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
