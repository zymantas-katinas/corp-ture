"use client";

import { jobs } from "@/lib/constants";
import { JobCard } from "@/features/jobs-list/JobCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6  ">
      <header className="w-full max-w-5xl mb-10 mt-6 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-slate-800 ">
          Available Jobs
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Browse through our open positions and find your next opportunity at
          Tech Corp
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>© 2023 Tech Corp. Improving user engagement paradigms since 1998.</p>
      </footer>
    </div>
  );
}
