import SignInPage from "./sign-in-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Sign In",
  description: "Sign in to your account",
};

export default function Page() {
  return <SignInPage />;
}
