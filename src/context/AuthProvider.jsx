import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/config.firebase";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //user state
  const [user, setUser] = useState(null);

  //loading state
  const [loading, setLoading] = useState(true);
  // Set user on auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signed in
        setUser(user);
        setLoading(false);
      } else {
        // User is signed out
        setUser(null);
        setLoading(false);
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  // user logout
  const logout = () => {
    signOut(auth);
  };

  // Sign In With Google
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
  };

  //data to be send with context
  const data = { signInWithGoogle, user, logout, loading };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
