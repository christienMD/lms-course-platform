import React from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

interface Props {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-blue-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
  base: "text-base",
};

const CourseProgress = ({ value, variant, size }: Props) => {
  return (
    <div>
      <Progress className="h-2" />
      <p
        className={cn(
          "font-medium mt-2 text-blue-700",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};

export default CourseProgress;
