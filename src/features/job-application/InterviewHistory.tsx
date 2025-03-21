import { interviewers } from "@/lib/constants";
import { InterviewResponse } from "@/lib/types";
import { useInterviewStore } from "@/lib/store";
import { getMoodForInterviewer } from "@/lib/utils";

export function InterviewHistory() {
  const { history } = useInterviewStore();

  if (history.length <= 2) return null;

  return (
    <section className="w-full max-w-5xl mb-6">
      <h2 className="text-lg font-semibold mb-3">Interview History</h2>
      <div className="space-y-4">
        {history.slice(2).map((entry, index) => {
          if (entry.role === "assistant") return null;

          const response =
            index + 3 < history.length
              ? (JSON.parse(
                  history[index + 3].content as string
                ) as InterviewResponse)
              : null;

          const respInterviewer = response
            ? interviewers.find(
                (i) => i.id === response.answeredByInterviewerId
              )
            : null;

          const interviewerMood = getMoodForInterviewer(
            respInterviewer?.id,
            response?.interviewersMoods
          );

          return (
            <div key={index} className="space-y-2">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="font-semibold mb-1">You:</div>
                <div className="whitespace-pre-line">
                  {entry.content as string}
                </div>
              </div>

              {response && respInterviewer && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold mb-1 flex items-center">
                    <div className="text-2xl mr-2">{interviewerMood.emoji}</div>
                    {respInterviewer.name} ({respInterviewer.role}):
                  </div>
                  <div className="whitespace-pre-line">{response.response}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
