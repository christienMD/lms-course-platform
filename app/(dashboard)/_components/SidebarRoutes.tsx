import { Compass, Layout } from "lucide-react";
import React from "react";
import SidebarItem from "./SidebarItem";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    path: "/search",
  },
];

const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.path}
          icon={route.icon}
          label={route.label}
          href={route.path}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
