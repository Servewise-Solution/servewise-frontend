import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { authService } from "../services/auth.service";
import type { Role } from "../types/auth.types";
import { showToast } from "../lib/toast";
import { useDispatch } from "react-redux";

import { clearUserData } from "../redux/slices/userSlice";
import { clearProviderData } from "../redux/slices/providerSlice";
import { clearAdminData } from "../redux/slices/adminSlice";

const useLogout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const logOut = async () => {
    let currentInterface: Role = "USER";

    if (location.pathname.includes("/admin/")) {
      currentInterface = "ADMIN";
    } else if (location.pathname.includes("/provider/")) {
      currentInterface = "PROVIDER";
    } else if (location.pathname.includes("/user/")) {
      currentInterface = "USER";
    }

    try {
      const response = await authService.logOut(currentInterface);

      if (response.success) {
        switch (currentInterface) {
          case "USER":
            navigate("/user/login", { replace: true });
            break;
          case "PROVIDER":
            navigate("/provider/login", { replace: true });
            break;
          case "ADMIN":
            navigate("/admin/login", { replace: true });
            break;
          default:
            navigate("/", { replace: true });
        }

        switch (currentInterface) {
          case "USER":
            dispatch(clearUserData());
            break;
          case "PROVIDER":
            dispatch(clearProviderData());
            break;
          case "ADMIN":
            dispatch(clearAdminData());
            break;
        }

        Cookies.remove("access_token");

        showToast({
          type: "success",
          message: response.message || "Logged out successfully",
        });
      } else {
        showToast({
          type: "error",
          message: response.message || "Logout failed",
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
      showToast({
        type: "error",
        message: "Failed to logout. Please try again.",
      });
    }
  };

  return logOut;
};

export default useLogout;
