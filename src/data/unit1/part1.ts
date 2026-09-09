import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions1: QuizQuestion[] = [
  q(
    1,
    "What is a computer network?",
    [
      { key: "A", text: "A single computer" },
      { key: "B", text: "A collection of interconnected computers/devices" },
      { key: "C", text: "A type of software" },
      { key: "D", text: "A programming language" },
    ],
    "B",
    "A computer network is a group of computers and other devices connected together so they can communicate and share resources.",
    "Computer network mein multiple computers/devices ek dusre se connected hote hain taaki wo data aur resources share kar saken.",
    {
      exampleEn:
        "Computers connected in a college laboratory form a computer network.",
      exampleHi:
        "College computer lab mein saare PCs connected hain aur files/printer share karte hain — ye computer network hai.",
      trick: "Network = Devices + Connection + Communication",
    },
  ),
  q(
    2,
    "What is the main purpose of a computer network?",
    [
      { key: "A", text: "To increase monitor size" },
      { key: "B", text: "To share data and resources" },
      { key: "C", text: "To reduce keyboard size" },
      { key: "D", text: "To install games" },
    ],
    "B",
    "Networks allow users to share files, printers, applications, internet connections and other resources.",
    "Network ka main kaam data aur resources share karna hai, jaise files, printer aur internet.",
    {
      exampleEn: "Many office computers use one common network printer.",
      exampleHi:
        "Office ke 10 computers ek hi printer ko network ke through use karte hain.",
      trick: "Network = Share",
    },
  ),
  q(
    3,
    "Which of the following is a network device?",
    [
      { key: "A", text: "Router" },
      { key: "B", text: "Keyboard" },
      { key: "C", text: "Monitor" },
      { key: "D", text: "Mouse" },
    ],
    "A",
    "A router is a networking device that connects different networks and forwards packets.",
    "Router ek networking device hai jo different networks ko connect karta hai aur data packets ko forward karta hai.",
    {
      exampleEn:
        "Your home Wi-Fi router connects your home network to the Internet.",
      exampleHi:
        "Ghar ka Wi-Fi router tumhare home network ko Internet se connect karta hai.",
      trick: "Router = Network connect + Route data",
    },
  ),
  q(
    4,
    "Which network covers a small geographical area such as a room, building or campus?",
    [
      { key: "A", text: "WAN" },
      { key: "B", text: "LAN" },
      { key: "C", text: "MAN" },
      { key: "D", text: "PAN" },
    ],
    "B",
    "LAN stands for Local Area Network. It covers a relatively small geographical area.",
    "LAN ek chhote area ka network hota hai, jaise room, office, school ya college building.",
    {
      exampleEn: "A college computer lab is an example of LAN.",
      exampleHi:
        "College ki computer lab ke connected computers ek LAN bana sakte hain.",
      trick: "L = Local = Small Area",
    },
  ),
  q(
    5,
    "LAN stands for:",
    [
      { key: "A", text: "Large Area Network" },
      { key: "B", text: "Local Area Network" },
      { key: "C", text: "Long Area Network" },
      { key: "D", text: "Logical Area Network" },
    ],
    "B",
    "LAN means Local Area Network.",
    "LAN ka full form Local Area Network hai.",
    {
      exampleEn: "A home network is generally a LAN.",
      exampleHi:
        "Ghar mein mobile, laptop aur smart TV ka local network LAN ho sakta hai.",
      trick: "LAN → Local Area Network",
    },
  ),
];