import type { Quiz } from "./types";
import { scenarioQuestions } from "./scenario";
import { scenarioQ1ToQ50 } from "./scenario-q1-q50";
import { unit1Quiz } from "./unit1";
import { unit1Quiz2 } from "./unit1-quiz2";
import { unit1Quiz3 } from "./unit1-quiz3";
import { unit2Quiz } from "./unit2";
import { unit2ScenarioQuiz } from "./unit2-scenarios";
import { osiModelQuiz } from "./osi-model";
import { tcpIpQuiz } from "./tcp-ip";
import { introductionQuiz } from "./introduction";
import { networkTypesQuiz } from "./topic2-networks-types";
import { networkHardwareQuiz } from "./topic3-network-hardware";
import { topologyQuiz } from "./topic4-topologies";
import { hubQuiz } from "./topic5-network-hub";
import { switchQuiz } from "./topic6-network-switch";
import { routerQuiz } from "./topic7-network-router";

/**
 * Registry of all available quizzes.
 * Add new quizzes here to make them appear on the home page.
 */
export const quizzes: Quiz[] = [
  unit1Quiz,
  unit1Quiz2,
  unit1Quiz3,
  unit2Quiz,
  unit2ScenarioQuiz,
  osiModelQuiz,
  tcpIpQuiz,
  introductionQuiz,
  networkTypesQuiz,
  networkHardwareQuiz,
  topologyQuiz,
  hubQuiz,
  switchQuiz,
  routerQuiz,
  {
    id: "computer-networks-unit-1-scenarios-q1-q50",
    title: "Computer Networks: Scenario-Based MCQs Q1–Q50",
    locked: true,
    subject: "Computer Networks",
    unit: "Unit 1 · Scenarios Q1–Q50",
    description:
      "50 scenario-based questions on topologies, network types, devices, OSI layers, TCP/IP and troubleshooting with English + Hinglish explanations.",
    topics: [
      "Topologies",
      "Network Types",
      "Devices",
      "OSI Model",
      "TCP/IP",
      "Network Concepts",
    ],
    questions: scenarioQ1ToQ50,
  },
  {
    id: "computer-networks-unit-1-scenarios",
    title: "Computer Networks: Scenario-Based MCQs",
    locked: true,
    subject: "Computer Networks",
    unit: "Unit 1 · Scenarios",
    description:
      "50 scenario-based MCQs covering network types, topologies, devices, OSI layers and TCP/IP with English + Hinglish explanations.",
    topics: [
      "Network Types",
      "Topologies",
      "Devices",
      "OSI Model",
      "TCP/IP",
      "Troubleshooting",
    ],
    questions: scenarioQuestions,
  },
];

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}