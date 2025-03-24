import Link from "next/link";
import { jobs } from "@/lib/constants";
import { useInterviewStore } from "@/lib/store";

export function JobHeader() {
  const { jobId } = useInterviewStore();

  if (!jobId) return null;

  const job = jobs.find((j) => j.id === jobId);

  if (!job) return null;

  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="mr-3 p-1.5 hover:bg-slate-700 rounded-full transition-colors"
        aria-label="Back to jobs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </Link>
      <div>
        <h1 className="text-sm font-bold text-white">{job.name}</h1>
        <p className="text-xs text-gray-300">
          {job.company} • {job.location}
        </p>
      </div>
    </div>
  );
}
