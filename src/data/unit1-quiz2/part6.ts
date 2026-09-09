import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions6: QuizQuestion[] = [
  q(
    76,
    "Which OSI layer can perform data encryption and compression functions?",
    [
      { key: "A", text: "Presentation" },
      { key: "B", text: "Physical" },
      { key: "C", text: "Network" },
      { key: "D", text: "Data Link" },
    ],
    "A",
    "The Presentation Layer is associated with data translation, encryption and compression.",
    "Presentation Layer data ke format/representation ke saath encryption aur compression se bhi associated hai.",
    { trick: "Presentation → Data Presentation" },
  ),
  q(
    77,
    "Which OSI layer provides services closest to network applications?",
    [
      { key: "A", text: "Application" },
      { key: "B", text: "Physical" },
      { key: "C", text: "Data Link" },
      { key: "D", text: "Network" },
    ],
    "A",
    "The Application Layer provides network services used by applications.",
    "Application Layer network applications ke closest hoti hai.",
    { trick: "User → Application" },
  ),
  q(
    78,
    "Which OSI layer transmits bits through the physical medium?",
    [
      { key: "A", text: "Network" },
      { key: "B", text: "Physical" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Session" },
    ],
    "B",
    "Physical Layer handles transmission of raw bits over the medium.",
    "Physical Layer actual communication medium par raw bits transmit karti hai.",
    { trick: "Physical → Bits" },
  ),
  q(
    79,
    "Which sequence correctly shows the OSI layers from top to bottom?",
    [
      {
        key: "A",
        text: "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      },
      {
        key: "B",
        text: "Application, Presentation, Session, Transport, Network, Data Link, Physical",
      },
      {
        key: "C",
        text: "Application, Network, Transport, Session, Data Link, Physical, Presentation",
      },
      {
        key: "D",
        text: "Transport, Application, Session, Network, Physical, Data Link, Presentation",
      },
    ],
    "B",
    "Correct sequence: Application → Presentation → Session → Transport → Network → Data Link → Physical.",
    "OSI ko top se bottom: A P S T N D P.",
    { trick: "All People Seem To Need Data Processing" },
  ),
  q(
    80,
    "Which OSI layer number is assigned to the Transport Layer?",
    [
      { key: "A", text: "Layer 2" },
      { key: "B", text: "Layer 3" },
      { key: "C", text: "Layer 4" },
      { key: "D", text: "Layer 5" },
    ],
    "C",
    "Transport Layer is Layer 4.",
    "Transport = Layer 4.",
    { trick: "T = 4" },
  ),
];