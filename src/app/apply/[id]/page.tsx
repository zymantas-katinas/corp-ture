"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { jobs, interviewers } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

export default function JobApplication() {
  const params = useParams();
  const router = useRouter();
  const jobId = Number(params.id);

  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hiringScore, setHiringScore] = useState(50); // Default middle score

  const job = jobs.find((j) => j.id === jobId);

  // If job not found, redirect to home
  useEffect(() => {
    if (!job) {
      router.push("/");
    }
  }, [job, router]);

  // Simulate score changes when typing
  useEffect(() => {
    if (answer.length > 0) {
      // This is just a simple simulation - in a real app this would be more sophisticated
      const newScore = Math.min(100, 50 + answer.length / 2);
      setHiringScore(newScore);
    } else {
      setHiringScore(50);
    }
  }, [answer]);

  if (!job) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      // Simulate final evaluation based on answer length
      const finalScore = Math.min(100, 60 + answer.length / 4);
      setHiringScore(finalScore);
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 font-[family-name:var(--font-vt-sans)] relative">
      {/* Compact header with back button */}
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

      {/* Interviewers Section */}
      <section className="w-full max-w-5xl mb-6">
        <h2 className="text-lg font-semibold mb-3">Your Interview Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {interviewers.map((interviewer) => (
            <Card
              key={interviewer.id}
              className="flex flex-col items-center p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 relative shadow-sm border border-gray-200">
                {interviewer.avatar && (
                  <Image
                    src={interviewer.avatar}
                    alt={interviewer.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-center">
                {interviewer.name}
              </h3>
              <p className="text-muted-foreground text-center">
                {interviewer.role}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Question */}
      <Card className="w-full shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardDescription className="text-lg">
            What makes you a good fit for this {job.name} position?
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={submitted}
                className="font-[family-name:var(--font-vt-sans)] text-lg min-h-[200px] resize-y focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              {submitted && (
                <div className="text-green-600 font-medium text-lg bg-green-50 p-4 rounded-md border border-green-200">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Your application has been submitted! We&apos;ll be in
                      touch soon.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full font-[family-name:var(--font-vt-sans)] text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
              disabled={!answer.trim() || submitted}
            >
              {submitted ? "Application Submitted" : "Submit Application"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
