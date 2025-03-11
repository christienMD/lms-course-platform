"use client";

import ConfirmModal from "@/components/modals/ConfirmModal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
}

const ChapterActions = ({
  disabled,
  courseId,
  chapterId,
  isPublished,
}: Props) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

 const onDelete = async () => {
  try {
    setIsLoading(true)
    await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`)

    toast.success('Chapter deleted successfully!')
    router.refresh()
    router.push(`/teacher/courses/${courseId}`)
  } catch {
    toast.error('Something went wrong')
  }finally {
    setIsLoading(false)
  }
 }

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => {}}
        variant="outline"
        size="sm"
        disabled={disabled || isLoading}
      >
        {isPublished ? "Unpublished" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="size-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default ChapterActions;
