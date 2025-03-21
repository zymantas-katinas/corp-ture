import { InterviewResponse } from "@/lib/types";

interface VerticalHireScoreProps {
  interviewResponse: InterviewResponse | null;
}

export function VerticalHireScore({
  interviewResponse,
}: VerticalHireScoreProps) {
  if (!interviewResponse) return null;

  // Determine color based on score
  const getScoreColor = (score: number) => {
    if (score < 30) return "bg-red-500";
    if (score < 60) return "bg-yellow-500";
    return "bg-green-500";
  };

  const scoreColor = getScoreColor(interviewResponse.hireScore);

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
      <div className="h-64 w-6 bg-gray-200 rounded-full relative mb-3">
        <div
          className={`absolute bottom-0 w-6 ${scoreColor} rounded-full transition-height duration-700 ease-in-out`}
          style={{ height: `${interviewResponse.hireScore}%` }}
        ></div>
      </div>
      <div className="text-center bg-white p-2 rounded-md shadow-sm border border-gray-200">
        <div className="text-sm font-bold">{interviewResponse.hireScore}%</div>
        <div className="text-xs text-gray-500">Hire Score</div>
      </div>
    </div>
  );
}
