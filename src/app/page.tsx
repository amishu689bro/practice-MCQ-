import Link from "next/link";
import { quizzes } from "@/data";

export default function Home() {
  const totalQuestions = quizzes.reduce(
    (sum, quiz) => sum + quiz.questions.length,
    0,
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <header className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
          📚 Multiple Choice Questions
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          MCQ Practice
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Practice exam-style MCQs with instant feedback, detailed English +
          Hinglish explanations and memory tricks for every question.
        </p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {quizzes.length} quiz
          {quizzes.length === 1 ? "" : "zes"} · {totalQuestions} questions
        </p>
      </header>

      <section aria-label="Available quizzes" className="mt-10">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          Available Quizzes
        </h2>
        <div className="mt-6 grid gap-6">
          {quizzes.map((quiz) => (
            <article
              key={quiz.id}
              className={`rounded-3xl border p-6 shadow-sm transition dark:bg-zinc-950 ${quiz.locked ? "border-zinc-300 bg-zinc-100 opacity-80 dark:border-zinc-700 dark:bg-zinc-900" : "border-zinc-200 bg-white hover:border-indigo-300 hover:shadow-md dark:border-zinc-700"}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  {quiz.unit}
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {quiz.questions.length} MCQs
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {quiz.title}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {quiz.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                {quiz.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                {quiz.locked ? (
                  <span className="inline-flex w-full items-center justify-center rounded-full bg-zinc-300 px-6 py-3 font-semibold text-zinc-600 sm:w-auto dark:bg-zinc-700 dark:text-zinc-300">
                    🔒 Locked
                  </span>
                ) : (
                  <Link
                    href={`/quiz/${quiz.id}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
                  >
                    Start Quiz →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
