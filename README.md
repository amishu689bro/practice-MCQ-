# MCQ Practice

A [Next.js](https://nextjs.org) quiz app for practicing exam-style multiple choice
questions with instant feedback, detailed **English + Hinglish** explanations,
real-life examples and memory tricks.

## Features

- 📋 **Quiz home page** (`/`) — lists all available quizzes with topic tags and question counts.
- ❓ **Interactive quiz player** (`/quiz/[id]`) — one question at a time:
  - Select an option, then **Check Answer** for instant feedback.
  - Shows the correct answer, English + Hinglish explanation, real-life example and a 🧠 memory trick.
  - Green/red option highlighting, a sticky score + progress bar, and a 1–50 question navigator grid.
- ✅ **Results screen** — score, percentage, verdict, correct/wrong/skipped stats, and an expandable review of every question.
- 💾 **Progress persistence** — answers are saved to `localStorage` (key `mcq-progress-v1:<quiz-id>`), so refreshing or navigating away never loses your place. Use **↻ Reset** / **↻ Retake Quiz** to start over.
- ♿ Accessible (semantic landmarks, ARIA labels, keyboard-friendly) and dark-mode aware.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Home page (quiz list)
│   ├── layout.tsx          # Root layout + metadata
│   └── quiz/[id]/page.tsx  # Dynamic quiz route
├── components/quiz/        # Quiz player components
│   ├── QuizPlayer.tsx      # Main player (client component)
│   ├── OptionList.tsx      # A–D option buttons
│   ├── ExplanationPanel.tsx# Feedback + explanations + trick
│   ├── ResultsView.tsx     # Score summary + answer review
│   └── state.ts            # localStorage-backed external store (useSyncExternalStore)
└── data/
    ├── types.ts            # Quiz / Question / Option types
    ├── helpers.ts          # Question builder helper
    ├── index.ts            # Quiz registry (add new quizzes here)
    └── unit1/              # "Computer Networks — Unit 1" (50 MCQs)
        ├── index.ts        # Assembled quiz
        └── part1..10.ts    # Questions in chunks of 5
```

## Adding a New Quiz

1. Create `src/data/<myquiz>/partX.ts` files exporting `QuizQuestion[]` (see `src/data/unit1/` for the pattern).
2. Assemble them in `src/data/<myquiz>/index.ts` into a `Quiz` object (with a unique `id`).
3. Add the quiz to the `quizzes` array in `src/data/index.ts`.

The home page and `/quiz/<id>` route pick it up automatically.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# practice-MCQ-
