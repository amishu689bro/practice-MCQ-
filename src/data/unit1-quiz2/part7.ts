import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions7: QuizQuestion[] = [
  q(
    81,
    "Which OSI layer number is assigned to the Network Layer?",
    [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" },
    ],
    "B",
    "Network Layer is Layer 3.",
    "Network = Layer 3.",
    { trick: "Network = Layer 3" },
  ),
  q(
    82,
    "Which OSI layer number is assigned to the Data Link Layer?",
    [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    "B",
    "Data Link Layer is Layer 2.",
    "Data Link = Layer 2.",
    { trick: "Data Link = Layer 2" },
  ),
  q(
    83,
    "Which OSI layer number is assigned to the Physical Layer?",
    [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "7" },
    ],
    "A",
    "Physical Layer is Layer 1.",
    "Physical = Layer 1.",
    { trick: "Physical = Foundation = 1" },
  ),
  q(
    84,
    "Which OSI layer number is assigned to the Application Layer?",
    [
      { key: "A", text: "1" },
      { key: "B", text: "3" },
      { key: "C", text: "5" },
      { key: "D", text: "7" },
    ],
    "D",
    "Application Layer is Layer 7.",
    "Application = Top = 7.",
    { trick: "Application = Top = 7" },
  ),
  q(
    85,
    "Which of the following is a protocol rather than a network topology?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Ring" },
      { key: "C", text: "TCP" },
      { key: "D", text: "Bus" },
    ],
    "C",
    "Star, Ring and Bus describe network arrangements. TCP is a communication protocol.",
    "Star, Ring aur Bus topologies hain, jabki TCP ek protocol hai.",
    { trick: "TCP = Protocol" },
  ),
];