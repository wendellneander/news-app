import React from "react";
import { SidebarProvider } from "./sidebar";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default AppProvider;
