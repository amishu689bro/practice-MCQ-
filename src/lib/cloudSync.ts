import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import type { User } from "firebase/auth";
import { getFirebaseDb } from "./firebase";
import type { ProgressState } from "@/components/quiz/state";
import { loadState, putQuizState } from "@/components/quiz/state";
import { quizzes } from "@/data";

/**
 * Cloud sync of quiz progress to Firestore.
 *
 * Document layout:
 *   users/{uid}/progress/{quizId}  -> ProgressState JSON
 *
 * Merge strategy when signing in: whichever copy (local or cloud) has more
 * submitted answers wins; ties go to local. After that, every local change is
 * written through to Firestore (debounced).
 */

const DEBOUNCE_MS = 800;

const debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

function docRef(uid: string, quizId: string) {
  const db = getFirebaseDb();
  if (!db) return null;
  return doc(db, "users", uid, "progress", quizId);
}

/** Pull cloud progress for every quiz and keep the better (local or cloud) copy. */
export async function pullCloudProgress(user: User): Promise<void> {
  const db = getFirebaseDb();
  if (!db) return;

  await Promise.all(
    quizzes.map(async (quiz) => {
      try {
        const ref = docRef(user.uid, quiz.id);
        if (!ref) return;
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          // Nothing in the cloud yet — push the local copy up.
          await setDoc(ref, loadState(quiz.id));
          return;
        }
        const cloud = snap.data() as Partial<ProgressState>;
        const local = loadState(quiz.id);
        const cloudCount = Object.keys(cloud.submitted ?? {}).length;
        const localCount = Object.keys(local.submitted).length;

        if (cloudCount > localCount) {
          // Cloud is ahead (e.g. answered on another device) — use it.
          putQuizState(quiz.id, {
            answers: cloud.answers ?? {},
            submitted: cloud.submitted ?? {},
            currentIndex: Math.max(0, cloud.currentIndex ?? 0),
            phase: cloud.phase === "results" ? "results" : "playing",
          });
        } else if (localCount > 0 && cloudCount < localCount) {
          // Local is ahead — push it up.
          await setDoc(ref, local);
        }
      } catch (error) {
        console.error(`Cloud sync failed for quiz ${quiz.id}:`, error);
      }
    }),
  );
}

/** Write-through a single quiz's progress to Firestore (debounced). */
export function pushQuizProgress(
  user: User,
  quizId: string,
  state: ProgressState,
): void {
  const ref = docRef(user.uid, quizId);
  if (!ref) return;

  const existing = debounceTimers.get(quizId);
  if (existing) clearTimeout(existing);

  debounceTimers.set(
    quizId,
    setTimeout(() => {
      debounceTimers.delete(quizId);
      setDoc(ref, state).catch((error) =>
        console.error(`Cloud write failed for quiz ${quizId}:`, error),
      );
    }, DEBOUNCE_MS),
  );
}