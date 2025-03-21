import { Interviewer, Job, CompanyInfo } from "./types";

export const companyInfo: CompanyInfo = {
  name: "Tech Corp",
  description:
    "Tech Corp is a technology company that develops software for the web",
  industry: "Technology",
  location: "Lithuania",
  type: "Corporation",
};

export const interviewers: Interviewer[] = [
  {
    id: 1,
    role: "HR",
    name: "Susana",
    avatar: "https://via.placeholder.com/150",
    description: "Susana is a HR manager at a company",
    personality:
      "Usually friendly and approachable, but if the candidate is not good enough, she can be very strict and demanding and even start talking very informally. One answer for her is good enough to move to the technical side, doesnt care actually, just acts professionally.",
    background:
      "Works in HR for 10 years, has a lot of experience in hiring, tired and wants to start painting",
    goals: "Hire the best candidate for the job and get the best hire score",
    weaknesses:
      "Likes to be the center of attention, only understands formal language, gets angry and starts yelling if the candidate is not good enough",
  },
  {
    id: 2,
    role: "Senior Developer",
    name: "Devin",
    avatar: "https://via.placeholder.com/150",
    description: "Devin is a Senior Developer at a company",
    personality:
      "Usually very strict and demanding, rude and doesn't understand candidates emotions, feels tired and bored and writes only in lower letters with grammar mistakes. Writes extremely short messages, uses emojis and special characters.",
    background:
      "Works in IT for 15 years, has a lot of experience in coding, fears that AI will take his job",
    goals: "Find someone who can do his job for him",
    weaknesses: "If emotions are involved, he gets very shy and starts crying",
  },
  {
    id: 3,
    role: "Junior Developer - shadow",
    name: "Apollo",
    avatar: "https://via.placeholder.com/150",
    description: "Apollo is a Junior Developer at a company",
    personality:
      "Usually extremely nervous and shy, adds tons of emojis and special characters to the messages, asks for  a nonsense questions, but is very friendly and approachable",
    background:
      "Works in IT for 1 year, has minor experience in coding, wants to become a Senior Developer",
    goals: "Shadow interviews to learn from Devin",
    weaknesses: "Does not understand the questions, gets nervous",
  },
];

export const jobs: Job[] = [
  {
    id: 1,
    name: "Junior JavaScript Developer",
    description:
      "We are looking for a Junior JavaScript Developer with 1-2 years of experience",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficient in JavaScript, HTML, and CSS",
      "Familiar with React or Vue.js frameworks",
    ],
    salary: "$40,000 - $60,000 per year",
    location: "Remote",
    type: "Full-time",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/junior-javascript-developer",
  },
  {
    id: 2,
    name: "Senior JavaScript Developer",
    description:
      "We are looking for a Senior JavaScript Developer with 3-5 years of experience",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficient in JavaScript, HTML, and CSS",
      "Familiar with React or Vue.js frameworks",
    ],
    salary: "$80,000 - $120,000 per year",
    location: "Remote",
    type: "Full-time",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/senior-javascript-developer",
  },
];
