import { db } from "@/lib/db";
import React from "react";
import Categories from "./components/Categories";
import SearchInput from "@/components/SearchInput";
import { getCourses } from "@/actions/getCourses";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CoursesList from "./components/CoursesList";

interface Props {
  searchParams: {
    title: string;
    categoryId: string
  }
}

const SearchPage = async ({searchParams}:Props) => {
  const {userId} = await auth()

  if (!userId) {
    return redirect('/')
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams
  })

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
