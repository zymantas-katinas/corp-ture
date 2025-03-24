import { Interviewer, Job, CompanyInfo } from "./types";

export const companyInfo: CompanyInfo = {
  name: "Tech Corp",
  description:
    "Tech Corp is a leading innovator in the digital transformation space, creating synergistic solutions that optimize user engagement paradigms",
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
    name: "Frontend Developer",
    description:
      "We're seeking an entry-level developer with senior-level experience. Ideal candidate will transform our outdated interfaces into pixel-perfect experiences using only the trendiest frameworks.",
    requirements: [
      "Bachelor's degree in Computer Science (Master's preferred but we'll pay you like you have neither)",
      "5+ years experience with React, Angular, and Vue.js (simultaneously)",
      "Strong knowledge of HTML5, CSS3, and JavaScript (plus whatever framework was released yesterday)",
      "Proven track record of self-sufficient problem solving at 2AM",
      "Ability to make impossible designs work on Internet Explorer 6",
    ],
    salary: "Competitive (meaning less than you're worth)",
    location:
      "Remote with occasional on-site requirements (during holidays and vacations)",
    type: "Full-time with flexible working hours (available 24/7)",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/frontend-developer",
  },
  {
    id: 2,
    name: "Backend Developer (PHP)",
    description:
      "Looking for a PHP wizard who can maintain our spaghetti legacy codebase while simultaneously transforming it into a modern architecture with zero downtime and no documentation.",
    requirements: [
      "Strong experience with PHP and MySQL (and ability to explain why we haven't upgraded)",
      "Familiarity with our proprietary in-house framework (which is like Laravel but worse)",
      "Understanding of RESTful APIs and ability to defend SOAP to clients",
      "Experience with version control systems (Git, but we still email code changes too)",
      "Knowledge of security best practices (that we'll ignore for business reasons)",
    ],
    salary: "Industry standard (based on 2009 metrics)",
    location: "Hybrid arrangement with core hours (8am-8pm)",
    type: "Full-time with additional availability as needed (always needed)",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/backend-php-developer",
  },
  {
    id: 3,
    name: "DevOps Engineer",
    description:
      "Join our lean team as a versatile technical miracle worker managing our infrastructure, deployment pipelines, occasional administrative needs, and any other responsibilities no one else wants.",
    requirements: [
      "Experience with cloud platforms (AWS, Azure, GCP, and our special on-premise legacy systems)",
      "Knowledge of containerization and orchestration (Docker, Kubernetes, and home-grown solutions)",
      "Familiarity with CI/CD pipelines (that you'll have to build from scratch)",
      "Strong troubleshooting skills with minimal information (or none at all)",
      "Willingness to be on call 24/7 but log only 40 hours",
    ],
    salary:
      "Based on quantifiable productivity metrics (determined after hire)",
    location:
      "On-site (close proximity to server infrastructure required, even though it's in the cloud)",
    type: "Full-time with rotating on-call responsibilities (mostly just you)",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/devops-engineer",
  },
  {
    id: 4,
    name: "UI/UX Designer",
    description:
      "Create beautiful, intuitive designs that marketing will reject. Then create what marketing wants, which developers will claim is impossible to build. Repeat until everyone is exhausted.",
    requirements: [
      "Portfolio demonstrating ability to make executives happy rather than users",
      "Experience with design tools (Figma, Adobe XD, Sketch, and MS Paint for the CEO)",
      "Understanding of user-centered design principles (and ability to ignore them when needed)",
      "Ability to conduct user research and then disregard findings for gut feelings",
      "Talent for making minor changes look like complete redesigns",
    ],
    salary:
      "Competitive with performance incentives (based on arbitrary feedback)",
    location:
      "In-office position within our 'collaborative' open floor plan workspace",
    type: "Full-time with flexible arrangements (as long as you're always available)",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/ui-ux-designer",
  },
  {
    id: 5,
    name: "Product Owner",
    description:
      "Define product vision and strategy while being the perfect buffer between demanding executives, annoyed developers, and confused customers. Shield the team from reality while delivering the impossible.",
    requirements: [
      "Experience in product management (specifically in herding cats)",
      "Strong understanding of agile methodologies (and ability to explain why we're not actually doing agile)",
      "Excellent communication skills for telling stakeholders 'no' in ways that sound like 'yes'",
      "Ability to translate impossible business requirements into feasible user stories",
      "Data-driven approach to decision making (and creative interpretation of said data)",
    ],
    salary: "Base with performance bonuses for features no one asked for",
    location:
      "Remote with client-facing appearances (whenever flights are most expensive)",
    type: "Strategic role with evolving responsibilities (that grow daily)",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/product-owner",
  },
  {
    id: 6,
    name: "Backend Developer (Java)",
    description:
      "Maintain and modernize our mature codebase that powers critical business operations. Must be comfortable deciphering undocumented code written by developers who left a decade ago.",
    requirements: [
      "Strong experience with Java (specifically Java 6, which we're 'planning to upgrade soon')",
      "Knowledge of relational databases and SQL (expert at fixing queries you didn't write)",
      "Understanding of microservices architecture (to break down our monolith someday)",
      "Experience with legacy systems integration (SOAP, XML, and protocols you've never heard of)",
      "Willingness to take ownership of system performance (and blame for historical problems)",
    ],
    salary:
      "Includes equity compensation in addition to base (vesting over 10 years)",
    location:
      "Hybrid work arrangement (office during critical issues, remote for mundane tasks)",
    type: "Full-time with incident response expectations (primarily nights and weekends)",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/backend-java-developer",
  },
  {
    id: 7,
    name: "Team Lead",
    description:
      "Lead a cross-functional team of developers while coding full-time, attending endless meetings, and being accountable for all failures while sharing credit for successes.",
    requirements: [
      "Previous leadership experience (preferably in high-stress environments)",
      "Strong technical background in all technologies ever created",
      "Experience with agile methodologies and explaining why deadlines weren't met",
      "Excellent communication skills for delivering bad news upward and good news downward",
      "Ability to balance technical work, people management, and constant interruptions",
    ],
    salary: "Tied to team velocity and inversely proportional to turnover rate",
    location:
      "Co-located with development teams (in the noisiest part of the office)",
    type: "Leadership role with technical responsibilities (and administrative duties, and sales support...)",
    industry: "Technology",
    company: "Tech Corp",
    url: "https://techcorp.com/jobs/team-lead",
  },
];
