import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions7: QuizQuestion[] = [
  q(
    131,
    "Which layer is responsible for framing?",
    [
      { key: "A", text: "Data Link" },
      { key: "B", text: "Network" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Presentation" },
    ],
    "A",
    "Data Link Layer packages bits into frames for local-link communication.",
    "Data Link Layer bits ko frames ke form mein organize karti hai.",
    { trick: "Frame → Data Link" },
  ),
  q(
    132,
    "Which layer is responsible for end-to-end transport services?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Network" },
    ],
    "C",
    "The Transport Layer provides end-to-end transport services between communicating hosts.",
    "Transport Layer end-to-end transport services provide karti hai.",
    { trick: "Transport = End-to-End" },
  ),
  q(
    133,
    "Which layer is associated with dialogue/session management?",
    [
      { key: "A", text: "Session" },
      { key: "B", text: "Physical" },
      { key: "C", text: "Network" },
      { key: "D", text: "Data Link" },
    ],
    "A",
    "The Session Layer establishes, manages and terminates dialogues/sessions.",
    "Session Layer dialogue/session management se associated hai.",
    { trick: "Session → Session Management" },
  ),
  q(
    134,
    "Which layer is associated with syntax and data representation?",
    [
      { key: "A", text: "Presentation" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Network" },
      { key: "D", text: "Physical" },
    ],
    "A",
    "Presentation deals with how data is represented, including translation and related functions.",
    "Presentation Layer data ke format/representation se related hoti hai.",
    { trick: "Presentation = Presentation of Data" },
  ),
  q(
    135,
    "Which layer is closest to the actual network applications?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Application" },
      { key: "D", text: "Network" },
    ],
    "C",
    "The Application Layer provides network services directly used by applications.",
    "Application Layer network applications ke closest hoti hai.",
    { trick: "Application = User Side" },
  ),
];