import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions5: QuizQuestion[] = [
  q(
    121,
    "Which device uses a MAC address table?",
    [
      { key: "A", text: "Switch" },
      { key: "B", text: "Hub" },
      { key: "C", text: "Cable" },
      { key: "D", text: "Router only" },
    ],
    "A",
    "Ethernet switches maintain MAC address information to make forwarding decisions.",
    "Switch MAC addresses ko ports ke saath map karne ke liye MAC address table use karta hai.",
    { trick: "Switch → MAC Table" },
  ),
  q(
    122,
    "What does a switch normally forward?",
    [
      { key: "A", text: "Frames" },
      { key: "B", text: "Only electrical power" },
      { key: "C", text: "Documents" },
      { key: "D", text: "Keyboard signals only" },
    ],
    "A",
    "At the Data Link Layer, Ethernet data is handled as frames.",
    "Switch primarily Ethernet frames ko forward karta hai.",
    { trick: "Switch → Frame" },
  ),
  q(
    123,
    "What does a router normally forward?",
    [
      { key: "A", text: "Packets" },
      { key: "B", text: "Frames only" },
      { key: "C", text: "Keyboard commands" },
      { key: "D", text: "Files directly" },
    ],
    "A",
    "Routers operate primarily at the Network Layer and forward packets.",
    "Router Network Layer par packets ko different networks ke beech forward karta hai.",
    { trick: "Router → Packet" },
  ),
  q(
    124,
    "Which device is more appropriate for communication between different IP networks?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Switch" },
      { key: "C", text: "Router" },
      { key: "D", text: "Repeater" },
    ],
    "C",
    "Routers connect separate IP networks and forward traffic between them.",
    "Different IP networks ke beech communication ke liye router use hota hai.",
    { trick: "Different Networks → Router" },
  ),
  q(
    125,
    "What information does a router primarily use to make a Layer 3 forwarding decision?",
    [
      { key: "A", text: "Destination IP address" },
      { key: "B", text: "Keyboard layout" },
      { key: "C", text: "File extension" },
      { key: "D", text: "Monitor size" },
    ],
    "A",
    "Routers use destination IP information and routing tables to decide where packets should go.",
    "Router destination IP aur routing information dekhkar packet ko next direction mein forward karta hai.",
    { trick: "Router → Destination IP" },
  ),
];