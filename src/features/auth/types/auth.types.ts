import type { Role } from "../../../constants/roles";

export interface RegisterFormValues {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormData extends RegisterFormValues {
  role: Role;
}

export interface RegisterProps {
  role: Role;
  onSubmit: (values: RegisterFormData) => Promise<void>;
}
