import React from "react";
import { ProviderNavbar } from "../components/provider/ProviderNavbar";
import { ProviderFooter } from "../components/provider/ProviderFooter";

export const ProviderLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ProviderNavbar />
      <main className="grow p-4 overflow-y-auto">{children}</main>
      <ProviderFooter />
    </div>
  );
};
