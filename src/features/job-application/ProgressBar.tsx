import { InterviewResponse } from "@/lib/types";

interface ProgressBarProps {
  interviewResponse: InterviewResponse | null;
}

export function ProgressBar({ interviewResponse }: ProgressBarProps) {
  if (!interviewResponse) return null;

  return (
    <div className="w-full fixed top-[41px] left-0 right-0 z-10">
      <div className="bg-gray-100 h-2">
        <div
          className="bg-blue-500 h-2"
          style={{ width: `${interviewResponse.interviewProgress * 100}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 text-right pr-4">
        <span>
          Interview Progress: {interviewResponse.interviewProgress * 100}%
        </span>
      </div>
    </div>
  );
}
