import { InterviewResponse } from "@/lib/types";

export const DebugInfo = ({
  interviewResponse,
}: {
  interviewResponse: InterviewResponse;
}) => {
  // return null;
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="mt-2 text-xs text-gray-400">
      <details>
        <summary>Debug Info</summary>
        <pre className="text-left overflow-auto max-h-40 bg-gray-100 p-2 rounded text-xs">
          {JSON.stringify(
            {
              hasResponse: !!interviewResponse.response,
              responseLength: interviewResponse.response?.length || 0,
              responseContent:
                interviewResponse.response?.substring(0, 100) + "...",
              answerNeeded: interviewResponse.answerNeeded,
              interviewer: interviewResponse.answeredByInterviewerId,
              isFinished: interviewResponse.isFinished,
              hireScore: interviewResponse.hireScore,
              interviewersMoods: interviewResponse.interviewersMoods,
            },
            null,
            2
          )}
        </pre>
      </details>
    </div>
  );
};
