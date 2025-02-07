/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase/Firbase.config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [pass, setpasserror] = useState("");

  const [user, setUser] = useState(null);

  const [loading, setloading] = useState(true);

  const googleprovider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      setUser(currentuser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleprovider);
  };

  const logout = () => {
    setloading(true);
    return signOut(auth);
  };

  const updateprofile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData).then(() => {
      setUser({
        displayName: updatedData.displayName,
        photoURL: updatedData.photoURL,
      });
    });
  };

  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authinfo = {
    createUser,
    setpasserror,
    pass,
    loginUser,
    user,
    logout,
    loading,
    updateprofile,
    loginWithGoogle,
    forgetPass,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
