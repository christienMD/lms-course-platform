"use client";

import React from "react";
import Logo from "./Logo";
import SidebarRoutes from "./SidebarRoutes";
import { cn } from "@/lib/utils";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto">
      <div className="p-6">
        <Logo />
      </div>
      <div className={cn("flex flex-col w-full", className)}>
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
