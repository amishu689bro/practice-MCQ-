import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions1: QuizQuestion[] = [
  q(
    101,
    "What is the main advantage of using a network?",
    [
      { key: "A", text: "Resource sharing" },
      { key: "B", text: "Increasing keyboard size" },
      { key: "C", text: "Removing storage" },
      { key: "D", text: "Reducing screen resolution" },
    ],
    "A",
    "A network allows computers to share resources such as files, printers, applications and Internet connections.",
    "Network ka major benefit hai ki multiple devices resources share kar sakte hain.",
    {
      exampleEn: "Employees in an office share one network printer.",
      exampleHi:
        "Office mein multiple employees ek hi printer ko network ke through use karte hain.",
      trick: "Network = Share",
    },
  ),
  q(
    102,
    "Which of the following is NOT normally a benefit of networking?",
    [
      { key: "A", text: "Resource sharing" },
      { key: "B", text: "Communication" },
      { key: "C", text: "Centralized access" },
      { key: "D", text: "Making every computer independent from all others" },
    ],
    "D",
    "Networking is specifically designed to enable communication and resource sharing between devices.",
    "Network ka purpose devices ko isolate karna nahi, balki unke beech communication aur sharing enable karna hai.",
    {
      exampleEn: "Connected office PCs can share files.",
      exampleHi: "Connected office PCs files share kar sakte hain.",
      trick: "Network = Connection, not Isolation",
    },
  ),
  q(
    103,
    "Which type of network is generally used for devices around a person?",
    [
      { key: "A", text: "WAN" },
      { key: "B", text: "PAN" },
      { key: "C", text: "MAN" },
      { key: "D", text: "Internet" },
    ],
    "B",
    "PAN stands for Personal Area Network and is designed for communication among nearby personal devices.",
    "PAN ek person ke around nearby devices ko connect karta hai.",
    {
      exampleEn: "A smartphone connected to a smartwatch using Bluetooth.",
      exampleHi:
        "Phone aur smartwatch Bluetooth se connected hain — PAN ka example.",
      trick: "P = Personal",
    },
  ),
  q(
    104,
    "PAN stands for:",
    [
      { key: "A", text: "Personal Area Network" },
      { key: "B", text: "Private Access Network" },
      { key: "C", text: "Public Area Network" },
      { key: "D", text: "Personal Access Node" },
    ],
    "A",
    "PAN stands for Personal Area Network.",
    "PAN ka full form Personal Area Network hai.",
    { trick: "PAN → Personal" },
  ),
  q(
    105,
    "Which network is designed to cover a city or metropolitan area?",
    [
      { key: "A", text: "PAN" },
      { key: "B", text: "LAN" },
      { key: "C", text: "MAN" },
      { key: "D", text: "WAN" },
    ],
    "C",
    "MAN stands for Metropolitan Area Network and generally covers a city or metropolitan region.",
    "MAN usually city-level area cover karta hai.",
    {
      exampleEn:
        "A network connecting multiple branches of an organization across one city.",
      exampleHi:
        "Ek organization ki city ke different areas mein branches hain aur unhe connect kiya gaya hai.",
      trick: "M = Metropolitan = City",
    },
  ),
];