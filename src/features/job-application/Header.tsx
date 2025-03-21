import Link from "next/link";
import { jobs } from "@/lib/constants";

interface HeaderProps {
  jobId: number;
}

export function Header({ jobId }: HeaderProps) {
  const job = jobs.find((j) => j.id === jobId);

  if (!job) return null;

  return (
    <header className="w-full max-w-5xl mb-4 flex items-center">
      <Link
        href="/"
        className="mr-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Back to jobs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
      <div className="flex-grow">
        <h1 className="text-xl font-bold">{job.name}</h1>
        <p className="text-sm text-muted-foreground">
          {job.company} • {job.location}
        </p>
      </div>
    </header>
  );
}
