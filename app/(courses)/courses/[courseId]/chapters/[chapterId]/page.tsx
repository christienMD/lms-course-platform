import { getChapter } from "@/actions/getChapter";
import Banner from "@/components/Banner";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import CourseEnrollButton from "./components/CourseEnrollButton";
import { Separator } from "@/components/ui/separator";
import Preview from "@/components/Preview";
import { File } from "lucide-react";
import CourseProgressButton from "./components/CourseProgressButton";

interface Props {
  params: { courseId: string; chapterId: string };
}

const ChapterIdPage = async ({ params: { chapterId, courseId } }: Props) => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    chapter,
    course,
    muxData,
    attachments,
    userProgress,
    nextChapter,
    purchase,
  } = await getChapter({
    userId,
    chapterId,
    courseId,
  });

  if (!chapter || !course) {
    return redirect("/");
  }

  const isLocked = !chapter?.isFree && !purchase;
  const completedOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner variant="success" label="You already completed this chapter." />
      )}

      {isLocked && (
        <Banner
          variant="warning"
          label="You need to purchase this course to watch this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb20">
        <div className="p-4">
          <VideoPlayer
            chapterId={chapterId}
            title={chapter.title}
            courseId={courseId}
            nextChapterId={nextChapter?.id!}
            playbackId={muxData?.playbackId!}
            isLocked={isLocked}
            completeOnEnd={completedOnEnd}
          />
        </div>
        <div className="p-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
          {purchase ? (
            <CourseProgressButton
              chapterId={chapterId}
              courseId={courseId}
              isCompleted={!!userProgress?.isCompleted}
              nextChapterId={nextChapter?.id}
            />
          ) : (
            <CourseEnrollButton courseId={courseId} price={course.price!} />
          )}
        </div>
        <Separator />
        <div>
          <Preview value={chapter.description!} />
        </div>
        {!!attachments.length && (
          <>
            {attachments.map((attachment) => (
              <a
                href={attachment.url}
                target="_blank"
                key={attachment.id}
                className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
              >
                <File />
                <p className="line-clamp-1">{attachment.name}</p>
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ChapterIdPage;
