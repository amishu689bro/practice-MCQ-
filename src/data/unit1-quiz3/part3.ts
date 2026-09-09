import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions3: QuizQuestion[] = [
  q(
    111,
    "Which topology forms a closed loop?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Bus" },
      { key: "D", text: "Tree" },
    ],
    "B",
    "In ring topology, devices form a closed circular path.",
    "Ring mein connections closed loop/circle banate hain.",
    { trick: "Ring = Loop" },
  ),
  q(
    112,
    "Which topology combines characteristics of more than one topology?",
    [
      { key: "A", text: "Hybrid" },
      { key: "B", text: "Bus only" },
      { key: "C", text: "Ring only" },
      { key: "D", text: "Point-to-point only" },
    ],
    "A",
    "A hybrid topology combines two or more different topology types.",
    "Hybrid topology mein multiple topology types combine hote hain.",
    {
      exampleEn:
        "One part of an organization may use star topology and another part may use a different arrangement.",
      exampleHi:
        "Ek organization ke ek section mein star aur doosre section mein different topology ho sakti hai; combined structure hybrid ho sakta hai.",
      trick: "Hybrid = Mix",
    },
  ),
  q(
    113,
    "Which topology is hierarchical in structure?",
    [
      { key: "A", text: "Tree" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Bus" },
      { key: "D", text: "Point-to-point" },
    ],
    "A",
    "Tree topology uses a hierarchical arrangement of connected devices or network segments.",
    "Tree topology hierarchical structure follow karti hai, jaise branches of a tree.",
    {
      exampleEn: "A main network connects several departmental networks.",
      exampleHi:
        "Main network se different departments ke sub-networks connected hain.",
      trick: "Tree = Hierarchy",
    },
  ),
  q(
    114,
    "Which topology resembles branches of a tree?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Tree" },
      { key: "C", text: "Ring" },
      { key: "D", text: "Bus" },
    ],
    "B",
    "Tree topology gets its name from its tree-like branching structure.",
    "Tree topology apni tree jaisi branching shape ki wajah se aisa naam rakhta hai.",
    { trick: "Tree topology = Tree shape" },
  ),
  q(
    115,
    "What is the major characteristic of full mesh topology?",
    [
      { key: "A", text: "One backbone" },
      { key: "B", text: "One central device" },
      { key: "C", text: "Every device has a direct link with every other device" },
      { key: "D", text: "Devices form a single loop" },
    ],
    "C",
    "In full mesh, every pair of devices has a direct connection.",
    "Full mesh mein har device directly har doosre device se connected hota hai.",
    { trick: "Full Mesh = Everyone with Everyone" },
  ),
];