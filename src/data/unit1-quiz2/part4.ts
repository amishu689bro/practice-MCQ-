import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions4: QuizQuestion[] = [
  q(
    66,
    "If a switch receives an Ethernet frame with a known destination MAC address, what can it do?",
    [
      { key: "A", text: "Forward it through the corresponding port" },
      { key: "B", text: "Always send it to the Internet" },
      { key: "C", text: "Delete it" },
      { key: "D", text: "Convert it into an email" },
    ],
    "A",
    "A switch uses its MAC address table to forward a frame toward the port associated with the destination MAC.",
    "Agar destination MAC switch ko pata hai, to switch frame ko corresponding port ki taraf forward kar sakta hai.",
    { trick: "Known MAC → Known Port" },
  ),
  q(
    67,
    "Which device generally operates at Layer 3 and makes routing decisions?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Router" },
      { key: "C", text: "Switch" },
      { key: "D", text: "Repeater" },
    ],
    "B",
    "A router operates at the Network Layer (Layer 3) and makes routing decisions.",
    "Router Layer 3 par operate karta hai aur routing decisions leta hai.",
    { trick: "Router → Layer 3" },
  ),
  q(
    68,
    "Which device generally operates at Layer 2?",
    [
      { key: "A", text: "Router" },
      { key: "B", text: "Switch" },
      { key: "C", text: "Hub" },
      { key: "D", text: "Modem" },
    ],
    "B",
    "A traditional switch operates primarily at the Data Link Layer (Layer 2).",
    "Traditional switch Layer 2 par operate karta hai.",
    { trick: "Switch → Layer 2" },
  ),
  q(
    69,
    "Which device is associated with the Physical Layer in the traditional OSI model?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Router" },
      { key: "C", text: "Application server" },
      { key: "D", text: "DNS" },
    ],
    "A",
    "A traditional hub operates at the Physical Layer (Layer 1).",
    "Traditional hub Layer 1 par operate karta hai.",
    { trick: "Hub → Layer 1" },
  ),
  q(
    70,
    "Which device is more suitable for connecting multiple devices within a LAN?",
    [
      { key: "A", text: "Switch" },
      { key: "B", text: "Keyboard" },
      { key: "C", text: "Monitor" },
      { key: "D", text: "CPU" },
    ],
    "A",
    "Switches are designed to connect devices within a local Ethernet network.",
    "LAN ke multiple devices ko connect karne ke liye switch commonly use hota hai.",
    {
      exampleEn: "A school lab can connect 30 PCs using switches.",
      exampleHi:
        "School lab ke 30 PCs ko switch ke through connect kiya ja sakta hai.",
      trick: "LAN → Switch",
    },
  ),
];