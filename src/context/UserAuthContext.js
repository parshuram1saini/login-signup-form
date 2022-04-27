import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

// createcontext ............
const Authdata = createContext();

export function UserAuthdata({ children }) {
  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe(); //it's return for component did unmount
    };
  }, []);
  return (
    <Authdata.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </Authdata.Provider>
  );
}
export function useUserAuth() {
  return useContext(Authdata);
}
