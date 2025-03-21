"use client";

import { useParams } from "next/navigation";
import { JobApplication } from "@/features/job-application";

export default function JobApplicationPage() {
  const params = useParams();
  const jobId = Number(params.id);

  return <JobApplication jobId={jobId} />;
}
