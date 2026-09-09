import { useSyncExternalStore } from "react";
import type { OptionKey } from "@/data/types";

export type Phase = "playing" | "results";

export interface ProgressState {
  /** questionId -> selected option key */
  answers: Record<number, OptionKey>;
  /** questionId -> true once the answer has been checked */
  submitted: Record<number, boolean>;
  currentIndex: number;
  phase: Phase;
}

export const DEFAULT_STATE: ProgressState = {
  answers: {},
  submitted: {},
  currentIndex: 0,
  phase: "playing",
};

const KEY_PREFIX = "mcq-progress-v1:";

function storageKey(quizId: string): string {
  return `${KEY_PREFIX}${quizId}`;
}

/** Reads persisted progress from localStorage (returns the default when unavailable). */
export function loadState(quizId: string): ProgressState {
  try {
    const raw = localStorage.getItem(storageKey(quizId));
    if (!raw) {
      return freshDefault();
    }
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      answers: parsed.answers ?? {},
      submitted: parsed.submitted ?? {},
      currentIndex: Math.max(0, parsed.currentIndex ?? 0),
      phase: parsed.phase === "results" ? "results" : "playing",
    };
  } catch {
    return freshDefault();
  }
}

function saveState(quizId: string, state: ProgressState): void {
  try {
    localStorage.setItem(storageKey(quizId), JSON.stringify(state));
  } catch {
    // Ignore storage failures (e.g. private browsing).
  }
}

export function clearState(quizId: string): void {
  try {
    localStorage.removeItem(storageKey(quizId));
  } catch {
    // Ignore storage failures.
  }
}

function freshDefault(): ProgressState {
  return { ...DEFAULT_STATE, answers: {}, submitted: {} };
}

/*
 * A tiny external store backed by localStorage.
 *
 * Components subscribe via useQuizState(); writes go through putQuizState()
 * which updates in-memory snapshots, persists to localStorage and notifies
 * all subscribers.
 *
 * We use React's useSyncExternalStore so the server and client agree on the
 * first render (no hydration mismatch): getServerSnapshot always returns the
 * default state, while the client-side getSnapshot restores real progress and
 * React re-syncs after hydration.
 */

type Listener = () => void;

const listeners = new Set<Listener>();
const snapshots = new Map<string, ProgressState>();

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(quizId: string): ProgressState {
  if (!snapshots.has(quizId)) {
    snapshots.set(quizId, loadState(quizId));
  }
  return snapshots.get(quizId) as ProgressState;
}

/** Stable snapshot used for server rendering — returns the same reference every call. */
const SERVER_SNAPSHOT: ProgressState = {
  ...DEFAULT_STATE,
  answers: {},
  submitted: {},
};

function getServerSnapshot(): ProgressState {
  // No localStorage on the server — always the default state.
  return SERVER_SNAPSHOT;
}

function setSnapshot(quizId: string, state: ProgressState): void {
  snapshots.set(quizId, state);
  saveState(quizId, state);
  listeners.forEach((listener) => listener());
}

/** Read the current progress for a quiz, synced with persisted storage. */
export function useQuizState(quizId: string): ProgressState {
  return useSyncExternalStore<ProgressState>(
    subscribe,
    () => getSnapshot(quizId),
    getServerSnapshot,
  );
}

/** Update and persist progress for a quiz, notifying all subscribers. */
export function putQuizState(quizId: string, state: ProgressState): void {
  setSnapshot(quizId, state);
}