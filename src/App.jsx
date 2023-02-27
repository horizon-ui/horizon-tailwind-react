import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="horizon-tailwind-react/auth/*" element={<AuthLayout />} />
      <Route path="horizon-tailwind-react/admin/*" element={<AdminLayout />} />
      <Route
        path="horizon-tailwind-react/"
        element={<Navigate to="/admin" replace />}
      />
    </Routes>
  );
};

export default App;
