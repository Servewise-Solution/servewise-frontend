import type { Iadmin } from "../models/admin";
import type { IProvider } from "../models/provider";
import type { Iuser } from "../models/user";

export type Role = "USER" | "ADMIN" | "PROVIDER";
export type UserLikeRoles = Extract<Role, "USER" | "PROVIDER">;
export type OtpPurpose = "REGISTRATION" | "PASSWORD_RESET";

export interface RegisterFormData {
  username: string;
  email: string;
  phone: string;
  password: string;
  role: UserLikeRoles;
}

export interface RegisterFormValues {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    email: string;
  };
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    admin: Iadmin;
    user: Iuser;
    provider: IProvider;
    access_token: string;
  };
  message: string;
  status?: number;
}

export interface OTPVerification {
  email: string;
  otp: string;
  purpose: OtpPurpose;
}

export interface VerifyResetOtpResponse {
  success: boolean;
  message: string;
  status: number;
}

export interface RegisterProps {
  role: UserLikeRoles;
  onSubmit: (values: RegisterFormData) => Promise<void>;
}

export interface LoginProps {
  role: Role;
  onsubmit: (values: LoginFormData) => Promise<void>;
}

export interface OtpProps {
  role: UserLikeRoles;
  onVerifyOtp: (
    values: { otp: string },
    email: string,
    purpose: OtpPurpose,
  ) => Promise<void>;
  onResendOtp: (email: string) => Promise<void>;
}

export interface ForgotPasswordProps {
  role: UserLikeRoles;
  onSubmit: (email: string) => Promise<void>;
}

export interface ForgotPasswordLinkProps {
  role: UserLikeRoles;
}

export interface ResetPasswordProps {
  role: UserLikeRoles;
  onSubmit: (password: string) => Promise<void>;
}

export interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

