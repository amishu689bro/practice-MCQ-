export type OptionKey = "A" | "B" | "C" | "D";

export interface QuizOption {
  key: OptionKey;
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correct: OptionKey;
  /** Explanation in English */
  explanationEn: string;
  /** Explanation in Hinglish */
  explanationHi: string;
  /** Real-life example in English */
  exampleEn?: string;
  /** Real-life example in Hinglish */
  exampleHi?: string;
  /** Memory trick */
  trick?: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  unit: string;
  description: string;
  topics: string[];
  questions: QuizQuestion[];
}