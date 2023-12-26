/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
      }}
    >
      <>{children}</>
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export { SidebarContext, SidebarProvider, useSidebarContext };
