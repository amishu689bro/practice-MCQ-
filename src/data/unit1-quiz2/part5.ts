import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions5: QuizQuestion[] = [
  q(
    71,
    "What is the purpose of layering in a network architecture?",
    [
      { key: "A", text: "To increase cable weight" },
      { key: "B", text: "To separate communication functions" },
      { key: "C", text: "To remove communication rules" },
      { key: "D", text: "To eliminate hardware" },
    ],
    "B",
    "Layering breaks networking into smaller functional components.",
    "Layering complex networking tasks ko different manageable functions mein divide karti hai.",
    { trick: "Layering = Divide Functions" },
  ),
  q(
    72,
    "Which layer is responsible for moving data between directly connected nodes using frames?",
    [
      { key: "A", text: "Data Link" },
      { key: "B", text: "Network" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Application" },
    ],
    "A",
    "The Data Link Layer handles frame delivery over a local/direct link.",
    "Data Link Layer local/direct link par frames ke delivery se deal karti hai.",
    { trick: "Data Link → Frame" },
  ),
  q(
    73,
    "Which OSI layer provides logical addressing?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Network" },
      { key: "D", text: "Presentation" },
    ],
    "C",
    "Logical addressing such as IP addressing belongs to the Network Layer.",
    "IP addressing jaisi logical addressing Network Layer se related hai.",
    { trick: "Network → IP" },
  ),
  q(
    74,
    "Which OSI layer is associated with segmentation and reassembly?",
    [
      { key: "A", text: "Transport" },
      { key: "B", text: "Physical" },
      { key: "C", text: "Presentation" },
      { key: "D", text: "Data Link" },
    ],
    "A",
    "The Transport Layer can divide application data into smaller units and reassemble them at the destination.",
    "Transport Layer data ko smaller units mein divide aur destination par reassemble kar sakti hai.",
    { trick: "Transport → Segmentation" },
  ),
  q(
    75,
    "Which OSI layer is associated with establishing, maintaining and terminating sessions?",
    [
      { key: "A", text: "Network" },
      { key: "B", text: "Session" },
      { key: "C", text: "Physical" },
      { key: "D", text: "Data Link" },
    ],
    "B",
    "The Session Layer establishes, manages and terminates communication sessions.",
    "Session Layer communication sessions ko establish, maintain aur terminate karti hai.",
    { trick: "Session Layer → Session" },
  ),
];