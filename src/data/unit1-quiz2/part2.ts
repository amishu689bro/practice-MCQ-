import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions2: QuizQuestion[] = [
  q(
    56,
    "Which topology has a single point of central connection?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Mesh" },
      { key: "C", text: "Bus" },
      { key: "D", text: "Ring" },
    ],
    "A",
    "In a basic star topology, all devices connect to a central device.",
    "Star topology mein saare devices ek central device se connected hote hain.",
    {
      exampleEn: "PCs connected to one central switch.",
      exampleHi: "Saare lab computers ek central switch se connected.",
      trick: "Star = One Center",
    },
  ),
  q(
    57,
    "What is the major disadvantage of a traditional bus topology?",
    [
      { key: "A", text: "It requires a central switch" },
      { key: "B", text: "Failure of the main cable can affect the whole network" },
      { key: "C", text: "It has too many direct links" },
      { key: "D", text: "It requires a router for every computer" },
    ],
    "B",
    "The backbone is critical in bus topology. If it fails, communication can be disrupted for the connected devices.",
    "Bus topology mein main backbone cable critical hoti hai. Agar backbone fail ho gayi to network ki communication affect ho sakti hai.",
    { trick: "Bus → Backbone fails = Problem" },
  ),
  q(
    58,
    "Which topology generally requires the greatest number of physical links?",
    [
      { key: "A", text: "Bus" },
      { key: "B", text: "Star" },
      { key: "C", text: "Mesh" },
      { key: "D", text: "Ring" },
    ],
    "C",
    "A full mesh provides direct links between pairs of devices, so the number of connections grows rapidly.",
    "Full mesh mein devices ke beech bahut saare direct links hote hain, isliye cables/connections zyada chahiye.",
    { trick: "Mesh = Maximum Links" },
  ),
  q(
    59,
    "Which topology is generally easiest to expand by adding a new device to a central switch?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Bus" },
      { key: "D", text: "Full Mesh" },
    ],
    "A",
    "In a star network, a new device can generally be connected to an available port on the central switch.",
    "Star mein new computer ko central switch ke ek available port se connect karna relatively easy hota hai.",
    { trick: "Star → Add to Center" },
  ),
  q(
    60,
    "In a ring topology, each device is generally connected to:",
    [
      { key: "A", text: "Every other device" },
      { key: "B", text: "One central device" },
      { key: "C", text: "Two neighboring devices" },
      { key: "D", text: "No device" },
    ],
    "C",
    "In a basic ring, each node connects to its two neighboring nodes.",
    "Ring topology mein har device usually apne do neighboring devices se connected hota hai.",
    { trick: "Ring = 2 Neighbors" },
  ),
];