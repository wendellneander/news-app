import React from "react";
import { SidebarProvider } from "./sidebar";
import { CategoriesProvider } from "./categories";
import { ArticlesProvider } from "./articles";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CategoriesProvider>
      <ArticlesProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ArticlesProvider>
    </CategoriesProvider>
  );
};

export default AppProvider;
