/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig/firebase.config";

//making context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const[user, setUser] = useState({});


  //log in by google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //creatiing a user or sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in a user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out a user
  const logOut = () => {
    return signOut(auth)
  }

  //onauthstateChanged or observer
 useEffect(()=>{
    onAuthStateChanged(auth, user => {
        setUser(user)
    });
 },[])
 console.log(user)

  const authentication = {
    googleLogin,
    createUser,
    signIn,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
