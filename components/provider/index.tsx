import { ReactNode } from "react";
import ReactQueryProvider from "./react-query-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </>
  );
}
