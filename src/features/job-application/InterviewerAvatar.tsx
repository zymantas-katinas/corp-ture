import { getInterviewerAvatar } from "@/lib/actions";
import { Interviewer } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export const InterviewerAvatar = ({
  interviewer,
  mood,
}: {
  interviewer: Interviewer;
  mood: { mood: string; score: number; emoji: string };
}) => {
  const [avatar, setAvatar] = useState<string | null>(interviewer.avatar);

  // useEffect(() => {
  //   const getAvatar = async () => {
  //     const avatar = await getInterviewerAvatar({
  //       currentAvatar: interviewer.avatar,
  //       interviewer,
  //       mood,
  //     });
  //     if (avatar) {
  //       setAvatar(avatar);
  //       console.log("avatar", avatar);
  //     }
  //   };

  //   getAvatar();
  // }, [mood]);

  return (
    <div className="w-24 h-24 rounded-full">
      <span className="text-8xl">{mood.emoji}</span>
      {/* {avatar && (
        <Image
          src={avatar}
          alt={interviewer.name}
          width={96}
          height={96}
          className="object-cover"
        />
      )} */}
    </div>
  );
};
