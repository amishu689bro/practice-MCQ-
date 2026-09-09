import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions8: QuizQuestion[] = [
  q(
    86,
    "Which of the following is NOT a topology?",
    [
      { key: "A", text: "Mesh" },
      { key: "B", text: "Ring" },
      { key: "C", text: "TCP/IP" },
      { key: "D", text: "Star" },
    ],
    "C",
    "TCP/IP is a protocol suite, not a physical/logical topology.",
    "TCP/IP network ki shape nahi batata; ye protocols ka suite hai.",
    { trick: "Topology = Shape, TCP/IP = Protocols" },
  ),
  q(
    87,
    "What does a protocol define?",
    [
      { key: "A", text: "Communication rules" },
      { key: "B", text: "Computer color" },
      { key: "C", text: "Monitor resolution" },
      { key: "D", text: "Keyboard layout" },
    ],
    "A",
    "Protocols specify how devices communicate and interpret exchanged information.",
    "Protocol devices ke beech communication ke rules define karta hai.",
    { trick: "Protocol = Rules" },
  ),
  q(
    88,
    "Which of the following is an example of a protocol?",
    [
      { key: "A", text: "Ethernet" },
      { key: "B", text: "Star" },
      { key: "C", text: "Mesh" },
      { key: "D", text: "Bus" },
    ],
    "A",
    "Ethernet is a family of networking technologies/protocols used for wired LAN communication.",
    "Ethernet wired LAN communication ke liye networking technology/protocol family hai.",
    { trick: "Ethernet → Network Communication" },
  ),
  q(
    89,
    "Which statement about OSI is correct?",
    [
      { key: "A", text: "It has 3 layers" },
      { key: "B", text: "It has 5 layers" },
      { key: "C", text: "It has 7 layers" },
      { key: "D", text: "It has 10 layers" },
    ],
    "C",
    "The OSI model contains seven layers.",
    "OSI model mein 7 layers hoti hain.",
    { trick: "OSI = 7" },
  ),
  q(
    90,
    "Which statement about TCP/IP is correct?",
    [
      { key: "A", text: "It is only a cable standard" },
      { key: "B", text: "It is a protocol suite used for Internet networking" },
      { key: "C", text: "It is a topology" },
      { key: "D", text: "It is a computer brand" },
    ],
    "B",
    "TCP/IP contains multiple protocols used to support Internet communication.",
    "TCP/IP ek protocol suite hai jo Internet communication ka foundation hai.",
    { trick: "Internet → TCP/IP" },
  ),
];