import type { QuizQuestion } from "../types";
import { q } from "../helpers";

export const questions9: QuizQuestion[] = [
  q(
    41,
    "What does IP stand for?",
    [
      { key: "A", text: "Internet Protocol" },
      { key: "B", text: "Internal Process" },
      { key: "C", text: "Internet Process" },
      { key: "D", text: "Interface Protocol" },
    ],
    "A",
    "IP stands for Internet Protocol.",
    "IP ka full form Internet Protocol hai.",
    { trick: "IP → Internet Protocol" },
  ),
  q(
    42,
    "Which protocol suite includes TCP and IP?",
    [
      { key: "A", text: "OSI" },
      { key: "B", text: "TCP/IP" },
      { key: "C", text: "HTTP only" },
      { key: "D", text: "Ethernet only" },
    ],
    "B",
    "TCP/IP is a suite containing multiple networking protocols, including TCP and IP.",
    "TCP/IP ek complete protocol suite hai jisme TCP, IP aur many other protocols included hote hain.",
    { trick: "TCP + IP = TCP/IP Suite" },
  ),
  q(
    43,
    "Which OSI layer is closest to the end user?",
    [
      { key: "A", text: "Physical" },
      { key: "B", text: "Network" },
      { key: "C", text: "Application" },
      { key: "D", text: "Data Link" },
    ],
    "C",
    "The Application Layer provides network services that are directly accessible to applications/users.",
    "Application Layer user ke closest hoti hai kyunki applications network services isi level par use karti hain.",
    {
      exampleEn:
        "Web browsing and email applications use application-layer protocols.",
      exampleHi:
        "Browser aur email jaise applications network services use karte hain.",
      trick: "User → Application",
    },
  ),
  q(
    44,
    "Which device is commonly used to connect computers in a LAN?",
    [
      { key: "A", text: "Switch" },
      { key: "B", text: "Router only" },
      { key: "C", text: "Satellite" },
      { key: "D", text: "Keyboard" },
    ],
    "A",
    "A switch connects multiple devices within a LAN.",
    "LAN mein multiple computers ko connect karne ke liye switch commonly use hota hai.",
    {
      exampleEn:
        "A college lab can have many PCs connected to an Ethernet switch.",
      exampleHi:
        "College lab ke multiple PCs ek Ethernet switch se connected ho sakte hain.",
      trick: "LAN → Switch",
    },
  ),
  q(
    45,
    "Which device is generally more intelligent than a hub for forwarding local traffic?",
    [
      { key: "A", text: "Switch" },
      { key: "B", text: "Cable" },
      { key: "C", text: "Connector" },
      { key: "D", text: "Keyboard" },
    ],
    "A",
    "A switch learns MAC addresses and can forward frames selectively rather than simply repeating them to every port.",
    "Hub sabko data bhej deta hai, lekin switch MAC address ke basis par specific port choose kar sakta hai.",
    { trick: "Hub = All, Switch = Select" },
  ),
];