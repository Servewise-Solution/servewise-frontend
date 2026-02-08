import React from "react";
import { AdminPublicRoute } from "./PublicRoutes";
import { Route, Routes } from "react-router-dom";
import { AdminLogin } from "../pages/admin/auth/AdminLogin";
import { PageNotFound } from "../components/common/PageNotFound";
import AdminDashboard from "../pages/admin/adminPages/AdminDashboard";
import { AdminPrivateRoute } from "./PrivateRoutes";

export const AdminRoutes: React.FC = () => {
  const user: string = "Admin";

  return (
    <Routes>
      <Route element={<AdminPublicRoute />}>
        <Route path="login" element={<AdminLogin />} />
      </Route>

      <Route element={<AdminPrivateRoute />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      <Route
        path="*"
        element={<PageNotFound userName={user} userRole="ADMIN" />}
      />
    </Routes>
  );
};
