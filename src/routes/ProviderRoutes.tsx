import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProviderPublicRoute } from "./PublicRoutes";
import { ProviderLogin } from "../pages/provider/auth/ProviderLogin";
import { ProviderRegister } from "../pages/provider/auth/ProviderRegister";
import { ProviderOtp } from "../pages/provider/auth/ProviderOtp";
import { ProviderForgotPassword } from "../pages/provider/auth/ProviderForgotPassword";
import { ProviderResetPassword } from "../pages/provider/auth/ProviderResetPassword";
import { useAppSelector } from "../hooks/useRedux";
import { PageNotFound } from "../components/common/PageNotFound";
import { ProviderPortal } from "../pages/provider/providerPages/ProviderPortal";
import { ProviderPrivateRoute } from "./PrivateRoutes";

export const ProviderRoutes: React.FC = () => {
  const user = useAppSelector(
    (state) => state.provider.providerData?.ownerName,
  );

  return (
    <Routes>
      <Route element={<ProviderPublicRoute />}>
        <Route path="login" element={<ProviderLogin />} />
        <Route path="register" element={<ProviderRegister />} />
        <Route path="otp" element={<ProviderOtp />} />
        <Route path="forgotpassword" element={<ProviderForgotPassword />} />
        <Route path="resetpassword" element={<ProviderResetPassword />} />
      </Route>

      <Route element={<ProviderPrivateRoute />}>
        <Route path="portal" element={<ProviderPortal />} />
      </Route>

      <Route
        path="*"
        element={<PageNotFound userName={user} userRole="PROVIDER" />}
      />
    </Routes>
  );
};
