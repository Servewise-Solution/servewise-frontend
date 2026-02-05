import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthLayout from "../../../components/layout/authLayout";
import { RegisterForm } from "../components/Register";
import type { RegisterFormData } from "../types/auth.types";
import { Roles } from "../../../constants/roles";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();

  const normalizedRole =
    role?.toUpperCase() === Roles.ADMIN ||
    role?.toUpperCase() === Roles.PROVIDER ||
    role?.toUpperCase() === Roles.USER
      ? (role.toUpperCase() as (typeof Roles)[keyof typeof Roles])
      : Roles.USER;

  const handleRegister = async (data: RegisterFormData) => {
    console.log("Register data:", data);

    navigate(`/${normalizedRole.toLowerCase()}/login`);
  };

  return (
    <AuthLayout>
      <RegisterForm role={normalizedRole} onSubmit={handleRegister} />
    </AuthLayout>
  );
};

export default Register;
