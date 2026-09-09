import type { QuizQuestion } from "@/data/types";

interface ExplanationPanelProps {
  question: QuizQuestion;
  isCorrect: boolean;
  correctText: string;
}

/**
 * Feedback panel shown after an answer is submitted:
 * result banner, English + Hinglish explanation, real-life examples and the memory trick.
 */
export default function ExplanationPanel({
  question,
  isCorrect,
  correctText,
}: ExplanationPanelProps) {
  return (
    <section
      aria-live="polite"
      className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <div
        role="status"
        className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-base font-semibold ${
          isCorrect
            ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
            : "border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
        }`}
      >
        <span aria-hidden="true" className="text-lg">
          {isCorrect ? "✅" : "❌"}
        </span>
        <span>
          {isCorrect ? "Correct! Excellent." : `Wrong. Correct answer: ${correctText}`}
        </span>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Explanation — English
        </h3>
        <p className="mt-2 text-zinc-800 dark:text-zinc-100">
          {question.explanationEn}
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
        <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Explanation — Hinglish
        </h3>
        <p className="mt-2 text-zinc-800 dark:text-zinc-100">
          {question.explanationHi}
        </p>
      </div>

      {(question.exampleEn || question.exampleHi) && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
          <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Real-Life Example
          </h3>
          {question.exampleEn && (
            <p className="mt-2 text-zinc-800 dark:text-zinc-100">
              <span className="font-semibold text-zinc-500">EN:</span>{" "}
              {question.exampleEn}
            </p>
          )}
          {question.exampleHi && (
            <p className="mt-2 text-zinc-800 dark:text-zinc-100">
              <span className="font-semibold text-zinc-500">Hinglish:</span>{" "}
              {question.exampleHi}
            </p>
          )}
        </div>
      )}

      {question.trick && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-500 dark:bg-amber-950">
          <span aria-hidden="true" className="text-xl">
            🧠
          </span>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">
              Trick
            </h3>
            <p className="mt-1 text-amber-900 dark:text-amber-200">
              {question.trick}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}