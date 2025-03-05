import React from "react";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-60 fixed w-full z-50 inset-y-0">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-60">{children}</main>
    </div>
  );
};

export default DashboardLayout;
