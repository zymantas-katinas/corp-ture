import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { interviewers } from "@/lib/constants";
import { useInterviewStore } from "@/lib/store";
import { getMoodForInterviewer } from "@/lib/utils";
import { DebugInfo } from "./DebugInfo";

export function InterviewQuestion() {
  const {
    interviewResponse,
    isLoading,
    error,
    answer,
    setAnswer,
    submitAnswer,
    resetInterview,
  } = useInterviewStore();

  const currentInterviewer = interviewResponse
    ? interviewers.find(
        (i) => i.id === interviewResponse.answeredByInterviewerId
      )
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitAnswer();
  };

  if (isLoading && !interviewResponse) {
    return (
      <Card className="w-full max-w-5xl shadow-sm hover:shadow-md transition-shadow mb-6">
        <CardContent className="py-6">
          <div className="text-center text-gray-500">
            Loading interview... This may take a few moments.
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error && !interviewResponse) {
    return (
      <Card className="w-full max-w-5xl shadow-sm hover:shadow-md transition-shadow mb-6">
        <CardContent className="py-6">
          <div className="text-red-600 font-medium text-lg bg-red-50 p-4 rounded-md border border-red-200">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </div>
              <Button
                onClick={resetInterview}
                disabled={isLoading}
                className="font-[family-name:var(--font-vt-sans)] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                {isLoading ? "Retrying..." : "Retry"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!interviewResponse) {
    return (
      <Card className="w-full max-w-5xl shadow-sm hover:shadow-md transition-shadow mb-6">
        <CardContent className="py-6">
          <div className="text-center text-gray-500">
            <p>Unable to start the interview. Please click below to retry.</p>
            <Button
              onClick={resetInterview}
              className="mt-4 font-[family-name:var(--font-vt-sans)] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Start Interview
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-5xl shadow-sm hover:shadow-md transition-shadow mb-6">
      <CardHeader className="border-b">
        {currentInterviewer && (
          <div className="flex items-center mb-2">
            <div className="text-2xl mr-2">
              {
                getMoodForInterviewer(
                  currentInterviewer.id,
                  interviewResponse?.interviewersMoods
                ).emoji
              }
            </div>
            <span className="font-semibold">{currentInterviewer.name}</span>
            <span className="text-gray-500 text-sm ml-2">
              ({currentInterviewer.role})
            </span>
          </div>
        )}
        <CardDescription className="text-lg whitespace-pre-line font-medium p-4 bg-gray-50 text-gray-900 rounded-md border border-gray-100">
          {interviewResponse.response || (
            <div className="text-center text-red-500">
              No interview question received. Please retry the interview.
            </div>
          )}
        </CardDescription>

        <DebugInfo interviewResponse={interviewResponse} />
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Type your answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={isLoading}
              className="font-[family-name:var(--font-vt-sans)] text-lg min-h-[100px] resize-y p-4 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 border-2 border-blue-200"
              autoFocus
            />
            {error && (
              <div className="text-red-600 font-medium text-lg bg-red-50 p-4 rounded-md border border-red-200 mt-4">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}
            {interviewResponse.isFinished && (
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
                    Your interview is complete! Final score:{" "}
                    {interviewResponse.hireScore}%
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="mt-2 w-full font-[family-name:var(--font-vt-sans)] text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
            disabled={!answer.trim() || isLoading}
          >
            {isLoading ? "Processing..." : "Submit Answer"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
