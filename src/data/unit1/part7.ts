import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions7: QuizQuestion[] = [
  q(
    31,
    "Which is the top layer of the OSI model?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Application" },
      { key: "D", text: "Network" },
    ],
    "C",
    "Application is Layer 7 — the top layer of the OSI model.",
    "Application OSI ki sabse upar wali Layer 7 hai.",
    { trick: "Application = 7" },
  ),
  q(
    32,
    "Which is the bottom layer of the OSI model?",
    [
      { key: "A", text: "Application" },
      { key: "B", text: "Physical" },
      { key: "C", text: "Network" },
      { key: "D", text: "Transport" },
    ],
    "B",
    "Physical Layer is Layer 1 — the bottom layer of the OSI model.",
    "Physical Layer OSI model ki sabse neeche wali Layer 1 hai.",
    { trick: "Physical = 1" },
  ),
  q(
    33,
    "Which OSI layer is responsible for routing?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Network" },
      { key: "D", text: "Presentation" },
    ],
    "C",
    "The Network Layer handles logical addressing and routing.",
    "Network Layer ka major kaam logical addressing aur routing hai.",
    {
      exampleEn:
        "A router decides which path a packet should take toward another network.",
      exampleHi:
        "Router decide karta hai packet ko next network tak kis path se bhejna hai.",
      trick: "Network Layer → Routing",
    },
  ),
  q(
    34,
    "Which OSI layer is responsible for end-to-end delivery?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Network" },
      { key: "D", text: "Data Link" },
    ],
    "B",
    "The Transport Layer provides end-to-end transport services between applications on communicating hosts.",
    "Transport Layer source application se destination application tak end-to-end communication provide karti hai.",
    { trick: "Transport = End-to-End" },
  ),
  q(
    35,
    "Which OSI layer deals with data representation and translation?",
    [
      { key: "A", text: "Presentation" },
      { key: "B", text: "Network" },
      { key: "C", text: "Physical" },
      { key: "D", text: "Transport" },
    ],
    "A",
    "The Presentation Layer is associated with data representation, translation, encryption and compression functions.",
    "Presentation Layer data ke format/representation, translation, encryption aur compression jaise functions se associated hai.",
    { trick: "Presentation = Data Presentation" },
  ),
];