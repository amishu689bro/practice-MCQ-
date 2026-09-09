import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions8: QuizQuestion[] = [
  q(
    136,
    "Which layer is directly below the Presentation Layer?",
    [
      { key: "A", text: "Application" },
      { key: "B", text: "Session" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Network" },
    ],
    "B",
    "OSI top-down order is Application, Presentation, Session — so Session is directly below Presentation.",
    "Presentation ke just neeche Session Layer hoti hai.",
    { trick: "A-P-S" },
  ),
  q(
    137,
    "Which layer is directly above the Data Link Layer?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Network" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Session" },
    ],
    "B",
    "OSI bottom-up order is Physical, Data Link, Network — so Network is directly above Data Link.",
    "Data Link ke just upar Network Layer hoti hai.",
    { trick: "N → D → P" },
  ),
  q(
    138,
    "Which layer is directly below the Network Layer?",
    [
      { key: "A", text: "Transport" },
      { key: "B", text: "Session" },
      { key: "C", text: "Data Link" },
      { key: "D", text: "Application" },
    ],
    "C",
    "In the OSI order, Data Link comes directly below the Network Layer.",
    "Network ke just neeche Data Link Layer hoti hai.",
    { trick: "Network → Data Link" },
  ),
  q(
    139,
    "Which layer lies between Session and Network?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Transport" },
      { key: "C", text: "Data Link" },
      { key: "D", text: "Presentation" },
    ],
    "B",
    "OSI order: Session, Transport, Network — Transport lies between Session and Network.",
    "Session aur Network ke beech Transport Layer hoti hai.",
    { trick: "S → T → N" },
  ),
  q(
    140,
    "Which is the correct bottom-to-top OSI sequence?",
    [
      {
        key: "A",
        text: "Physical → Data Link → Network → Transport → Session → Presentation → Application",
      },
      {
        key: "B",
        text: "Application → Presentation → Session → Transport → Network → Data Link → Physical",
      },
      {
        key: "C",
        text: "Physical → Network → Data Link → Transport → Session → Application → Presentation",
      },
      {
        key: "D",
        text: "Data Link → Physical → Network → Transport → Presentation → Session → Application",
      },
    ],
    "A",
    "Bottom to top: Physical → Data Link → Network → Transport → Session → Presentation → Application.",
    "Neeche se upar: P D N T S P A.",
    { trick: "PDNTSPA" },
  ),
];