import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions1: QuizQuestion[] = [
  q(
    51,
    "Which of the following is an example of resource sharing in a network?",
    [
      { key: "A", text: "Increasing CPU temperature" },
      { key: "B", text: "Sharing a printer among multiple computers" },
      { key: "C", text: "Changing screen brightness" },
      { key: "D", text: "Installing RAM" },
    ],
    "B",
    "Resource sharing means allowing multiple network users or devices to use a common resource.",
    "Resource sharing ka matlab hai ek common resource ko multiple computers/users ke saath share karna.",
    {
      exampleEn: "Five employees use one network printer.",
      exampleHi:
        "Office ke 5 employees ek hi network printer ko use karte hain.",
      trick: "Network = Share Resources",
    },
  ),
  q(
    52,
    "Which characteristic allows a network to continue operating even when one path fails?",
    [
      { key: "A", text: "Redundancy" },
      { key: "B", text: "Encryption" },
      { key: "C", text: "Compression" },
      { key: "D", text: "Formatting" },
    ],
    "A",
    "Redundancy means having additional paths or components so communication can continue if one fails.",
    "Redundancy ka matlab hai extra path/component available hona, taaki ek fail hone par network completely down na ho.",
    {
      exampleEn:
        "A company may have two network links between important offices.",
      exampleHi:
        "Company ke do offices ke beech 2 network links hain. Ek fail hua to doosra use ho sakta hai.",
      trick: "Redundancy = Backup Path",
    },
  ),
  q(
    53,
    "Which network characteristic refers to the ability to increase network size when required?",
    [
      { key: "A", text: "Scalability" },
      { key: "B", text: "Security" },
      { key: "C", text: "Encoding" },
      { key: "D", text: "Routing" },
    ],
    "A",
    "Scalability is the ability of a network to grow without requiring a complete redesign.",
    "Scalability ka matlab hai network ko future mein easily expand kar pana.",
    {
      exampleEn:
        "An office adds 50 new computers without replacing the entire network.",
      exampleHi:
        "Office mein 50 new PCs add ho gaye aur poora network dobara nahi banana pada.",
      trick: "Scale = Size increase",
    },
  ),
  q(
    54,
    "Which network characteristic is mainly concerned with protecting data from unauthorized access?",
    [
      { key: "A", text: "Scalability" },
      { key: "B", text: "Security" },
      { key: "C", text: "Topology" },
      { key: "D", text: "Bandwidth" },
    ],
    "B",
    "Network security protects systems and data from unauthorized access and attacks.",
    "Network security ka kaam data aur network ko unauthorized access aur attacks se protect karna hai.",
    {
      exampleEn:
        "A Wi-Fi password prevents unauthorized users from joining the network.",
      exampleHi:
        "Wi-Fi password unauthorized person ko network join karne se rokta hai.",
      trick: "Security = Protect",
    },
  ),
  q(
    55,
    "What does a network topology describe?",
    [
      { key: "A", text: "Type of operating system" },
      { key: "B", text: "Arrangement of devices and connections" },
      { key: "C", text: "Processor speed" },
      { key: "D", text: "File format" },
    ],
    "B",
    "Network topology describes how devices and communication links are arranged.",
    "Topology batati hai ki network mein devices aur connections kis arrangement mein connected hain.",
    {
      exampleEn:
        "A switch in the center with PCs around it represents a star arrangement.",
      exampleHi: "Center mein switch aur around mein PCs = star arrangement.",
      trick: "Topology = Network Shape",
    },
  ),
];