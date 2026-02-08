import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserRegister } from "../pages/user/auth/UserRegister";
import { UserPublicRoute } from "./PublicRoutes";
import { UserPrivateRoute } from "./PrivateRoutes";
import { UserLogin } from "../pages/user/auth/UserLogin";
import { UserOtp } from "../pages/user/auth/UserOtp";
import { UserForgotPassword } from "../pages/user/auth/UserForgotPassword";
import { UserResetPassword } from "../pages/user/auth/UserResetPassword";
import { UserHome } from "../pages/user/userPages/UserHome";

export const UserRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<UserPublicRoute />}>
        <Route path="login" element={<UserLogin />} />
        <Route path="register" element={<UserRegister />} />
        <Route path="otp" element={<UserOtp />} />
        <Route path="forgotpassword" element={<UserForgotPassword />} />
        <Route path="resetpassword" element={<UserResetPassword />} />
      </Route>

      <Route element={<UserPrivateRoute />}>
        <Route path="home" element={<UserHome />} />
      </Route>
    </Routes>
  );
};
