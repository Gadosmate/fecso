import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Database, getDatabase } from 'firebase/database';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDqtwoGbZvU_RpApI6ur2Z6U1AiC5QiMIg",
  authDomain: "fecske-dolgozoi.firebaseapp.com",
  databaseURL: "https://fecske-dolgozoi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fecske-dolgozoi",
  storageBucket: "fecske-dolgozoi.appspot.com",
  messagingSenderId: "622548077023",
  appId: "1:622548077023:web:e79f502226240560681c6a",
  measurementId: "G-PZY8JDBMQ0"  // Your Firebase configuration
};

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let database: Database | undefined;

export function useFirebase() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !app) {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      database = getDatabase(app);
      setIsInitialized(true);
    }
  }, []);

  return {
    isInitialized,
    auth,
    database,
  };
}