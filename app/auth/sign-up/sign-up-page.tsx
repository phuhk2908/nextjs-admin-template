"use client";

import AuthForm from "@/components/form/auth-form";
import { signUpSchema } from "@/lib/validation";

export default function SignUpPage() {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={async () => {
        return {
          success: true,
        };
      }}
    />
  );
}
