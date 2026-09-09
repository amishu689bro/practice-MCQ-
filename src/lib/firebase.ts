import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

/**
 * Firebase configuration comes from environment variables so the same build
 * works across dev/prod. See `.env.local.example` for the expected keys.
 *
 * The app works fully without Firebase configured (offline/localStorage mode);
 * these getters simply return null until the env vars are provided.
 */
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** True when all required Firebase env vars are present. */
export function isFirebaseConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.authDomain &&
      firebaseConfig.projectId &&
      firebaseConfig.appId,
  );
}

let app: FirebaseApp | null = null;

function ensureApp(): FirebaseApp | null {
  if (!isFirebaseConfigured()) {
    return null;
  }
  if (!app) {
    // Reuse an already-initialized app (e.g. Fast Refresh) instead of throwing.
    app = getApps().length ? getApp() : initializeApp(firebaseConfig as Record<string, string>);
  }
  return app;
}

/** Lazily-initialized Firebase Auth instance, or null when not configured. */
export function getFirebaseAuth(): Auth | null {
  const a = ensureApp();
  return a ? getAuth(a) : null;
}

/** Lazily-initialized Firestore instance, or null when not configured. */
export function getFirebaseDb(): Firestore | null {
  const a = ensureApp();
  return a ? getFirestore(a) : null;
}