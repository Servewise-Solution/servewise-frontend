import type { ButtonHTMLAttributes } from "react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

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
