import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/config.firebase";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //user state
  const [user, setUser] = useState(null);
  const [authErrors, setAuthErrors] = useState(null);

  const removeAuthErrors = () => {
    setAuthErrors(null);
  };
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

  // Sign In with Emaill Password
  const generalSignUp = (email, password, displayName, photoURL) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const { user } = userCredential;
        updateProfile(auth.currentUser, { displayName, photoURL }).then(() => {
          setUser({ ...user });
        });
      }
    );
  };

  // Sign In With Google
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setAuthErrors(null);
      })
      .catch((error) => {
        if (
          error.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          setAuthErrors("Account exists with different credential");
        }
      });
  };

  // Sign In with Github
  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then(() => {
        setAuthErrors(null);
      })
      .catch((error) => {
        if (
          error.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          setAuthErrors("Account exists with different credential");
        }
      });
  };
  //data to be send with context
  const data = {
    signInWithGoogle,
    signInWithGithub,
    user,
    logout,
    loading,
    authErrors,
    removeAuthErrors,
    generalSignUp,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
