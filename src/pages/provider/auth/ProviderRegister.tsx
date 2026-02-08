import React from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../../../components/auth/Register";
import type { RegisterFormData } from "../../../types/auth.types";
import { authService } from "../../../services/auth.service";
import { showToast } from "../../../lib/toast";

export const ProviderRegister: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: RegisterFormData) => {
    try {
      console.log(
        "values in the technican register page sending to the backend:",
        values
      );
      const response = await authService.register(values, "PROVIDER");

      console.log("response in the provider register page:", response);

      if (response.success) {
        showToast({
          message: `OTP has been sent to ${values.email}`,
          type: "success",
        });

        const stateData = {
          email: response.data.email,
          action: "register",
          role: "PROVIDER",
        };

        console.log(
          "stateData in the provider register component:",
          stateData
        );
        

        navigate(`/provider/otp`, { state: stateData });
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

  return <Register role="PROVIDER" onSubmit={handleSubmit} />;
};
