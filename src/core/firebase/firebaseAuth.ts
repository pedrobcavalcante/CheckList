import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export const login = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
