import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import type { LoginProps, UserLikeRoles, LoginFormValues } from "../../types/auth.types";
import AuthLayout from "../../layout/AuthLayout";
import InputField from "../common/InputField";
import Button from "../common/Button";
import ForgotPasswordLink from "../common/ForgotPasswordLink";
import { loginValidationSchema } from "../../utils/validations/authValidationSchema";

const loginFields: {
  name: keyof LoginFormValues
  label: string;
  type: string;
  placeholder: string;
  showToggle?: boolean;
}[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email...",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password...",
    showToggle: true,
  },
];

export const Login: React.FC<LoginProps> = ({ role, onsubmit }) => {
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await onsubmit(values);
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <AuthLayout role={role}>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h4 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent capitalize">
            {role.toLowerCase()} Login
          </h4>
          <p className="text-lg text-gray-600 font-medium">
            Please login to continue
          </p>
        </motion.div>

        <motion.form
          onSubmit={formik.handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {loginFields.map((field, index) => (
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

          {role !== "ADMIN" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ForgotPasswordLink role={role as UserLikeRoles} />
            </motion.div>
          )}

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
              {formik.isSubmitting ? "Signing in..." : "Login"}
            </Button>
          </motion.div>

          {role !== "ADMIN" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center pt-4"
            >
              <p className="text-base text-gray-600">
                New here?{" "}
                <button
                  type="button"
                  onClick={() => navigate(`/${role.toLowerCase()}/register`)}
                  className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Sign up to continue
                </button>
              </p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </AuthLayout>
  );
};
