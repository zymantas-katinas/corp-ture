import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { InterviewResponse } from "@/lib/types";

interface InterviewResultDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  interviewResponse: InterviewResponse | null;
}

export function InterviewResultDialog({
  open,
  onOpenChange,
  interviewResponse,
}: InterviewResultDialogProps) {
  if (!interviewResponse) return null;

  const getInterviewResultMessage = () => {
    const score = interviewResponse.hireScore;

    if (score >= 80) {
      return {
        title: "You're Hired!",
        message:
          "We're impressed with your skills and think you'd be a great addition to our team. When can you start?",
        emoji: "🎉",
      };
    } else if (score >= 60) {
      return {
        title: "We'll Be In Touch...",
        message:
          "Thank you for your time. Your application was strong, and we'll be in contact shortly with next steps.",
        emoji: "📞",
      };
    } else {
      return {
        title: "Not hired!",
        message:
          "We appreciate you taking the time to interview with us, but we've decided to move forward with other candidates at this time.",
        emoji: "👋",
      };
    }
  };

  const resultInfo = getInterviewResultMessage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <span className="text-2xl">{resultInfo.emoji}</span>{" "}
            {resultInfo.title}
          </DialogTitle>
          <DialogDescription className="text-lg pt-2">
            {resultInfo.message}
          </DialogDescription>
        </DialogHeader>
        <div className="bg-gray-50 p-4 rounded-md my-4 text-center">
          <div className="text-2xl font-bold">
            Final Score: {interviewResponse.hireScore}%
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full  text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
