# Corp-Ture: Corporate Interview Simulator

**Corp-Ture** is a satirical corporate interview simulator that parodies the often absurd nature of job interviews. The application features AI-powered interviewers with distinct personalities who conduct mock interviews for various job positions.

## Features

- Browse available job listings
- Apply for positions and experience a simulated interview
- Interact with multiple AI interviewers (HR, Senior Developer, Junior Developer)
- Receive real-time feedback and scoring during your interview
- Experience the awkward, passive-aggressive, and sometimes absurd nature of corporate interviews

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, set up your environment variables:

1. Copy the example environment file:

```bash
cp .env.example .env.local
```

2. Open `.env.local` in your editor and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

You need a valid OpenAI API key to power the AI interviewers. You can get one from [OpenAI's website](https://platform.openai.com/account/api-keys).

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to browse available jobs and start your mock interview experience.

## Project Structure

- `/app` - Next.js app router pages
- `/components` - Reusable UI components
- `/features` - Feature-based components (job application, interview simulation)
- `/lib` - Utility functions, types, and data constants

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
