import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import InputField from "../common/InputField";
import Button from "../common/Button";
import AuthLayout from "../../layout/AuthLayout";
import type {
  ResetPasswordProps,
  ResetPasswordFormValues,
} from "../../types/auth.types";
import { resetPasswordValidationSchema } from "../../utils/validations/authValidationSchema";

const resetPasswordFields: {
  name: keyof ResetPasswordFormValues;
  label: string;
  type: string;
  placeholder: string;
  showToggle?: boolean;
}[] = [
  {
    name: "password",
    label: "New Password",
    type: "password",
    placeholder: "Enter your new password...",
    showToggle: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your new password...",
    showToggle: true,
  },
];

export const ResetPassword: React.FC<ResetPasswordProps> = ({
  role,
  onSubmit,
}) => {
  const navigate = useNavigate();

  const formik = useFormik<ResetPasswordFormValues>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await onSubmit(values.password);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <AuthLayout role={role}>
      <div className="space-y-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h4 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Reset Password
          </h4>
          <p className="text-lg text-gray-600 font-medium">
            Create your new secure password
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={formik.handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {resetPasswordFields.map((field, index) => (
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

          {/* SUBMIT */}
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
              {formik.isSubmitting ? "Updating Password..." : "Update Password"}
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
              Remember your password?{" "}
              <button
                type="button"
                onClick={() => navigate(`/${role.toLowerCase()}/login`)}
                className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                Back to Login
              </button>
            </p>
          </motion.div>
        </motion.form>
      </div>
    </AuthLayout>
  );
};
