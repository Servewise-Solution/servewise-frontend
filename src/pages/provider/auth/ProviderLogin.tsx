import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../../../components/auth/Login";
import { authService } from "../../../services/auth.service";
import { showToast } from "../../../lib/toast";
import Cookies from "js-cookie";
import { setProviderData } from "../../../redux/slices/providerSlice";
import type { IProvider } from "../../../models/provider";
import type { LoginFormData } from "../../../types/auth.types";

export const ProviderLogin: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSubmit = async (values: LoginFormData) => {
    try {
      const response = await authService.login(values, "PROVIDER");
      console.log("response from the provider login page:", response);

      if (response.success) {
        showToast({
          message: response.message,
          type: "success",
        });

        const expiresIn15Minutes = new Date(
          new Date().getTime() + 15 * 60 * 1000,
        );

        Cookies.set("access_token", response.data.access_token, {
          expires: expiresIn15Minutes,
        });

        const providerData = response.data.provider as IProvider;
        dispatch(setProviderData(providerData));

        navigate("/provider/portal");
      } else {
        showToast({
          message: response.message,
          type: "error",
        });
      }
    } catch (err) {
      const error = err as { response?: { data?: { message?: string } } };
      const errorMessage =
        error?.response?.data?.message || "Something went wrong!";

      showToast({
        message: errorMessage,
        type: "error",
      });
      throw new Error(errorMessage);
    }
  };

  return <Login role="PROVIDER" onsubmit={handleLoginSubmit} />;
};
