import type { Quiz } from "../types";
import { questions1 } from "./part1";
import { questions2 } from "./part2";
import { questions3 } from "./part3";
import { questions4 } from "./part4";
import { questions5 } from "./part5";
import { questions6 } from "./part6";
import { questions7 } from "./part7";
import { questions8 } from "./part8";
import { questions9 } from "./part9";
import { questions10 } from "./part10";

export const unit1Quiz3: Quiz = {
  id: "computer-networks-unit-1-quiz-3",
  title: "Computer Networks",
  subject: "Computer Networks",
  unit: "Unit 1 · Quiz 3",
  description:
    "Network types (PAN/LAN/MAN/WAN), hybrid & tree topologies, full-mesh link calculations, hub vs switch vs router, OSI layer ordering & numbering and TCP/IP — 50 more MCQs (Q101–Q150) with detailed English + Hinglish explanations and memory tricks.",
  topics: [
    "Network Types",
    "Topologies",
    "Devices",
    "OSI Layers",
    "TCP/IP",
    "Model vs Protocol",
  ],
  questions: [
    ...questions1,
    ...questions2,
    ...questions3,
    ...questions4,
    ...questions5,
    ...questions6,
    ...questions7,
    ...questions8,
    ...questions9,
    ...questions10,
  ],
};