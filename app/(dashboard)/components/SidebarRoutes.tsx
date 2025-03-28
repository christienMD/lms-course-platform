import { BarChart, Compass, Layout, List } from "lucide-react";
import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

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

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    path: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    path: "/teacher/analytics",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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
