import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface Props {
  params: { courseId: string };
}

const CourseIdPage = async ({ params: { courseId } }: Props) => {
  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) {
    return redirect('/')
  }
  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`)
};

export default CourseIdPage;
