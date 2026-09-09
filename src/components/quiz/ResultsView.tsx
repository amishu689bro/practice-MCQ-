import { useState } from "react";
import Link from "next/link";
import type { OptionKey, Quiz } from "@/data/types";

interface ResultsViewProps {
  quiz: Quiz;
  answers: Record<number, OptionKey>;
  submitted: Record<number, boolean>;
  onRetake: () => void;
}

function verdictText(percent: number, correct: number, total: number) {
  if (correct === total) return "Perfect score! Outstanding! 🏆";
  if (percent >= 80) return "Excellent! Great job 🎉";
  if (percent >= 60) return "Good work — keep it up 👍";
  if (percent >= 40) return "Not bad — keep practicing 💪";
  return "Needs revision — review the explanations 📖";
}

export default function ResultsView({
  quiz,
  answers,
  submitted,
  onRetake,
}: ResultsViewProps) {
  const total = quiz.questions.length;
  const correct = quiz.questions.filter(
    (question) =>
      submitted[question.id] && answers[question.id] === question.correct,
  ).length;
  const attempted = quiz.questions.filter(
    (question) => submitted[question.id],
  ).length;
  const unattempted = total - attempted;
  const wrong = attempted - correct;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Quiz Complete!
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {quiz.title} — {quiz.unit}
        </p>

        <div
          aria-label={`Score ${correct} out of ${total}`}
          className="mx-auto mt-6 flex h-40 w-40 flex-col items-center justify-center rounded-full border-8 border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-950"
        >
          <span className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300">
            {correct}
          </span>
          <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
            / {total}
          </span>
        </div>

        <p className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {percent}%
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          {verdictText(percent, correct, total)}
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-900">
            <dt className="text-xs font-medium uppercase text-emerald-700 dark:text-emerald-300">
              Correct
            </dt>
            <dd className="mt-1 text-2xl font-bold text-emerald-800 dark:text-emerald-200">
              {correct}
            </dd>
          </div>
          <div className="rounded-xl bg-rose-50 p-3 dark:bg-rose-900">
            <dt className="text-xs font-medium uppercase text-rose-600 dark:text-rose-300">
              Wrong
            </dt>
            <dd className="mt-1 text-2xl font-bold text-rose-700 dark:text-rose-200">
              {wrong}
            </dd>
          </div>
          <div className="rounded-xl bg-zinc-100 p-3 dark:bg-zinc-800">
            <dt className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
              Skipped
            </dt>
            <dd className="mt-1 text-2xl font-bold text-zinc-700 dark:text-zinc-200">
              {unattempted}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onRetake}
            className="flex-1 rounded-full bg-indigo-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
          >
            ↻ Retake Quiz
          </button>
          <Link
            href="/"
            className="flex-1 rounded-full border border-zinc-300 px-6 py-3 text-center font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
<section
        aria-label="Answer review"
        className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-950"
      >
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Review Answers
        </h3>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Tap a question to see your answer and its explanation.
        </p>

        <ul className="mt-4 space-y-2">
          {quiz.questions.map((question) => {
            const userAnswer = answers[question.id];
            const isCorrect =
              submitted[question.id] && userAnswer === question.correct;
            const isExpanded = expandedId === question.id;
            const correctOption = question.options.find(
              (option) => option.key === question.correct,
            );
            const userOption = question.options.find(
              (option) => option.key === userAnswer,
            );
            return (
              <li key={question.id}>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedId(isExpanded ? null : question.id)
                  }
                  aria-expanded={isExpanded}
                  className="flex w-full items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-left text-base font-medium transition hover:border-indigo-300 dark:border-zinc-700 dark:bg-zinc-900"
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isCorrect
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                        : "bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-300"
                    }`}
                  >
                    {isCorrect ? "✓" : "✗"}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-zinc-800 dark:text-zinc-100">
                    <span className="mr-2 font-semibold text-zinc-500 dark:text-zinc-400">
                      Q{question.id}.
                    </span>
                    {question.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-zinc-400 dark:text-zinc-500"
                  >
                    {isExpanded ? "▾" : "▸"}
                  </span>
                </button>
                {isExpanded && (
                  <div className="mt-2 rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-700 dark:bg-zinc-950">
                    <p className="text-zinc-700 dark:text-zinc-200">
                      <span className="font-semibold">Your answer:</span>{" "}
                      {submitted[question.id] && userOption
                        ? `${userOption.key}. ${userOption.text}`
                        : "Not attempted"}
                    </p>
                    <p className="mt-1 text-emerald-700 dark:text-emerald-300">
                      <span className="font-semibold">Correct answer:</span>{" "}
                      {correctOption
                        ? `${correctOption.key}. ${correctOption.text}`
                        : ""}
                    </p>
                    <p className="mt-2 text-zinc-700 dark:text-zinc-200">
                      {question.explanationEn}
                    </p>
                    {question.trick && (
                      <p className="mt-2 text-amber-800 dark:text-amber-300">
                        🧠 {question.trick}
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}