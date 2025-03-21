import { InterviewResponse } from "@/lib/types";

interface ProgressBarProps {
  interviewResponse: InterviewResponse | null;
}

export function ProgressBar({ interviewResponse }: ProgressBarProps) {
  if (!interviewResponse) return null;

  return (
    <div className="w-full max-w-5xl mb-6">
      <div className="bg-gray-100 rounded-full h-2 mb-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${interviewResponse.interviewProgress * 100}%` }}
        ></div>
      </div>
      <div className="text-sm text-gray-500">
        <span>
          Interview Progress: {interviewResponse.interviewProgress * 100}%
        </span>
      </div>
    </div>
  );
}
