import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./private-routes/PrivateRoutes";

const status = "NO-AUTHENTICATED";

export const AppRoutes = () => {
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
