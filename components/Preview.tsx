"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "quill/dist/quill.bubble.css";

interface Props {
  value: string;
}

const Preview = ({ value }: Props) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return <ReactQuill theme="bubble" value={value} readOnly />;
};

export default Preview;
