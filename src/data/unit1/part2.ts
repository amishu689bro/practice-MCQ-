import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions2: QuizQuestion[] = [
  q(
    6,
    "Which network generally covers a very large geographical area?",
    [
      { key: "A", text: "LAN" },
      { key: "B", text: "PAN" },
      { key: "C", text: "WAN" },
      { key: "D", text: "CAN" },
    ],
    "C",
    "WAN stands for Wide Area Network and can cover cities, countries or even larger geographical areas.",
    "WAN bahut large geographical area cover karta hai — multiple cities ya countries tak.",
    {
      exampleEn: "The Internet is the most common example of a large WAN.",
      exampleHi:
        "Internet duniya ke different locations ko connect karta hai, isliye WAN concept ka large-scale example hai.",
      trick: "W = Wide = Very Large",
    },
  ),
  q(
    7,
    "WAN stands for:",
    [
      { key: "A", text: "Wide Area Network" },
      { key: "B", text: "Wireless Area Network" },
      { key: "C", text: "Web Area Network" },
      { key: "D", text: "World Access Network" },
    ],
    "A",
    "WAN connects networks across large geographical distances.",
    "WAN large distance par located networks ko connect karta hai.",
    {
      exampleEn:
        "A company connecting offices in Delhi, Mumbai and Bengaluru may use a WAN.",
      exampleHi:
        "Company ke Delhi, Mumbai aur Bengaluru offices ko connect karne ke liye WAN use ho sakta hai.",
      trick: "WAN → Wide Area Network",
    },
  ),
  q(
    8,
    "Which topology connects all devices to a central device?",
    [
      { key: "A", text: "Bus" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Star" },
      { key: "D", text: "Mesh" },
    ],
    "C",
    "In star topology, every device has a connection to a central device such as a switch.",
    "Star topology mein saare devices ek central device, usually switch, se connected hote hain.",
    {
      exampleEn:
        "College computers connected to one central switch form a star topology.",
      exampleHi:
        "College lab mein har computer ek central switch se connected ho — ye star topology hai.",
      trick: "Star = Center mein device",
    },
  ),
  q(
    9,
    "Which topology uses a single main communication cable?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Bus" },
      { key: "C", text: "Mesh" },
      { key: "D", text: "Ring" },
    ],
    "B",
    "Bus topology uses one main backbone cable to which devices are connected.",
    "Bus topology mein ek main backbone cable hoti hai aur devices us cable se connected hote hain.",
    {
      exampleEn: "Think of one main road with many houses connected along it.",
      exampleHi:
        "Ek main road hai aur uske side multiple houses connected hain — bus topology jaisa concept.",
      trick: "Bus = One Backbone",
    },
  ),
  q(
    10,
    "In which topology are devices connected in a circular manner?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Bus" },
      { key: "C", text: "Ring" },
      { key: "D", text: "Tree" },
    ],
    "C",
    "In ring topology, each device is connected in a circular arrangement.",
    "Ring topology mein devices ek circle/ring ki form mein connected hote hain.",
    {
      exampleEn:
        "Imagine people sitting in a circle and each person connected to the next.",
      exampleHi:
        "Log circle mein baithe hain aur har person next person se connected hai.",
      trick: "Ring = Circle",
    },
  ),
];