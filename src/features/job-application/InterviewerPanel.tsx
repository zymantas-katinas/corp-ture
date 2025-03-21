import { Card } from "@/components/ui/card";
import { interviewers } from "@/lib/constants";
import { InterviewResponse } from "@/lib/types";
import { InterviewerAvatar } from "./InterviewerAvatar";
import { getMoodForInterviewer } from "@/lib/utils";

interface InterviewerPanelProps {
  interviewResponse: InterviewResponse | null;
}

export function InterviewerPanel({ interviewResponse }: InterviewerPanelProps) {
  const currentInterviewer = interviewResponse
    ? interviewers.find(
        (i) => i.id === interviewResponse.answeredByInterviewerId
      )
    : null;

  return (
    <section className="w-full max-w-5xl mb-6">
      <h2 className="text-lg font-semibold mb-3">Your Interview Panel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {interviewers.map((interviewer) => (
          <Card
            key={interviewer.id}
            className={`flex flex-col items-center gap-1 p-4 hover:shadow-md transition-shadow ${
              currentInterviewer && currentInterviewer.id === interviewer.id
                ? "ring-2 ring-blue-500 shadow-md"
                : ""
            }`}
          >
            <div className="text-8xl">
              {
                getMoodForInterviewer(
                  interviewer.id,
                  interviewResponse?.interviewersMoods
                ).emoji
              }
            </div>
            <h3 className="text-xl font-semibold text-center">
              {interviewer.name}
            </h3>
            <p className="text-muted-foreground text-center">
              {interviewer.role}
            </p>
            {getMoodForInterviewer(
              interviewer.id,
              interviewResponse?.interviewersMoods
            ).mood && (
              <div className="mt-1 text-sm px-3 py-1 bg-gray-100 rounded-full">
                {
                  getMoodForInterviewer(
                    interviewer.id,
                    interviewResponse?.interviewersMoods
                  ).mood
                }
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
