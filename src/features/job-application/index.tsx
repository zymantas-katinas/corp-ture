import { useEffect } from "react";
import { useInterviewStore } from "@/lib/store";
import { InterviewerPanel } from "./InterviewerPanel";
import { ProgressBar } from "./ProgressBar";
import { InterviewQuestion } from "./InterviewQuestion";
import { InterviewHistory } from "./InterviewHistory";
import { VerticalHireScore } from "./VerticalHireScore";

interface JobApplicationProps {
  jobId: number;
}

export function JobApplication({ jobId }: JobApplicationProps) {
  const { setJobId, initInterview, interviewResponse } = useInterviewStore();

  useEffect(() => {
    setJobId(jobId);
    initInterview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobId]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 pt-10 pl-16  relative">
      <VerticalHireScore interviewResponse={interviewResponse} />
      <ProgressBar interviewResponse={interviewResponse} />
      <InterviewerPanel interviewResponse={interviewResponse} />
      <InterviewQuestion />
      <InterviewHistory />
    </div>
  );
}
