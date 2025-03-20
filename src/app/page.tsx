"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { jobs } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 font-[family-name:var(--font-vt-sans)]">
      <header className="w-full max-w-5xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Available Jobs</h1>
        <p className="text-xl text-muted-foreground">
          Browse through our open positions and find your next opportunity
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {jobs.map((job) => (
          <Card key={job.id} className="w-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{job.name}</CardTitle>
                  <CardDescription className="text-lg mt-1">
                    {job.company} • {job.location}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">{job.description}</p>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-base">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="text-lg">
                    <span className="font-semibold">Salary:</span> {job.salary}
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Type:</span> {job.type}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/apply/${job.id}`} className="w-full">
                <Button className="w-full text-lg">Apply Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
