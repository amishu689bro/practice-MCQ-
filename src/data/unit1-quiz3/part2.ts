import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions2: QuizQuestion[] = [
  q(
    106,
    "MAN stands for:",
    [
      { key: "A", text: "Main Area Network" },
      { key: "B", text: "Metropolitan Area Network" },
      { key: "C", text: "Medium Access Network" },
      { key: "D", text: "Multiple Area Network" },
    ],
    "B",
    "MAN stands for Metropolitan Area Network.",
    "MAN ka full form Metropolitan Area Network hai.",
    { trick: "MAN → Metropolitan" },
  ),
  q(
    107,
    "Which sequence represents increasing geographical coverage?",
    [
      { key: "A", text: "WAN → LAN → PAN" },
      { key: "B", text: "PAN → LAN → MAN → WAN" },
      { key: "C", text: "LAN → PAN → WAN → MAN" },
      { key: "D", text: "MAN → PAN → LAN → WAN" },
    ],
    "B",
    "A typical progression is PAN → LAN → MAN → WAN, from smaller personal areas toward very large geographical areas.",
    "Area ke hisaab se generally: PAN < LAN < MAN < WAN.",
    { trick: "P-L-M-W = Small → Large" },
  ),
  q(
    108,
    "Which topology is most directly represented by a central switch with separate links to each computer?",
    [
      { key: "A", text: "Ring" },
      { key: "B", text: "Star" },
      { key: "C", text: "Bus" },
      { key: "D", text: "Mesh" },
    ],
    "B",
    "A central switch with separate links to each computer is the classic star topology arrangement.",
    "Central switch aur har computer ka alag link — ye star topology hai.",
    { trick: "Center = Star" },
  ),
  q(
    109,
    "In a star topology, what is the role of the central device?",
    [
      { key: "A", text: "It provides a central connection point" },
      { key: "B", text: "It acts as every computer" },
      { key: "C", text: "It removes all cables" },
      { key: "D", text: "It stores all files automatically" },
    ],
    "A",
    "The central device provides the point through which connected devices communicate.",
    "Central switch/hub connected devices ke liye central connection point provide karta hai.",
    {
      exampleEn: "PCs in a lab connect to one central switch.",
      exampleHi: "Lab ke PCs ek central switch se connected hain.",
      trick: "Star → Central Point",
    },
  ),
  q(
    110,
    "Which topology is easiest to visualize as a straight backbone?",
    [
      { key: "A", text: "Bus" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Star" },
      { key: "D", text: "Mesh" },
    ],
    "A",
    "Bus topology uses a single straight backbone cable to which devices connect.",
    "Bus topology ek seedhi backbone cable hoti hai jis par devices connected hote hain.",
    { trick: "Bus = Straight Backbone" },
  ),
];