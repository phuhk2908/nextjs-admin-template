import { Metadata } from "next";
import SignUpPage from "./sign-up-page";

export const metadata: Metadata = {
  title: "Admin | Sign Up",
  description: "Create a new account",
};

export default function Page() {
  return <SignUpPage />;
}
