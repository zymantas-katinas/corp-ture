"use client";

import { usePathname } from "next/navigation";
import { JobHeader } from "./JobHeader";

export function TopbarContent() {
  const pathname = usePathname();
  const isInterviewPage = pathname.startsWith("/apply/");

  if (!isInterviewPage) return null;

  return <JobHeader />;
}
