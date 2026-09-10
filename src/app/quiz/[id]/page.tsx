import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getQuizById } from "@/data";
import QuizPlayer from "@/components/quiz/QuizPlayer";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const quiz = getQuizById(id);
  if (!quiz) {
    return { title: "Quiz Not Found | MCQ Practice" };
  }
  return {
    title: `${quiz.title} — ${quiz.unit}`,
    description: quiz.description,
  };
}

export default async function QuizPage({ params }: Props) {
  const { id } = await params;
  const quiz = getQuizById(id);
  if (!quiz || quiz.locked) {
    notFound();
  }

  return <QuizPlayer quiz={quiz} />;
}