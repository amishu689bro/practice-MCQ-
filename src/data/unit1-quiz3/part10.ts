import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions10: QuizQuestion[] = [
  q(
    146,
    "Which of the following is a protocol suite rather than a single protocol?",
    [
      { key: "A", text: "TCP" },
      { key: "B", text: "IP" },
      { key: "C", text: "TCP/IP" },
      { key: "D", text: "Ethernet frame" },
    ],
    "C",
    "TCP/IP refers to a suite of networking protocols, not just one protocol.",
    "TCP/IP ek single protocol nahi, balki multiple protocols ka suite hai.",
    {
      exampleEn: "Internet communication uses multiple protocols working together.",
      exampleHi:
        "Internet par TCP, IP aur other protocols milkar communication provide karte hain.",
      trick: "TCP/IP = Team of Protocols",
    },
  ),
  q(
    147,
    "Which of the following belongs to the TCP/IP Internet protocol suite?",
    [
      { key: "A", text: "TCP" },
      { key: "B", text: "IP" },
      { key: "C", text: "Both A and B" },
      { key: "D", text: "Neither A nor B" },
    ],
    "C",
    "TCP and IP are major protocols within the Internet protocol suite.",
    "TCP aur IP dono TCP/IP suite ke important protocols hain.",
    { trick: "TCP + IP = Suite" },
  ),
  q(
    148,
    "Which statement about TCP/IP is correct?",
    [
      { key: "A", text: "It is only a physical topology" },
      { key: "B", text: "It supports communication across interconnected networks" },
      { key: "C", text: "It is a type of cable" },
      { key: "D", text: "It has no addressing mechanism" },
    ],
    "B",
    "TCP/IP provides protocols that enable communication across interconnected networks.",
    "TCP/IP protocols different interconnected networks ke across communication support karte hain.",
    { trick: "TCP/IP → Internet Communication" },
  ),
  q(
    149,
    "What is the key difference between a network model and a protocol?",
    [
      {
        key: "A",
        text: "Model organizes concepts/functions; protocol defines communication rules",
      },
      { key: "B", text: "Model is always hardware; protocol is always software" },
      { key: "C", text: "They are exactly the same" },
      { key: "D", text: "Protocol describes cable color" },
    ],
    "A",
    "A model such as OSI provides a conceptual framework for understanding networking. A protocol specifies rules used for actual communication.",
    "Model jaise OSI networking ko conceptually organize karta hai, jabki protocol actual communication ke rules define karta hai.",
    {
      exampleEn:
        "A building plan shows how different sections are organized; procedures specify how work is performed.",
      exampleHi:
        "Building ka plan batata hai different sections ka structure kya hai, aur procedures batate hain kaam kaise hoga.",
      trick: "Model = Structure | Protocol = Rules",
    },
  ),
  q(
    150,
    "A student says: \"Switch and router perform exactly the same function.\" What is the best response?",
    [
      { key: "A", text: "Correct, they are identical" },
      {
        key: "B",
        text: "Switch mainly connects/forwards within a LAN using MAC information, while router connects networks using Layer 3 information",
      },
      { key: "C", text: "Router only works with keyboards" },
      { key: "D", text: "Switch is an application protocol" },
    ],
    "B",
    "A switch primarily performs Layer 2 forwarding using MAC addresses, while a router primarily performs Layer 3 forwarding using IP/network information.",
    "Switch aur router same nahi hote: Switch → MAC → LAN; Router → IP → Different Networks.",
    {
      exampleEn:
        "A switch connects computers inside an office LAN. A router connects that LAN to another network such as the Internet.",
      exampleHi:
        "Office ke andar PCs ko switch connect karta hai, aur office LAN ko Internet/another network se router connect karta hai.",
      trick: "Switch = Same Network | Router = Different Networks",
    },
  ),
];