import { db } from "@/lib/db";
import React, { Suspense } from "react";
import Categories from "./components/Categories";
import SearchInput from "@/components/SearchInput";
import { getCourses } from "@/actions/getCourses";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CoursesList from "./components/CoursesList";
import PageLoader from "@/components/PageLoader";

interface Props {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: Props) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <Suspense fallback={<PageLoader />}>
          <SearchInput />
        </Suspense>
      </div>
      <div className="p-6">
        <Suspense fallback={<PageLoader />}>
          <Categories items={categories} />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
          <CoursesList items={courses} />
        </Suspense>
      </div>
    </>
  );
};

export default SearchPage;

export const dynamic = "force-dynamic";
