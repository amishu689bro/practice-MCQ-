import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions6: QuizQuestion[] = [
  q(
    26,
    "Why are layers used in networking?",
    [
      { key: "A", text: "To make cables longer" },
      { key: "B", text: "To divide complex networking tasks into manageable functions" },
      { key: "C", text: "To increase monitor resolution" },
      { key: "D", text: "To remove protocols" },
    ],
    "B",
    "Layering divides a complex communication system into smaller, well-defined functions.",
    "Networking bahut complex hai, isliye usko different layers mein divide kar diya jaata hai taaki har layer ka specific kaam ho.",
    {
      exampleEn:
        "Like a delivery company dividing work into pickup, transport, sorting and delivery.",
      exampleHi:
        "Courier system mein pickup, sorting, transport aur delivery alag-alag stages hote hain — networking layers bhi similar idea follow karti hain.",
      trick: "Layer = Divide & Manage",
    },
  ),
  q(
    27,
    "What is a protocol?",
    [
      { key: "A", text: "A network cable" },
      { key: "B", text: "A set of communication rules" },
      { key: "C", text: "A computer monitor" },
      { key: "D", text: "A topology" },
    ],
    "B",
    "A protocol defines rules and conventions that devices follow to communicate.",
    "Protocol basically communication ke rules hote hain.",
    {
      exampleEn: "People speaking the same language can communicate more easily.",
      exampleHi:
        "Do log agar same language ke rules follow karte hain to easily communicate kar paate hain.",
      trick: "Protocol = Rules",
    },
  ),
  q(
    28,
    "Which model has seven layers?",
    [
      { key: "A", text: "TCP/IP Model" },
      { key: "B", text: "OSI Model" },
      { key: "C", text: "Ethernet Model" },
      { key: "D", text: "Internet Model" },
    ],
    "B",
    "The OSI reference model contains seven layers.",
    "OSI model mein total 7 layers hoti hain.",
    { trick: "OSI = 7 Layers" },
  ),
  q(
    29,
    "What is the full form of OSI?",
    [
      { key: "A", text: "Open Systems Interconnection" },
      { key: "B", text: "Operating System Internet" },
      { key: "C", text: "Open Software Interface" },
      { key: "D", text: "Online System Integration" },
    ],
    "A",
    "OSI stands for Open Systems Interconnection — a reference model for how applications communicate over a network.",
    "OSI ka full form Open Systems Interconnection hai, jo networking layers ko samajhne ka reference model hai.",
    { trick: "OSI → Open Systems Interconnection" },
  ),
  q(
    30,
    "How many layers are in the OSI model?",
    [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "7" },
    ],
    "D",
    "The seven OSI layers are: 7 Application, 6 Presentation, 5 Session, 4 Transport, 3 Network, 2 Data Link, 1 Physical.",
    "OSI model mein total 7 layers hoti hain.",
    {
      trick:
        "All People Seem To Need Data Processing → A(Application), P(Presentation), S(Session), T(Transport), N(Network), D(Data Link), P(Physical)",
    },
  ),
];