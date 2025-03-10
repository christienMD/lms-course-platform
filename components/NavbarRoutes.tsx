"use client";

import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button variant="ghost" size="sm">
          <Link href="/" className="w-full flex">
            <LogOut className="size-4 mr-2" />
            Exit
          </Link>
        </Button>
      ) : (
        <Button asChild size="sm" variant="ghost">
          <Link href="/teacher/courses">Teacher mode</Link>
        </Button>
      )}
      <UserButton />
    </div>
  );
};

export default NavbarRoutes;
