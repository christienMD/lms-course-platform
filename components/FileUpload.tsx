"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

interface Props {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

const FileUpload = ({ onChange, endpoint }: Props) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        const url = res[0]?.url;
        if (url) {
          onChange(url);
        }
      }}
      onUploadError={(error: Error) => {
        console.log("error: ", error.message);
        toast.error(`${error?.message}`);
      }}
    />
  );
};

export default FileUpload;
