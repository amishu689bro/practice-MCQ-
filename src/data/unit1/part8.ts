import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions8: QuizQuestion[] = [
  q(
    36,
    "Which OSI layer establishes and manages sessions?",
    [
      { key: "A", text: "Session" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Network" },
      { key: "D", text: "Physical" },
    ],
    "A",
    "Session Layer establishes, manages and terminates communication sessions.",
    "Session Layer communication session ko start, manage aur end karne se related hai.",
    { trick: "Session = Session Manage" },
  ),
  q(
    37,
    "Which OSI layer is responsible for reliable framing and MAC addressing?",
    [
      { key: "A", text: "Application" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Network" },
      { key: "D", text: "Transport" },
    ],
    "B",
    "The Data Link Layer handles frames and MAC addressing on local links.",
    "Data Link Layer frames aur MAC addressing ke saath kaam karti hai.",
    { trick: "Data Link → Frame + MAC" },
  ),
  q(
    38,
    "Which OSI layer deals with transmission of raw bits?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Network" },
      { key: "C", text: "Session" },
      { key: "D", text: "Application" },
    ],
    "A",
    "The Physical Layer transmits raw bits over the physical medium.",
    "Physical Layer actual medium par bits (0s and 1s) transmit karti hai.",
    { trick: "Physical = Bits" },
  ),
  q(
    39,
    "Which model is associated with the Internet protocol suite?",
    [
      { key: "A", text: "OSI" },
      { key: "B", text: "TCP/IP" },
      { key: "C", text: "BIOS" },
      { key: "D", text: "ASCII" },
    ],
    "B",
    "TCP/IP is the protocol suite used as the foundation of the Internet.",
    "TCP/IP Internet communication ke liye major protocol suite hai.",
    {
      exampleEn:
        "When your phone accesses a website over the Internet, TCP/IP protocols are involved.",
      exampleHi:
        "Jab tum phone se website open karte ho, Internet communication mein TCP/IP protocols ka use hota hai.",
      trick: "Internet → TCP/IP",
    },
  ),
  q(
    40,
    "What does TCP stand for?",
    [
      { key: "A", text: "Transmission Control Protocol" },
      { key: "B", text: "Transfer Communication Protocol" },
      { key: "C", text: "Transmission Connection Process" },
      { key: "D", text: "Transport Computer Protocol" },
    ],
    "A",
    "TCP stands for Transmission Control Protocol.",
    "TCP ka full form Transmission Control Protocol hai.",
    { trick: "TCP → Transmission Control Protocol" },
  ),
];