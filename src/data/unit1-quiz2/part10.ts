import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions10: QuizQuestion[] = [
  q(
    96,
    "Which layer handles frames?",
    [
      { key: "A", text: "Transport" },
      { key: "B", text: "Network" },
      { key: "C", text: "Data Link" },
      { key: "D", text: "Application" },
    ],
    "C",
    "Data Link Layer organizes data into frames for local link transmission.",
    "Data Link Layer data ko frames mein handle karti hai.",
    { trick: "Frame → Data Link" },
  ),
  q(
    97,
    "Which layer handles packets?",
    [
      { key: "A", text: "Network" },
      { key: "B", text: "Presentation" },
      { key: "C", text: "Session" },
      { key: "D", text: "Physical" },
    ],
    "A",
    "The Network Layer handles packets and logical addressing/routing.",
    "Network Layer packets aur IP-based logical addressing/routing se related hai.",
    { trick: "Packet → Network" },
  ),
  q(
    98,
    "Which layer handles segments in the common OSI data-unit terminology?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Data Link" },
      { key: "C", text: "Transport" },
      { key: "D", text: "Network" },
    ],
    "C",
    "At the Transport Layer, data is commonly referred to as segments for TCP.",
    "Transport Layer par TCP data ko commonly segments ke form mein handle karta hai.",
    { trick: "Segment → Transport" },
  ),
  q(
    99,
    "Which sequence correctly matches the device with its commonly associated OSI layer?",
    [
      { key: "A", text: "Hub–1, Switch–2, Router–3" },
      { key: "B", text: "Hub–3, Switch–1, Router–7" },
      { key: "C", text: "Hub–7, Switch–4, Router–2" },
      { key: "D", text: "Hub–2, Switch–3, Router–1" },
    ],
    "A",
    "Traditional associations: Hub → Layer 1, Switch → Layer 2, Router → Layer 3.",
    "Ye sequence bahut important hai: Hub → 1, Switch → 2, Router → 3.",
    { trick: "H-S-R = 1-2-3" },
  ),
  q(
    100,
    "Which statement best describes the relationship between layers and protocols?",
    [
      { key: "A", text: "Layers and protocols are exactly the same thing" },
      {
        key: "B",
        text: "Layers organize functions, while protocols define communication rules used by those functions",
      },
      { key: "C", text: "Protocols are physical cables" },
      { key: "D", text: "Layers are only hardware devices" },
    ],
    "B",
    "A layered architecture divides networking responsibilities into layers. Protocols define the rules that systems follow to communicate within or across those functions.",
    "Layer batati hai ki networking ka kaunsa function kis level par handle hoga. Protocol batata hai ki communication ke rules kya honge.",
    {
      exampleEn:
        "Think of a restaurant: different departments have different responsibilities, and rules define how orders move between them.",
      exampleHi:
        "Restaurant mein kitchen ka alag kaam, billing ka alag kaam, serving ka alag kaam. Aur sabke beech rules hote hain ki order kaise process hoga.",
      trick: "Layer = WHAT Function | Protocol = HOW TO Communicate",
    },
  ),
];