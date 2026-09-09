"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { OptionKey, Quiz } from "@/data/types";
import {
  clearState,
  loadState,
  putQuizState,
  useQuizState,
} from "./state";
import ExplanationPanel from "./ExplanationPanel";
import OptionList from "./OptionList";
import ResultsView from "./ResultsView";

export default function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const total = quiz.questions.length;

  const state = useQuizState(quiz.id);

  useEffect(() => {
    // Rehydrate after a route remount so browser-back navigation restores saved answers.
    putQuizState(quiz.id, loadState(quiz.id));
  }, [quiz.id]);

  const safeIndex = Math.min(state.currentIndex, total - 1);
  const currentQuestion = quiz.questions[safeIndex];
  const selected = state.answers[currentQuestion.id];
  const isSubmitted = state.submitted[currentQuestion.id] === true;
  const isCorrectAnswer =
    isSubmitted && selected === currentQuestion.correct;
  const correctOption = currentQuestion.options.find(
    (option) => option.key === currentQuestion.correct,
  );
  const correctText = correctOption
    ? `${correctOption.key}. ${correctOption.text}`
    : "";
  const submittedCount = quiz.questions.filter(
    (question) => state.submitted[question.id],
  ).length;
  const correctCount = quiz.questions.filter(
    (question) =>
      state.submitted[question.id] &&
      state.answers[question.id] === question.correct,
  ).length;
  const progressPercent =
    total === 0 ? 0 : Math.round((submittedCount / total) * 100);

  function selectOption(key: OptionKey) {
    if (isSubmitted) return;
    putQuizState(quiz.id, {
      ...state,
      answers: { ...state.answers, [currentQuestion.id]: key },
    });
  }

  function submitAnswer() {
    if (!selected) return;
    putQuizState(quiz.id, {
      ...state,
      submitted: { ...state.submitted, [currentQuestion.id]: true },
    });
  }

  function goTo(index: number) {
    putQuizState(quiz.id, {
      ...state,
      currentIndex: Math.min(Math.max(index, 0), total - 1),
    });
  }

  function goNext() {
    if (safeIndex >= total - 1) {
      putQuizState(quiz.id, { ...state, phase: "results" });
    } else {
      putQuizState(quiz.id, { ...state, currentIndex: safeIndex + 1 });
    }
  }

  function retake() {
    clearState(quiz.id);
    putQuizState(quiz.id, loadState(quiz.id));
  }

  if (state.phase === "results") {
    return (
      <ResultsView
        quiz={quiz}
        answers={state.answers}
        submitted={state.submitted}
        onRetake={retake}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-700 dark:bg-zinc-950">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3">
          <Link
            href="/"
            className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            ← Quizzes
          </Link>
          <span className="min-w-0 flex-1 truncate text-base font-semibold text-zinc-800 dark:text-zinc-100">
            {quiz.title} · {quiz.unit}
          </span>
          <span
            className="rounded-full bg-indigo-100 px-3 py-1.5 text-sm font-bold text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
            aria-label={`Score ${correctCount} correct`}
          >
            ✅ {correctCount}
          </span>
          <button
            type="button"
            onClick={retake}
            className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            ↻ Reset
          </button>
        </div>
        <div
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${submittedCount} of ${total} questions answered`}
          className="h-1.5 bg-zinc-200 dark:bg-zinc-800"
        >
          <div
            className="h-1.5 bg-indigo-600 dark:bg-indigo-400 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      <main className="px-4 py-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              Question {safeIndex + 1} of {total}
            </span>
            {isSubmitted &&
              (isCorrectAnswer ? (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                  ✅ Correct
                </span>
              ) : (
                <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700 dark:bg-rose-900 dark:text-rose-200">
                  ❌ Wrong
                </span>
              ))}
          </div>
<h2 className="mt-4 text-lg font-semibold leading-relaxed text-zinc-900 dark:text-zinc-50">
            {currentQuestion.question}
          </h2>

          <div className="mt-5">
            <OptionList
              question={currentQuestion}
              selected={selected}
              submitted={isSubmitted}
              onSelect={selectOption}
            />
          </div>

          {isSubmitted ? (
            <>
              <ExplanationPanel
                question={currentQuestion}
                isCorrect={isCorrectAnswer}
                correctText={correctText}
              />
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => goTo(safeIndex - 1)}
                  disabled={safeIndex === 0}
                  className="flex-1 rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="flex-1 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  {safeIndex >= total - 1
                    ? "See Results →"
                    : "Next Question →"}
                </button>
              </div>
            </>
          ) : (
            <button
              type="button"
              onClick={submitAnswer}
              disabled={!selected}
              className="mt-5 w-full rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 dark:disabled:bg-zinc-700 dark:disabled:text-zinc-400"
            >
              Check Answer
            </button>
          )}
        </div>

        <nav
          aria-label="Question navigation"
          className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
        >
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {submittedCount} of {total} answered
            {submittedCount === total ? "· Tap “See Results” to finish" : ""}
          </p>
          <div className="mt-3 grid grid-cols-10 gap-1.5">
            {quiz.questions.map((question, questionIndex) => {
              const answered = state.submitted[question.id] === true;
              const wasCorrect =
                answered && state.answers[question.id] === question.correct;
              const isCurrent = question.id === currentQuestion.id;
              let cell =
                "bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300";
              if (answered && wasCorrect) {
                cell =
                  "bg-emerald-500 text-white hover:bg-emerald-600";
              } else if (answered) {
                cell = "bg-rose-500 text-white hover:bg-rose-600";
              }
              return (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => goTo(questionIndex)}
                  aria-label={`Go to question ${question.id}`}
                  aria-current={isCurrent ? "true" : undefined}
                  className={`flex h-8 w-full items-center justify-center rounded-md text-sm font-semibold transition ${cell} ${
                    isCurrent ? "ring-2 ring-indigo-500" : ""
                  }`}
                >
                  {question.id}
                </button>
              );
            })}
          </div>
        </nav>
      </main>
    </div>
  );
}