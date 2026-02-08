import type { ButtonHTMLAttributes } from "react";
import type { Role } from "./auth.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  isLoading?: boolean;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showToggle?: boolean;
  error?: string;
  touched?: boolean;
}

export interface ToastMessageProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
}

export interface OTPInputProps {
  length: number;
  value: string;
  onchange: (otp: string) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  confirmButtonColor?: "red" | "green" | "blue";
  fullContent?: boolean;
  className?: string;
  disabled?: boolean;
  hideButtons?: boolean;
}

export interface AuthLayoutProps {
  role: "USER" | "ADMIN" | "PROVIDER";
  children: React.ReactNode;
}

export interface PageNotFoundProps {
  userRole?: Role;
  userName?: string;
}

export interface PublicRouteProps {
  role: Role;
  redirectTo: string;
}

export interface PrivateRouteProps {
  role: Role;
}
