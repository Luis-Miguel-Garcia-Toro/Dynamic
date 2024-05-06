import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateLayout } from "../../common/presentation/components";

const HomePage = lazy(() =>
  import("../../pages/private/home/presentation/Home.page")
);
const BranchPage = lazy(() =>
  import("../../pages/private/branch/presentation/Branch.page")
);

export const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/branch/:business" element={<BranchPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </PrivateLayout>
  );
};
