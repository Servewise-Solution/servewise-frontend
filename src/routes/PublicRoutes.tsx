import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import type { PublicRouteProps } from "../types/component.types";
import cookie from "js-cookie";

const PublicRoute: React.FC<PublicRouteProps> = ({ role, redirectTo }) => {
  const token = cookie.get("access_token");

  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (role === payload.role?.toUpperCase()) {
      return <Navigate to={redirectTo} />;
    }
  }

  return <Outlet />;
};

export const UserPublicRoute: React.FC = () => {
  return <PublicRoute role="USER" redirectTo="/user/home" />;
};

export const ProviderPublicRoute: React.FC = () => {
  return <PublicRoute role="PROVIDER" redirectTo="/provider/portal" />;
};

export const AdminPublicRoute: React.FC = () => {
  return <PublicRoute role="ADMIN" redirectTo="/admin/dashboard" />;
};
