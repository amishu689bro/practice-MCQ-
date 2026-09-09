import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions10: QuizQuestion[] = [
  q(
    46,
    "Which topology is commonly associated with modern Ethernet LANs?",
    [
      { key: "A", text: "Star" },
      { key: "B", text: "Ring" },
      { key: "C", text: "Bus only" },
      { key: "D", text: "Point-to-point only" },
    ],
    "A",
    "Modern Ethernet LANs commonly use a star physical topology centered around switches.",
    "Modern Ethernet LANs mein usually computers ek central switch ke around connected hote hain — star topology.",
    { trick: "Modern LAN → Star + Switch" },
  ),
  q(
    47,
    "Which of the following is NOT an OSI layer?",
    [
      { key: "A", text: "Network" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Application" },
      { key: "D", text: "Internet" },
    ],
    "D",
    "Internet is not one of the seven OSI layer names (Application, Presentation, Session, Transport, Network, Data Link, Physical).",
    "OSI ki 7 layers hain: Application, Presentation, Session, Transport, Network, Data Link, Physical. Internet OSI layer nahi hai.",
    { trick: "Internet ≠ OSI Layer" },
  ),
  q(
    48,
    "Which layer comes immediately below the Transport Layer in OSI?",
    [
      { key: "A", text: "Session" },
      { key: "B", text: "Network" },
      { key: "C", text: "Data Link" },
      { key: "D", text: "Physical" },
    ],
    "B",
    "OSI order from top: Application, Presentation, Session, Transport, Network, Data Link, Physical. Network is immediately below Transport.",
    "Transport Layer ke just neeche Network Layer hoti hai.",
    { trick: "T → N" },
  ),
  q(
    49,
    "Which layer comes immediately above the Network Layer?",
    [
      { key: "A", text: "Data Link" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Physical" },
      { key: "D", text: "Application" },
    ],
    "B",
    "In the OSI order, Transport is directly above Network.",
    "Network ke just upar Transport Layer hoti hai.",
    {
      trick:
        "T-N-D-P yaad rakho: Transport → Network → Data Link → Physical (neeche se)",
    },
  ),
  q(
    50,
    "Which statement correctly compares OSI and TCP/IP?",
    [
      { key: "A", text: "Both always have exactly the same number of layers" },
      {
        key: "B",
        text: "OSI is a 7-layer reference model, while TCP/IP is a practical protocol suite/model used for Internet networking",
      },
      { key: "C", text: "TCP/IP has no protocols" },
      { key: "D", text: "OSI is only a physical cable standard" },
    ],
    "B",
    "The OSI model is a seven-layer reference framework. TCP/IP is a protocol suite that forms the basis of Internet communication and is commonly represented using a smaller set of layers.",
    "OSI ek 7-layer reference model hai, jabki TCP/IP ek actual protocol suite hai jo Internet communication mein widely used hai.",
    {
      exampleEn:
        "OSI helps students and engineers understand networking functions layer by layer, while TCP/IP protocols such as IP and TCP are actually used in Internet communication.",
      exampleHi:
        "OSI se hum networking ko layer-by-layer samajhte hain, jabki TCP/IP ke protocols jaise IP aur TCP actual Internet communication mein use hote hain.",
      trick: "OSI = Understand | TCP/IP = Implement/Communicate",
    },
  ),
];