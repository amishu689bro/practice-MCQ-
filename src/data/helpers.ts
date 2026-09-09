import type { QuizQuestion } from "./types";

/**
 * Helper to build a QuizQuestion concisely.
 */
export const q = (
  id: number,
  question: string,
  options: QuizQuestion["options"],
  correct: QuizQuestion["correct"],
  explanationEn: string,
  explanationHi: string,
  extra?: Partial<Pick<QuizQuestion, "exampleEn" | "exampleHi" | "trick">>,
): QuizQuestion => ({
  id,
  question,
  options,
  correct,
  explanationEn,
  explanationHi,
  ...extra,
});