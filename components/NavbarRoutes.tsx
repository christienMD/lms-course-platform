"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import SearchInput from "./SearchInput";
// import { isTeacher } from "@/lib/teacher";

const NavbarRoutes = () => {
  // const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
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
    </>
  );
};

export default NavbarRoutes;
