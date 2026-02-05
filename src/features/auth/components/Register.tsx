import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import type {
  RegisterFormValues,
  RegisterProps,
} from "../../../features/auth/types/auth.types";
import { Roles } from "../../../constants/roles";
import AuthLayout from "../../../components/layout/authLayout";
import InputField from "../../../components/UI/InputField";
import Button from "../../../components/UI/Button";
import { registerValidationSchema } from "../../auth/schemas/register.schema";

const registerFields: {
  name: keyof RegisterFormValues;
  label: string;
  type?: string;
  placeholder: string;
  showToggle?: boolean;
}[] = [
  { name: "username", label: "Username", placeholder: "Enter your username" },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    showToggle: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    showToggle: true,
  },
];

export const RegisterForm: React.FC<RegisterProps> = ({ role, onSubmit }) => {
  const navigate = useNavigate();

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await onSubmit({
          ...values,
          role,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <AuthLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <h4 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {role === Roles.PROVIDER
              ? "Provider Sign Up"
              : role === Roles.ADMIN
                ? "Admin Sign Up"
                : "User Sign Up"}
          </h4>

          <p className="text-lg text-gray-600 font-medium">
            {role === Roles.PROVIDER
              ? "Join the ServeWise professional network"
              : role === Roles.ADMIN
                ? "Create an admin account for ServeWise"
                : "Sign up and start booking services with ServeWise"}
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={formik.handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {registerFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <InputField
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                showToggle={field.showToggle}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors[field.name]}
                touched={formik.touched[field.name]}
              />
            </motion.div>
          ))}

          {/* SUBMIT BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              type="submit"
              isLoading={formik.isSubmitting}
              disabled={!formik.isValid || formik.isSubmitting}
              className="w-full py-4 text-base font-semibold"
            >
              {formik.isSubmitting ? "Creating Account..." : "Sign Up"}
            </Button>
          </motion.div>

          {/* FOOTER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center pt-4"
          >
            <p className="text-base text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate(`/${role.toLowerCase()}/login`)}
                className="font-semibold text-teal-600 hover:text-teal-700 transition-colors duration-200"
              >
                Log in here
              </button>
            </p>
          </motion.div>
        </motion.form>
      </div>
    </AuthLayout>
  );
};
