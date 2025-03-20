import { Interviewer, Job } from "./types";

export const companyInfo = {
  name: "Tech Corp",
  description:
    "Tech Corp is a technology company that develops software for the web",
  industry: "Technology",
  location: "Lithuania",
};

export const interviewers: Interviewer[] = [
  {
    id: 1,
    role: "HR",
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    description: "John Doe is a HR manager at a company",
    personality: "John is a HR manager at a company",
    background: "John Doe is a HR manager at a company",
    goals: "John Doe is a HR manager at a company",
    weaknesses: "John Doe is a HR manager at a company",
  },
  {
    id: 2,
    role: "Senior Developer",
    name: "Jane Doe",
    avatar: "https://via.placeholder.com/150",
    description: "Jane Doe is a Senior Developer at a company",
    personality: "Jane is a Senior Developer at a company",
    background: "Jane Doe is a Senior Developer at a company",
    goals: "Jane Doe is a Senior Developer at a company",
    weaknesses: "Jane Doe is a Senior Developer at a company",
  },
  {
    id: 3,
    role: "Junior Developer - shadow",
    name: "Jane Doe",
    avatar: "https://via.placeholder.com/150",
    description: "Jane Doe is a Junior Developer at a company",
    personality: "Jane is a Junior Developer at a company",
    background: "Jane Doe is a Junior Developer at a company",
    goals: "Jane Doe is a Junior Developer at a company",
    weaknesses: "Jane Doe is a Junior Developer at a company",
  },
];

export const jobs: Job[] = [
  {
    id: 0,
    name: "as",
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
