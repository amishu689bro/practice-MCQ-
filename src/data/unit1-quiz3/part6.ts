import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions6: QuizQuestion[] = [
  q(
    126,
    "Which device generally separates broadcast domains?",
    [
      { key: "A", text: "Router" },
      { key: "B", text: "Hub" },
      { key: "C", text: "Repeater" },
      { key: "D", text: "Keyboard" },
    ],
    "A",
    "Routers separate IP networks and do not normally forward Layer 2 broadcasts between interfaces by default.",
    "Router different network segments ko separate karta hai aur normal Layer 2 broadcast ko interfaces ke across forward nahi karta.",
    { trick: "Router = Network Boundary" },
  ),
  q(
    127,
    "Which device traditionally does NOT make forwarding decisions based on MAC addresses?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Switch" },
      { key: "C", text: "Bridge" },
      { key: "D", text: "Layer-2 switch" },
    ],
    "A",
    "A traditional hub does not inspect destination MAC addresses to selectively forward traffic.",
    "Hub MAC address ko use karke specific port choose nahi karta.",
    { trick: "Hub = No MAC Intelligence" },
  ),
  q(
    128,
    "Which device can reduce unnecessary traffic compared with a hub by selectively forwarding frames?",
    [
      { key: "A", text: "Switch" },
      { key: "B", text: "Hub" },
      { key: "C", text: "Cable" },
      { key: "D", text: "Repeater" },
    ],
    "A",
    "A switch can selectively forward frames based on its MAC address table.",
    "Switch destination MAC ke according frame ko appropriate port par bhej sakta hai.",
    { trick: "Switch = Select" },
  ),
  q(
    129,
    "Which layer is responsible for logical addressing in the OSI model?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Network" },
      { key: "D", text: "Session" },
    ],
    "C",
    "Logical addressing (such as IP) is a Network Layer responsibility.",
    "Logical addressing Network Layer ki responsibility hai.",
    { trick: "Network → IP" },
  ),
  q(
    130,
    "Which layer is responsible for physical transmission of bits?",
    [
      { key: "A", text: "Application" },
      { key: "B", text: "Physical" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Session" },
    ],
    "B",
    "The Physical Layer transmits raw bits over the physical medium.",
    "Physical Layer physical medium par raw bits transmit karti hai.",
    { trick: "Physical → Bits" },
  ),
];