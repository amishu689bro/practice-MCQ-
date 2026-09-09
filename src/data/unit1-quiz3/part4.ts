import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions4: QuizQuestion[] = [
  q(
    116,
    "If there are 4 devices in a full mesh, how many links are required?",
    [
      { key: "A", text: "4" },
      { key: "B", text: "6" },
      { key: "C", text: "8" },
      { key: "D", text: "12" },
    ],
    "B",
    "For full mesh, links = n(n−1)/2. For n = 4: 4 × 3 / 2 = 6 links.",
    "4 devices mein har device ko baaki 3 devices se connect karna hai, lekin duplicate links count nahi karte. Answer = 6 links.",
    { trick: "Mesh Links = n(n−1)/2" },
  ),
  q(
    117,
    "If there are 5 devices in a full mesh, how many links are required?",
    [
      { key: "A", text: "5" },
      { key: "B", text: "8" },
      { key: "C", text: "10" },
      { key: "D", text: "15" },
    ],
    "C",
    "For full mesh, links = n(n−1)/2. For n = 5: 5 × 4 / 2 = 10 links.",
    "5 devices ke full mesh mein 10 direct links chahiye.",
    { trick: "5 → 10" },
  ),
  q(
    118,
    "Which topology is generally the most expensive in terms of physical links?",
    [
      { key: "A", text: "Bus" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Star" },
      { key: "D", text: "Full Mesh" },
    ],
    "D",
    "Full mesh requires a direct link between every pair of devices, making it the most expensive.",
    "Har device ko har device se connect karne ki wajah se cables/ports bahut zyada lagte hain.",
    { trick: "More connections = More cost" },
  ),
  q(
    119,
    "Which device simply repeats incoming signals to multiple ports in a traditional network?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Router" },
      { key: "C", text: "Switch" },
      { key: "D", text: "Gateway" },
    ],
    "A",
    "A traditional hub simply repeats incoming signals to its ports.",
    "Traditional hub incoming signals ko ports par repeat karta hai.",
    { trick: "Hub = Repeat" },
  ),
  q(
    120,
    "What is a major disadvantage of a hub?",
    [
      { key: "A", text: "It intelligently selects destination ports" },
      { key: "B", text: "It sends traffic to all ports" },
      { key: "C", text: "It performs IP routing" },
      { key: "D", text: "It creates IP addresses" },
    ],
    "B",
    "A traditional hub does not intelligently filter traffic based on destination MAC addresses; it repeats signals to multiple/all ports.",
    "Hub destination ko intelligently identify nahi karta; incoming signal ko multiple/all ports par repeat karta hai.",
    {
      exampleEn:
        "One PC sends data and other connected devices may also receive the repeated signal.",
      exampleHi:
        "Ek PC data bhejta hai aur hub us signal ko multiple connected ports par repeat karta hai.",
      trick: "Hub = All Ports",
    },
  ),
];