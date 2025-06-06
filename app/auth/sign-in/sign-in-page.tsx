"use client";

import AuthForm from "@/components/form/auth-form";
import { signInSchema } from "@/lib/validation";

export default function SignInPage() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={async () => {
        return {
          success: true,
        };
      }}
    />
  );
}
