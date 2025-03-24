import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Job } from "@/lib/types";
import Link from "next/link";

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card
      key={job.id}
      className="w-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
    >
      <CardHeader>
        <div className="flex flex-col space-y-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-semibold text-gray-800 pr-2">
              {job.name}
            </CardTitle>
            <Badge
              variant="outline"
              className="text-xs font-normal px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 whitespace-nowrap shrink-0"
            >
              {job.type.split(" ")[0]}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-y-1">
            <div className="flex items-center shrink-0 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {job.company}
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="line-clamp-2">{job.location}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {job.description}
          </p>
          <div>
            <h3 className="text-sm font-semibold mb-2 text-gray-700 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Key Requirements
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              {job.requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="text-sm">
                  {req}
                </li>
              ))}
              {job.requirements.length > 3 && (
                <li className="text-sm text-blue-600 font-medium">
                  +{job.requirements.length - 3} more requirements
                </li>
              )}
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2 text-sm border-t border-gray-100">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-600 mr-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium text-gray-700">{job.salary}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 mt-auto">
        <Link href={`/apply/${job.id}`} className="w-full">
          <Button className="w-full text-sm font-medium bg-slate-800 hover:bg-slate-900 transition-all">
            Apply Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
