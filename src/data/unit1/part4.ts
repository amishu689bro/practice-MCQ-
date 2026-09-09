import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions4: QuizQuestion[] = [
  q(
    16,
    "Which device primarily works with MAC addresses in a LAN?",
    [
      { key: "A", text: "Switch" },
      { key: "B", text: "Router" },
      { key: "C", text: "Hub" },
      { key: "D", text: "Printer" },
    ],
    "A",
    "A switch uses MAC addresses for Layer 2 frame forwarding.",
    "Switch LAN ke andar frames ko forward karne ke liye MAC address use karta hai.",
    { trick: "Switch → MAC" },
  ),
  q(
    17,
    "Which device primarily forwards packets between networks?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Switch" },
      { key: "C", text: "Router" },
      { key: "D", text: "NIC" },
    ],
    "C",
    "Routers make forwarding decisions using network-layer addressing such as IP addresses.",
    "Router different networks ke beech packets forward karta hai aur IP-based routing information use karta hai.",
    { trick: "Router → IP → Network to Network" },
  ),
  q(
    18,
    "Which device is generally considered a Layer 1 device?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Router" },
      { key: "C", text: "Switch" },
      { key: "D", text: "DNS Server" },
    ],
    "A",
    "A traditional hub operates at the Physical Layer.",
    "Traditional hub Physical Layer (Layer 1) par operate karta hai.",
    {
      exampleEn:
        "A hub simply repeats electrical/bit signals without making intelligent forwarding decisions.",
      exampleHi:
        "Hub signal ko repeat karta hai; intelligent address-based forwarding nahi karta.",
      trick: "Hub → Layer 1",
    },
  ),
  q(
    19,
    "A switch is traditionally associated with which OSI layer?",
    [
      { key: "A", text: "Physical Layer" },
      { key: "B", text: "Data Link Layer" },
      { key: "C", text: "Network Layer" },
      { key: "D", text: "Transport Layer" },
    ],
    "B",
    "A traditional Ethernet switch operates primarily at the Data Link Layer.",
    "Traditional switch mainly Data Link Layer (Layer 2) par operate karta hai.",
    { trick: "Switch → Layer 2" },
  ),
  q(
    20,
    "A router is primarily associated with which OSI layer?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Network" },
      { key: "D", text: "Application" },
    ],
    "C",
    "A router operates primarily at the Network Layer and makes routing decisions.",
    "Router mainly Network Layer (Layer 3) par kaam karta hai.",
    { trick: "Router → Layer 3" },
  ),
];