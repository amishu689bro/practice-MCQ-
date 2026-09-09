import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions9: QuizQuestion[] = [
  q(
    141,
    "Which OSI layer is numbered 5?",
    [
      { key: "A", text: "Network" },
      { key: "B", text: "Session" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Presentation" },
    ],
    "B",
    "The Session Layer is Layer 5 in the OSI model.",
    "Session Layer OSI mein Layer 5 hai.",
    { trick: "Session = 5" },
  ),
  q(
    142,
    "Which OSI layer is numbered 6?",
    [
      { key: "A", text: "Presentation" },
      { key: "B", text: "Application" },
      { key: "C", text: "Session" },
      { key: "D", text: "Transport" },
    ],
    "A",
    "The Presentation Layer is Layer 6 in the OSI model.",
    "Presentation Layer OSI mein Layer 6 hai.",
    { trick: "Presentation = 6" },
  ),
  q(
    143,
    "Which OSI layer is numbered 2?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Network" },
      { key: "D", text: "Transport" },
    ],
    "B",
    "The Data Link Layer is Layer 2 in the OSI model.",
    "Data Link Layer OSI mein Layer 2 hai.",
    { trick: "Data Link = 2" },
  ),
  q(
    144,
    "Which OSI layer is numbered 3?",
    [
      { key: "A", text: "Network" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Session" },
      { key: "D", text: "Data Link" },
    ],
    "A",
    "The Network Layer is Layer 3 in the OSI model.",
    "Network Layer OSI mein Layer 3 hai.",
    { trick: "Network = 3" },
  ),
  q(
    145,
    "Which OSI layer is numbered 4?",
    [
      { key: "A", text: "Session" },
      { key: "B", text: "Network" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Presentation" },
    ],
    "C",
    "The Transport Layer is Layer 4 in the OSI model.",
    "Transport Layer OSI mein Layer 4 hai.",
    { trick: "Transport = 4" },
  ),
];