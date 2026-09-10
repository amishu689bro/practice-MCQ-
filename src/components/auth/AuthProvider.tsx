"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import {
  pullCloudProgress,
  pushQuizProgress,
} from "@/lib/cloudSync";
import { setSyncHook } from "@/components/quiz/state";

interface AuthContextValue {
  user: User | null;
  /** True while the initial auth state is being resolved. */
  loading: boolean;
  /** True when Firebase env vars are configured. */
  enabled: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const enabled = isFirebaseConfigured();

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
      if (nextUser) {
        // Signed in — merge cloud progress with local, then enable write-through.
        pullCloudProgress(nextUser).catch((error) =>
          console.error("Initial cloud sync failed:", error),
        );
        setSyncHook((quizId, state) => pushQuizProgress(nextUser, quizId, state));
      } else {
        setSyncHook(null);
      }
    });

    return () => {
      unsubscribe();
      setSyncHook(null);
    };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in failed:", error);
      throw error;
    }
  }, []);

  const signOutUser = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    await signOut(auth);
  }, []);

  const value = useMemo(
    () => ({ user, loading, enabled, signInWithGoogle, signOutUser }),
    [user, loading, enabled, signInWithGoogle, signOutUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}