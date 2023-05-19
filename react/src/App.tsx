import React, { createContext } from "react";
import Navbar from "./components/Navbar";
import { Outlet, createHashRouter } from "react-router-dom";
import { NavigationContext, NavigationContextItem } from "./context";
import { ImplSwitcher } from "./components";

const navigableRoutes: NavigationContextItem[] = [{ name: "About", path: "/" }];

export const App: React.FC = () => {
  return (
    <NavigationContext.Provider value={navigableRoutes}>
      <div className="flex flex-col w-full h-full relative">
        <Navbar />
        <Outlet />
        <ImplSwitcher />
      </div>
    </NavigationContext.Provider>
  );
};
