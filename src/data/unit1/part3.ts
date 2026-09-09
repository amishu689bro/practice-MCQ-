import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions3: QuizQuestion[] = [
  q(
    11,
    "Which topology provides a direct connection between many pairs of devices?",
    [
      { key: "A", text: "Bus" },
      { key: "B", text: "Mesh" },
      { key: "C", text: "Star" },
      { key: "D", text: "Ring" },
    ],
    "B",
    "In mesh topology, devices have multiple interconnections, providing multiple possible paths.",
    "Mesh topology mein devices ke beech multiple connections hote hain, isliye multiple paths available hote hain.",
    {
      exampleEn:
        "A network where important locations have several independent communication links.",
      exampleHi:
        "Agar important locations ke beech multiple direct links hain, to mesh concept use ho sakta hai.",
      trick: "Mesh = Many Connections",
    },
  ),
  q(
    12,
    "Which topology has a central device?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Bus" },
      { key: "C", text: "Ring" },
      { key: "D", text: "Mesh" },
    ],
    "A",
    "Star topology has a central switch/hub around which devices are connected.",
    "Star topology mein central switch/hub ke around devices connected hote hain.",
    {
      exampleEn: "Office PCs connected to one central switch.",
      exampleHi: "Office ke saare PCs ek central switch se connected.",
      trick: "Star ka center hota hai.",
    },
  ),
  q(
    13,
    "Which device broadcasts incoming data to all connected ports?",
    [
      { key: "A", text: "Switch" },
      { key: "B", text: "Router" },
      { key: "C", text: "Hub" },
      { key: "D", text: "Gateway" },
    ],
    "C",
    "A traditional hub sends incoming data to all its ports.",
    "Hub ko data mila to wo generally data ko sabhi connected ports par forward karta hai.",
    {
      exampleEn:
        "If one computer sends data to a hub, the hub repeats it to the connected devices.",
      exampleHi:
        "Ek PC hub ko data bhejta hai to hub us data ko connected ports par bhej deta hai.",
      trick: "Hub = Everyone gets the signal",
    },
  ),
  q(
    14,
    "Which device forwards frames based on MAC addresses?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Switch" },
      { key: "C", text: "Router" },
      { key: "D", text: "Modem" },
    ],
    "B",
    "A switch uses MAC addresses to make forwarding decisions within a LAN.",
    "Switch MAC address ka use karke decide karta hai ki frame ko kis port par forward karna hai.",
    {
      exampleEn:
        "A switch sends a frame only toward the appropriate connected device/port when it knows the destination MAC.",
      exampleHi:
        "Switch destination MAC dekhkar appropriate port ki taraf frame bhejta hai.",
      trick: "Switch → MAC",
    },
  ),
  q(
    15,
    "Which device connects different networks?",
    [
      { key: "A", text: "Hub" },
      { key: "B", text: "Switch" },
      { key: "C", text: "Router" },
      { key: "D", text: "Repeater" },
    ],
    "C",
    "A router connects different networks and forwards packets between them.",
    "Router different networks ko connect karta hai aur packets ko ek network se doosre network tak route karta hai.",
    {
      exampleEn: "A home router connects the home LAN to the Internet.",
      exampleHi:
        "Home router tumhare local network ko Internet se connect karta hai.",
      trick: "Router = Route between networks",
    },
  ),
];