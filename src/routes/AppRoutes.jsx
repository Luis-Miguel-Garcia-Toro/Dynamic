import { useAuthStore } from "@/common/infrastructure/store";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";

export const AppRoutes = () => {
  const { status } = useAuthStore();
  
  return (
    <Routes>
      {status === "AUTHENTICATED" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
