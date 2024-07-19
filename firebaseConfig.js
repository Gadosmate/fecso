import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Database } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqtwoGbZvU_RpApI6ur2Z6U1AiC5QiMIg",
  authDomain: "fecske-dolgozoi.firebaseapp.com",
  databaseURL: "https://fecske-dolgozoi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fecske-dolgozoi",
  storageBucket: "fecske-dolgozoi.appspot.com",
  messagingSenderId: "622548077023",
  appId: "1:622548077023:web:e79f502226240560681c6a",
  measurementId: "G-PZY8JDBMQ0"
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let database: Database | undefined;

export async function initializeFirebase() {
  if (!app && typeof window !== 'undefined') {
    const { initializeApp } = await import('firebase/app');
    const { getAuth } = await import('firebase/auth');
    const { getDatabase } = await import('firebase/database');

    const firebaseConfig = {
      // Your Firebase configuration
    };

    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    database = getDatabase(app);
  }
}

export function getFirebaseAuth(): Auth | undefined {
  return auth;
}

export function getFirebaseDatabase(): Database | undefined {
  return database;
}


export { app };

