import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions5: QuizQuestion[] = [
  q(
    21,
    "Which topology has the easiest central management?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Bus" },
      { key: "C", text: "Ring" },
      { key: "D", text: "Point-to-point" },
    ],
    "A",
    "In star topology, devices connect through a central device, making management and troubleshooting relatively easier.",
    "Star mein ek central switch/hub hota hai, isliye network ko manage aur troubleshoot karna comparatively easy hota hai.",
    { trick: "Star = Central Control" },
  ),
  q(
    22,
    "What happens if the central switch fails in a basic star topology?",
    [
      { key: "A", text: "Only one cable fails" },
      { key: "B", text: "Entire connected network segment can be affected" },
      { key: "C", text: "Nothing happens" },
      { key: "D", text: "Router automatically repairs it" },
    ],
    "B",
    "The central device is a critical point in star topology. If it fails, connected devices may lose communication.",
    "Star topology ka central switch important hota hai. Agar switch fail ho gaya, to usse connected devices ki communication stop ho sakti hai.",
    {
      exampleEn:
        "If an office's central switch shuts down, many PCs may lose network connectivity.",
      exampleHi:
        "Office ka main switch band ho gaya to connected PCs ka network disconnect ho sakta hai.",
      trick: "Star = Center is Critical",
    },
  ),
  q(
    23,
    "Which topology requires a backbone cable?",
    [
      { key: "A", text: "Bus" },
      { key: "B", text: "Star" },
      { key: "C", text: "Mesh" },
      { key: "D", text: "Ring" },
    ],
    "A",
    "Bus topology uses a single main backbone cable to which all devices connect.",
    "Bus topology mein devices ek main backbone cable se connected hote hain.",
    { trick: "Bus → Backbone" },
  ),
  q(
    24,
    "Which topology generally provides multiple paths between devices?",
    [
      { key: "A", text: "Bus" },
      { key: "B", text: "Star" },
      { key: "C", text: "Mesh" },
      { key: "D", text: "Ring" },
    ],
    "C",
    "Mesh has multiple interconnections, so alternative paths may exist.",
    "Mesh mein multiple links hone ki wajah se alternate paths available ho sakte hain.",
    { trick: "Mesh = Multiple Paths" },
  ),
  q(
    25,
    "What is network software architecture?",
    [
      { key: "A", text: "Physical cable arrangement" },
      { key: "B", text: "Organization of network software functions into layers/components" },
      { key: "C", text: "Computer hardware only" },
      { key: "D", text: "Network electricity supply" },
    ],
    "B",
    "Network software architecture organizes communication functions into structured layers and protocols.",
    "Network software architecture communication ke functions ko layers aur protocols mein organize karta hai.",
    { trick: "Software Architecture = Layers + Protocols" },
  ),
];