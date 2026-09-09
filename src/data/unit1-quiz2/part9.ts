import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions9: QuizQuestion[] = [
  q(
    91,
    "Which protocol is responsible for reliable transport in the TCP/IP suite?",
    [
      { key: "A", text: "TCP" },
      { key: "B", text: "IP" },
      { key: "C", text: "Ethernet" },
      { key: "D", text: "ARP" },
    ],
    "A",
    "TCP provides connection-oriented, reliable transport services.",
    "TCP reliable transport provide karta hai aur data delivery ko manage karta hai.",
    {
      exampleEn:
        "Downloading a file where reliable delivery matters can use TCP.",
      exampleHi:
        "File download karte waqt data correctly receive hona important hai, isliye TCP useful hota hai.",
      trick: "TCP = Trustworthy/Controlled Transport",
    },
  ),
  q(
    92,
    "Which protocol is responsible for logical addressing and packet forwarding across networks?",
    [
      { key: "A", text: "IP" },
      { key: "B", text: "TCP" },
      { key: "C", text: "Ethernet" },
      { key: "D", text: "HTTP" },
    ],
    "A",
    "IP provides logical addressing and supports packet delivery across interconnected networks.",
    "IP logical address provide karta hai aur packets ko interconnected networks ke across deliver karne mein help karta hai.",
    { trick: "IP = Address + Delivery" },
  ),
  q(
    93,
    "Which of the following is a major difference between TCP and IP?",
    [
      {
        key: "A",
        text: "TCP handles transport services; IP handles network addressing/delivery",
      },
      { key: "B", text: "Both are topologies" },
      { key: "C", text: "Both are hardware devices" },
      { key: "D", text: "IP is a physical cable" },
    ],
    "A",
    "TCP and IP perform different functions within the Internet protocol suite.",
    "TCP ka focus transport/reliable delivery par hai, jabki IP ka focus addressing aur packet delivery between networks par hai.",
    { trick: "TCP = Transport, IP = Address" },
  ),
  q(
    94,
    "Which model is mainly used as a conceptual reference for understanding networking functions?",
    [
      { key: "A", text: "OSI" },
      { key: "B", text: "HTML" },
      { key: "C", text: "JPEG" },
      { key: "D", text: "USB" },
    ],
    "A",
    "OSI provides a layered reference framework for understanding network communication.",
    "OSI networking ko samajhne ke liye ek reference model provide karta hai.",
    { trick: "OSI = Reference" },
  ),
  q(
    95,
    "Which of the following is closest to the physical connection between network devices?",
    [
      { key: "A", text: "Physical Layer" },
      { key: "B", text: "Application Layer" },
      { key: "C", text: "Session Layer" },
      { key: "D", text: "Presentation Layer" },
    ],
    "A",
    "The Physical Layer deals with the physical medium, signals and transmission of bits.",
    "Physical Layer cables, signals aur raw bits transmission se related hoti hai.",
    { trick: "Physical = Actual Medium" },
  ),
];