// import useEnhancedCustomRouterUtilities from "@/navigation/useEnhancedCustomRouterUtilities";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import SideNav from "./sidebar/SideNav";

const Layout: React.FC = () => {
  // useEnhancedCustomRouterUtilities();
  return (
    <>
      <Header />
      <SideNav />

      <main className="h-[100vh] w-full bg-[#F9F9F9] pt-[70px] lg:pl-[300px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
