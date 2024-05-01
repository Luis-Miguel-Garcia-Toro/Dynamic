import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<>Home</>} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
