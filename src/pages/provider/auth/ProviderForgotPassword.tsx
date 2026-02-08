import React from "react";
import { useNavigate } from "react-router-dom";
import { ForgotPassword } from "../../../components/auth/ForgotPassword";
import { authService } from "../../../services/auth.service";
import { showToast } from "../../../lib/toast";

export const ProviderForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const handleForgotPassword = async (email: string) => {
    try {
      const response = await authService.forgotPassword(email, "PROVIDER");
      showToast({
        message: response.message || `OTP sent to ${email}.`,
        type: "success",
      });

      navigate(`/provider/otp`, {
        state: { email: email, action: "forgot" },
      });

      return response;
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

  return <ForgotPassword role="PROVIDER" onSubmit={handleForgotPassword} />;
};
