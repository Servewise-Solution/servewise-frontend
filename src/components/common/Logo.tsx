import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  role: "user" | "admin" | "provider";
  className?: string;
  size?: "small" | "medium" | "large";
}

export const Logo: React.FC<LogoProps> = ({
  role,
  className = "",
  size = "medium",
}) => {
  const getNavigationLink = () => {
    switch (role) {
      case "user":
        return "/user/home";
      case "provider":
        return "/provider/portal";
      case "admin":
        return "/admin/dashboard";
      default:
        return "/";
    }
  };

  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-3xl",
  };

  const subTextSize = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  };

  return (
    <Link
      to={getNavigationLink()}
      className={`flex items-center ${className}`}
    >
      <div className="flex flex-col leading-none">
        {/* Brand Name */}
        <span
          className={`${sizeClasses[size]} font-bold tracking-wide text-slate-800`}
        >
          Servewise
          <span className="text-cyan-600 ml-1">Solutions</span>
        </span>

        <span
          className={`${subTextSize[size]} text-slate-500 tracking-wide`}
        >
          Smart Service Management
        </span>
      </div>
    </Link>
  );
};
