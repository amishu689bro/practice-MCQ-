import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions3: QuizQuestion[] = [
  q(
    61,
    "Which device regenerates or repeats signals but does not make intelligent forwarding decisions like a switch?",
    [
      { key: "A", text: "Router" },
      { key: "B", text: "Hub" },
      { key: "C", text: "DNS server" },
      { key: "D", text: "Firewall" },
    ],
    "B",
    "A traditional hub repeats incoming signals to its ports.",
    "Traditional hub signal ko repeat karta hai aur intelligent MAC-based forwarding nahi karta.",
    {
      exampleEn: "A hub receives a signal and repeats it toward its ports.",
      exampleHi:
        "Hub ko signal mila aur wo connected ports ki taraf signal repeat kar deta hai.",
      trick: "Hub = Repeat",
    },
  ),
  q(
    62,
    "What does a switch learn to improve frame forwarding?",
    [
      { key: "A", text: "User passwords" },
      { key: "B", text: "MAC addresses" },
      { key: "C", text: "File names" },
      { key: "D", text: "CPU instructions" },
    ],
    "B",
    "An Ethernet switch can learn source MAC addresses and associate them with ports.",
    "Switch source MAC address ko learn karke usse corresponding port ke saath associate karta hai.",
    { trick: "Switch Learns MAC" },
  ),
  q(
    63,
    "Which address is mainly associated with Layer 2 switching?",
    [
      { key: "A", text: "IP address" },
      { key: "B", text: "MAC address" },
      { key: "C", text: "URL" },
      { key: "D", text: "Port number" },
    ],
    "B",
    "MAC addresses are Data Link Layer addresses used for local frame delivery.",
    "MAC address Data Link Layer par local network communication ke liye use hota hai.",
    { trick: "Layer 2 → MAC" },
  ),
  q(
    64,
    "Which address is mainly associated with Network Layer routing?",
    [
      { key: "A", text: "MAC address" },
      { key: "B", text: "IP address" },
      { key: "C", text: "Email address" },
      { key: "D", text: "File address" },
    ],
    "B",
    "IP addresses provide logical addressing used by routers to forward packets between networks.",
    "IP address logical addressing provide karta hai aur router packets ko networks ke beech forward karne mein use karta hai.",
    { trick: "Layer 3 → IP" },
  ),
  q(
    65,
    "What is the main job of a router?",
    [
      { key: "A", text: "Print documents" },
      { key: "B", text: "Connect networks and forward packets" },
      { key: "C", text: "Display webpages" },
      { key: "D", text: "Store keyboard input" },
    ],
    "B",
    "A router connects different networks and determines where packets should be forwarded.",
    "Router different networks ko connect karta hai aur packets ke liye forwarding path decide karta hai.",
    {
      exampleEn: "A home router connects the local home network to an ISP network.",
      exampleHi:
        "Home router ghar ke LAN ko ISP/Internet side ke network se connect karta hai.",
      trick: "Router = Routes Packets",
    },
  ),
];