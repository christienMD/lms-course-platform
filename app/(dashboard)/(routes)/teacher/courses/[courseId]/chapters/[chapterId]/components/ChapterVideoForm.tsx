"use client";
import axios from "axios";
import * as z from "zod";
import MuxPlayer from "@mux/mux-player-react";

import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { Chapter, MuxData } from "@prisma/client";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

const ChapterVideoForm = ({ initialData, courseId, chapterId }: Props) => {
  const [isEditing, setEditing] = useState(false);

  console.log("plyb Id: ", initialData?.muxData?.playbackId);

  const toggleEdit = () => setEditing((current) => !current);
  const router = useRouter();

  const onSubmit = async (values: FormData) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values
      );
      toast.success("Chapter updated successfuly");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course video
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}

          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="size-4 mr-2" />
              Add an video
            </>
          )}

          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="size-4 mr-2" />
              Edit video
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md mt-3">
            <Video className="size-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer playbackId={initialData?.muxData?.playbackId || ""} />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt4">
            Upload this chapter&apos;s video
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Videos can take few minutes to process. Refresh the page if video does
          not appear.
        </div>
      )}
    </div>
  );
};

export default ChapterVideoForm;
